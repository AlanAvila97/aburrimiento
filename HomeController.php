<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Redis;
use DB;
use Storage;
use GuzzleHttp\Client;
use Http;
use Illuminate\Routing\Route;
use Log;
use Cache;

use function Ramsey\Uuid\v1;

// use Carbon\Carbon;

class HomeController extends Controller
{
    //
    public function index(){
        $now = date('YmdHis');
        $noticias = $this->getJsonDataWithFallback('https://panel.oncenoticias.digital/wp-json/miapi/v1/notinicio?cache='.$now);
        $partials = $this->getDataPartials();        
        return view('index', ['noticias' => $noticias, 'partials' => $partials]);
    }
    /**
     * Obtiene datos JSON con fallback a archivo local
     */
    protected function getJsonDataWithFallback($url){
        $localJsonPath = public_path('noticias_local.json');
        
        // 1. Primero verificar si tenemos un archivo local reciente (<2 minutos)
        if (file_exists($localJsonPath) && (time() - filemtime($localJsonPath)) < 120) {
            $localData = $this->loadLocalJson($localJsonPath);
            if ($localData) {
                return $localData;
            }
        }
        
        // 2. Intentar conectar al endpoint remoto
        try {
            $client = new Client();
            $response = $client->get($url, [
                'timeout' => 5,
                'connect_timeout' => 3
            ]);

            if ($response->getStatusCode() == 200) {
                $body = $response->getBody()->getContents();
                $data = json_decode($body, true);
                
                // Guardar localmente y en S3
                $this->saveJsonData($body, $localJsonPath);
                
                return $data;
            }
        } catch (\Exception $e) {
            Log::error('Error al conectar con la API: '.$e->getMessage());
        }
        
        // 3. Fallback al archivo local (aunque esté desactualizado)
        if (file_exists($localJsonPath)) {
            $localData = $this->loadLocalJson($localJsonPath);
            if ($localData) {
                return $localData;
            }
        }
        
        // 4. Último recurso: datos por defecto
        return $this->getDefaultData();
    }
    /**
     * Carga JSON local con manejo de errores
     */
    protected function loadLocalJson($path){
        try {
            $content = file_get_contents($path);
            $data = json_decode($content, true);
            return $data ?: null;
        } catch (\Exception $e) {
            Log::error('Error al leer JSON local: '.$e->getMessage());
            return null;
        }
    }
    /**
     * Guarda los datos JSON localmente y en S3
     */
    protected function saveJsonData($jsonContent, $localPath){
        try {
            // Guardar localmente
            file_put_contents($localPath, $jsonContent);
            
            // También guardar en S3
            Storage::disk('s3')->put('/REST/data/noticias2025/homenoticias.json', $jsonContent, 'public');
        } catch (\Exception $e) {
            Log::error('Error al guardar JSON: '.$e->getMessage());
        }
    }
    /**
     * Datos por defecto si todo falla
     */
    protected function getDefaultData(){
        return [
            // ... estructura de datos por defecto
            '_info' => 'Datos en modo offline'
        ];
    }    
    public function blog(Request $request, $cat, $slug, $id){
        $localJsonPath = public_path("posts/{$id}.json");
        $cacheTimeLimit = 120; // 2 minutos
        
        // 1. Verificar caché reciente (prioridad máxima)
        if (file_exists($localJsonPath)) {
            $fileAge = time() - filemtime($localJsonPath);
            
            // Si el archivo es reciente, usarlo inmediatamente
            if ($fileAge < $cacheTimeLimit) {
                $localData = $this->loadLocalPost($localJsonPath);
                if ($localData && $this->validatePostData($localData)) {
                    $localData['cache_info'] = [
                        'cached' => true,
                        'age_seconds' => $fileAge,
                        'fresh' => true
                    ];
                    return view('blog.index', $localData);
                }
            }
        }
        
        // 2. Intentar obtener datos remotos con múltiples reintentos
        $remoteData = $this->fetchRemotePost($id);
        
        if ($remoteData) {
            $postData = $this->processPostData($remoteData);
            $this->savePostData($postData, $localJsonPath);
            
            $postData['cache_info'] = [
                'cached' => false,
                'fresh' => true,
                'source' => 'remote'
            ];
            
            return view('blog.index', $postData);
        }
        
        // 3. Fallback: usar caché antiguo si existe
        if (file_exists($localJsonPath)) {
            $localData = $this->loadLocalPost($localJsonPath);
            
            if ($localData && $this->validatePostData($localData)) {
                $fileAge = time() - filemtime($localJsonPath);
                
                $localData['cache_info'] = [
                    'cached' => true,
                    'age_seconds' => $fileAge,
                    'age_human' => $this->humanReadableTime($fileAge),
                    'fresh' => false,
                    'message' => 'Mostrando versión guardada. El contenido puede estar desactualizado.'
                ];
                
                return view('blog.index', $localData);
            }
        }
        
        // 4. Sin datos disponibles: mostrar opciones al usuario
        return $this->showErrorOptions($id, $cat, $slug);
    }
    /**
     * Obtiene datos remotos con reintentos inteligentes
     */
    protected function fetchRemotePost($id, $maxRetries = 3){
        $baseUrl = "https://oncenoticias.digital/wp-json/miapi/v1/entrada/?id={$id}";
        $timeouts = [5, 8, 12]; // Timeouts progresivos
        
        for ($attempt = 0; $attempt < $maxRetries; $attempt++) {
            try {
                $timeout = $timeouts[$attempt] ?? 10;
                
            // Log::info("Intento {$attempt + 1} de obtener artículo {$id} (timeout: {$timeout}s)");
                
                $response = Http::timeout($timeout)
                    ->retry(1, 100) // Retry automático de Laravel
                    ->get($baseUrl);
                
                if ($response->successful()) {
                    $data = $response->json();
                    
                    // Validar que tenemos datos útiles
                    if (isset($data['title']) || isset($data['content'])) {
                        Log::info("Artículo {$id} obtenido exitosamente en intento " . ($attempt + 1));
                        return $data;
                    }
                }
                
            // Log::warning("Intento {$attempt + 1} falló para artículo {$id}. Status: " . $response->status());
                
            } catch (\Illuminate\Http\Client\ConnectionException $e) {
                Log::error("Error de conexión en intento " . ($attempt + 1) . " para artículo {$id}: " . $e->getMessage());
            } catch (\Exception $e) {
                Log::error("Error en intento " . ($attempt + 1) . " para artículo {$id}: " . $e->getMessage());
            }
            
            // Esperar antes del siguiente intento (excepto en el último)
            if ($attempt < $maxRetries - 1) {
                usleep(500000); // 0.5 segundos
            }
        }
        
        Log::error("No se pudo obtener artículo {$id} después de {$maxRetries} intentos");
        return null;
    }
    /**
     * Valida que los datos del post sean utilizables
     */
    protected function validatePostData($data){
        if (!is_array($data)) {
            return false;
        }
        
        // Verificar campos esenciales
        $requiredFields = ['title', 'description'];
        foreach ($requiredFields as $field) {
            if (empty($data[$field])) {
                Log::warning("Campo requerido '{$field}' está vacío en los datos del post");
                return false;
            }
        }
        
        return true;
    }

    /**
     * Carga un post desde JSON local con validación robusta
     */
    protected function loadLocalPost($path){
        try {
            if (!file_exists($path)) {
                return null;
            }
            
            if (!is_readable($path)) {
                Log::error("No se puede leer el archivo: {$path}");
                return null;
            }
            
            $content = file_get_contents($path);
            
            if ($content === false || empty($content)) {
                Log::error("Contenido vacío o error al leer: {$path}");
                return null;
            }
            
            $data = json_decode($content, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                Log::error("Error al decodificar JSON de {$path}: " . json_last_error_msg());
                return null;
            }
            
            return $data;
            
        } catch (\Exception $e) {
            Log::error('Error al cargar post local: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * Guarda datos del post con validación
     */
    protected function savePostData($data, $path){
        try {
            $directory = dirname($path);
            
            // Crear directorio si no existe
            if (!file_exists($directory)) {
                if (!mkdir($directory, 0755, true)) {
                    Log::error("No se pudo crear directorio: {$directory}");
                    return false;
                }
            }
            
            // Verificar permisos de escritura
            if (!is_writable($directory)) {
                Log::error("No hay permisos de escritura en: {$directory}");
                return false;
            }
            
            $jsonContent = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            
            if ($jsonContent === false) {
                Log::error("Error al codificar JSON: " . json_last_error_msg());
                return false;
            }
            
            // Guardar en archivo temporal primero (prevenir corrupción)
            $tempPath = $path . '.tmp';
            $bytesWritten = file_put_contents($tempPath, $jsonContent, LOCK_EX);
            
            if ($bytesWritten === false) {
                Log::error("Error al escribir archivo temporal: {$tempPath}");
                return false;
            }
            
            // Mover archivo temporal al destino final
            if (!rename($tempPath, $path)) {
                Log::error("Error al mover archivo temporal a: {$path}");
                @unlink($tempPath); // Limpiar archivo temporal
                return false;
            }
            
            Log::info("Post guardado exitosamente: {$path}");
            return true;
            
        } catch (\Exception $e) {
            Log::error('Error al guardar post: ' . $e->getMessage());
            return false;
        }
    }

    /**
     * Procesa los datos del post para la vista
     */
    protected function processPostData($post){
        $title = $post['title'] ?? 'Sin título';
        $categories = $post['categories'] ?? [];
        $tags = $post['tags'] ?? [];
        $description = $post['content'] ?? '';
        $excerpt = $post['excerpt'] ?? '';
        $img = $post['img'] ?? '';
        $fecha = $post['date'] ?? now()->format('d/m/Y');
        
        // Procesamiento de imágenes
        $newUrls = [];
        if (!empty($img)) {
            $pathInfo = pathinfo($img);
            $baseName = $pathInfo['filename'] ?? '';
            $extension = $pathInfo['extension'] ?? 'jpg';
            $dirname = $pathInfo['dirname'] ?? '';
            
            $sizes = ['', '-300x200', '-500x500', '-746x420', '-920x554'];
            
            foreach ($sizes as $size) {
                $newImageName = $baseName . $size . '.' . $extension;
                $newUrls[] = $dirname . '/' . $newImageName;
            }
        }
        
        // Modificar enlaces en el contenido
        $baseUrl = url('/');
        $htmlModificado = preg_replace_callback(
            '/<a\s+href="https:\/\/oncenoticias\.digital([^"]*)"/',
            function ($matches) use ($baseUrl) {
                return '<a href="' . $baseUrl . $matches[1] . '"';
            },
            $description
        );
        
        return [
            'title' => $title,
            'fecha' => $fecha,
            'cats' => $categories,
            'excerpt' => $excerpt,
            'description' => $htmlModificado,
            'tags' => $tags,
            'imagenes' => $newUrls,
            'partials' => $this->getDataPartials(),
        ];
    }
    /**
     * Muestra página de error con opciones
     */
    protected function showErrorOptions($id, $cat, $slug){
        $localJsonPath = public_path("posts/{$id}.json");
        $hasCache = file_exists($localJsonPath);
        
        $data = [
            'error_type' => 'not_available',
            'article_id' => $id,
            'category' => $cat,
            'slug' => $slug,
            'has_cache' => $hasCache,
            'retry_url' => url()->current(),
            'home_url' => route('home'),
            'partials' => $this->getDataPartials(),
        ];
        
        return view('blog.error', $data);
    }

    /**
     * Convierte segundos a formato legible
     */
    protected function humanReadableTime($seconds){
        if ($seconds < 60) {
            return $seconds . ' segundos';
        } elseif ($seconds < 3600) {
            $minutes = floor($seconds / 60);
            return $minutes . ' minuto' . ($minutes > 1 ? 's' : '');
        } elseif ($seconds < 86400) {
            $hours = floor($seconds / 3600);
            return $hours . ' hora' . ($hours > 1 ? 's' : '');
        } else {
            $days = floor($seconds / 86400);
            return $days . ' día' . ($days > 1 ? 's' : '');
        }
    }
    public function seccionVideos(Request $request, $cat, $id){        
        $partials = $this->getDataPartials();  
        $data_videos = $this->getJsonData('https://oncenoticias.digital/wp-json/miapi/v1/vidapi?categoria='.$cat.'&video='.$id);        
        $data = [  
                    'partials' => $partials,
                    'currentVideo' => $data_videos[0]['blog'],
                    'playList' => $data_videos[1]['blog'],
                    'id' => $id,
                    'categoria' => $cat,
                ];
        return view('pages.videos.index', $data);         
    }
    public function seccionPlayListNoticieros(Request $request, $id){      
        $partials = $this->getDataPartials();  
        $infoNoticiario = $this->getDataNoticieros($id);                
        $videos = $this->getDataPlayList($infoNoticiario['url_videos']);
        $data = [  
                    'partials' => $partials,
                    'img_banner' => $infoNoticiario['banner'],
                    'link_banner' => $infoNoticiario['link_banner'],
                    'videos' => $videos
                ];
        return view('pages.en_vivo.playlist_noticieros', $data);        
    }
    public function seccionLiveVideo(Request $request){                
        $partials = $this->getDataPartials();  
        $programation = $this->getDataPlayList('https://api.vimeo.com/me/videos?fields=name,duration,embed.html,pictures.base_link&&per_page=10');
        $data = [  
            'partials' => $partials,
            'programation' => $programation
        ];
        return view('pages.en_vivo.index', $data);        
    }
    public function getDataNoticieros($id){
        $data = [];
        switch ($id) {
            case 'matutino':
                $data["banner"] = 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/MATUTINO_LIVE.png';
                $data["link_banner"] = Route('pages.en_vivo.playlist_noticieros', ['id' => 'matutino']);
                $data["url_videos"] = 'https://api.vimeo.com/me/projects/16293779/videos?fields=name,duration,embed.html,pictures.base_link&&per_page=10';
                break;
            case 'meridiano':
                $data["banner"] = 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/MERIDIANO_LIVE.png';
                $data["link_banner"] = Route('pages.en_vivo.playlist_noticieros', ['id' => 'meridiano']);
                $data["url_videos"] = 'https://api.vimeo.com/me/projects/16293788/videos?fields=name,duration,embed.html,pictures.base_link&&per_page=10';
                break;
            case 'nocturno':
                $data["banner"] = 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/NOCTURNO.png';
                $data["link_banner"] = Route('pages.en_vivo.playlist_noticieros', ['id' => 'nocturno']);
                $data["url_videos"] = 'https://api.vimeo.com/me/projects/16293774/videos?fields=name,duration,embed.html,pictures.base_link&&per_page=10';
                break;
            case 'dominical':
                $data["banner"] = 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/DOMINICAL_LIVE.png';
                $data["link_banner"] = Route('pages.en_vivo.playlist_noticieros', ['id' => 'dominical']);
                $data["url_videos"] = 'https://api.vimeo.com/me/projects/16293952/videos?fields=name,duration,embed.html,pictures.base_link&&per_page=10';
                break;
        }
        return $data;
    }
    public function getDataPlayList($url){
        $token = '34eb635f31b4bd2d88c789f9615f5df9';
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'Cache-Control: no-cache',
                'Authorization: bearer ' . $token
            ],
            CURLOPT_SSL_VERIFYPEER => true,
            CURLOPT_TIMEOUT => 30 ]);
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Error en cURL: ' . curl_error($ch);
        } else {
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if ($httpCode === 200) {
                $data = json_decode($response, true);

        	    $videosArray = array();                
                foreach ($data['data'] as $valor) {
                    $video = [
                        'name' => $valor['name'],
                        'duration' => $this->getTime($valor['duration']),
                        'html' => $valor['embed']['html'],
                        'image' => $valor['pictures']['base_link'],
                    ];
                    array_push($videosArray,$video);
                }
                return $videosArray;
            } else {
                echo 'Error en la API. Código HTTP: ' . $httpCode;
                echo '<br>Respuesta: ' . $response;
            }
        }
        curl_close($ch);
    }
    function getTime($duration){
        $parseDuration = floatval($duration);        
		$hours = '';
		$minutes = floor($parseDuration/60);
		$seconds = $parseDuration - ($minutes*60);
		if($minutes>60){
			$hours = floor($minutes/60);
			$minutes = $minutes - ($hours * 60);
			$hours = "$hours:";
			if($minutes < 10){
			    $minutes = "0$minutes";
			}
		}
		if ($seconds < 10){
			$seconds= "0$seconds";
		}
	  	return "$hours$minutes:$seconds";
	}
    /**
     * Método mejorado para obtener datos JSON genéricos
     */
    public function getJsonData($url, $useCache = false){
        try {
            // Si se solicita caché y existe, intentar usarlo
            if ($useCache) {
                $cacheKey = 'json_' . md5($url);
                $cached = Cache::get($cacheKey);
                
                if ($cached) {
                    return $cached;
                }
            }
            
            $response = Http::timeout(15)
                ->retry(2, 200)
                ->get($url);
            
            if ($response->successful()) {
                $data = $response->json();
                
                // Guardar en caché si se solicita
                if ($useCache && $data) {
                    Cache::put($cacheKey, $data, now()->addMinutes(5));
                }
                
                return $data;
            } else {
                Log::warning("No se pudo obtener JSON de {$url}. Status: " . $response->status());
                return null;
            }
            
        } catch (\Exception $e) {
            Log::error("Error al obtener JSON de {$url}: " . $e->getMessage());
            return null;
        }
    }
    /**
     * Método mejorado para obtener datos de partials
     */
    public function getDataPartials(){
        $url = 'https://panel.oncenoticias.digital/wp-json/miapi/v1/notcomponente/?cache=' . date('YmdHis');
        
        $data = $this->getJsonData($url, true);
        
        // Si falla, retornar estructura vacía para no romper la vista
        if (!$data) {
            Log::warning("No se pudieron cargar partials, usando datos por defecto");
            return [
                'header' => [],
                'footer' => [],
                'sidebar' => []
            ];
        }
        
        return $data;
    }
}