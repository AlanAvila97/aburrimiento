<?php
/*

function actualizarj(){
    $now = date('YmdHis');
    $url = 'https://cron.oncetvmexico.com/homejob?cache=' . $now;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPGET, true);
    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        die("Error en cURL: " . curl_error($ch));
    }
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($http_code != 200) {
        die("Error: Código de estado HTTP " . $http_code);
    }
    curl_close($ch);
    $data = json_decode($response, true);
    // Imprimir la respuesta (opcional)
    print_r($data);
}
add_action('save_post', 'actualizarj', 10, 1);*/
/*
function creajson() {
    function get_posts_tag1(){
        $args = array( 
            'tag__in' => array(49966, 49964,49965,49963,61203,49955,49956), // Filtrar por estas etiquetas
            'post_type' => 'post', // Obtener publicaciones del tipo 'post'
            'posts_per_page' => 300, // Mostrar hasta 50 publicaciones
        ); 
        return get_posts($args);
    }
    function get_posts_cat1(){
        $args = array( 
            'category__in' => array(34,26),
            'post_type' =>  'post',
            'posts_per_page' => 50, 
            'order' => 'DESC',
        ); 
        return get_posts($args);
    }
    function get_posts_cat2(){
        $args = array( 
            'category__in' => 61042,
            'category__not_in' => 61100,
            'post_type' =>  'post',
            'posts_per_page' => 20, 
            'order' => 'DESC',
        ); 
        return get_posts($args);
    }
    function get_posts_cat3(){
        $args = array( 
            'category__in' => array(61100,61661),
            'post_type' =>  'post',
            'posts_per_page' => 100, 
            'order' => 'DESC',
        ); 
        return get_posts($args);
    }
    function get_posts_id(){
        $args = array( 
            'post__in' => array(244758,446492,446495,446498), // Filtrar por estos IDs de publicaciones
            'post_type' => 'post', // Obtener publicaciones del tipo 'post'
            'posts_per_page' => 4, // Mostrar hasta 4 publicaciones
            'orderby' => 'post__in',
        ); 
        return get_posts($args);
    }
    function getNameCategorie($id){
        $args =  array_filter(wp_get_post_categories($id), function($value) {
            return $value != 61042; 
        });
        return get_category(end($args));
    }
    $GLOBALS['tag'] = get_posts_tag1();
    $GLOBALS['cat'] = get_posts_cat1();
    $GLOBALS['cat2'] = get_posts_cat2();
    $GLOBALS['cat3'] = get_posts_cat3();
    $GLOBALS['ids'] = get_posts_id();
        //Variables para Tags
        $b = 0;
        $c = 0;
        $d = 0;
        $e = 0;
        //Variables para Categorias
        $f = 0;
        $g = 0;
        $h = 0;
        $i = 0;
        $j = 0;
        $k = 0;
        $l = 0;
        //Variables por IDS
        $o = 0;
        //Arreglo
        $results = [];
        $results[0] = ['titulo' => 'Notas Principales Home', 'blog' => []];
        $results[1] = ['titulo' => 'Notas Principales Claudia', 'blog' => []];
        $results[2] = ['titulo' => 'Videos Noticiarios', 'blog' => []];
        $results[3] = ['titulo' => 'Videos Entrevistas', 'blog' => []];
        $results[4] = ['titulo' => 'Cultura Deporte', 'blog' => []];
        $results[5] = ['titulo' => 'Nuestras Fiestas', 'blog' => []];
        //Foreach Tags
        foreach ($GLOBALS['tag'] as $value) {
            foreach (get_the_tags($value->ID) as $v) {
                switch ($v->slug) {
                    case '1destacado':
                        $b++;
                        if($b < 2){
                            $id = $value->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[0]['blog'][0] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $value->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $value->slug,
                            ];
                        }
                    break;   
                    case '2destacado':
                        $c++;
                        if($c < 2){
                            $id = $value->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[0]['blog'][1] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $value->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $value->slug,
                            ];
                        }
                    break;  
                    case '3destacado':
                        $d++;
                        if($d < 2){
                            $id = $value->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[0]['blog'][2] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $value->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $value->slug,
                            ];
                        }
                    break;  
                    case '4destacado':
                        $e++;
                        if($e < 2){
                            $id = $value->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[0]['blog'][3] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $value->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $value->slug,
                            ];
                        }
                    break;  
                    case 'destacado-videos':
                        $f++;
                        if($f < 2){
                            $id = $value->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[0]['blog'][4] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $value->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $value->slug,
                            ];
                        }
                    break;
                    case '1carrusel':
                        $g++;
                        if($g < 3){
                            $id = $value->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[1]['blog'][] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $value->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $value->slug,
                            ];
                        }
                    break;
                    case '2carrusel':
                        $h++;
                        if($h < 3){
                            $id = $value->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[1]['blog'][] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $value->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $value->slug,
                            ];
                        }
                    break;
                    default:
                        # code...
                        break;
                }
            }
        }
        //Foreach Categorias 1
        foreach ($GLOBALS['cat'] as $valc) {
            foreach (get_the_category($valc->ID) as $cat) {
                $categoria2= $cat->term_id;
                switch ($categoria2) {
                    case '61100':
                        $i++;
                        if($i < 6){
                            $id = $valc->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[3]['blog'][] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $valc->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $cat->slug,
                            ];
                        }
                        break;
                    case '34':
                        $j++;
                        if($j < 3){
                            $id = $valc->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[4]['blog'][] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $valc->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $cat->slug,
                            ];
                        }
                        break;
                    case '26':
                        $k++;
                        if($k < 3){
                            $id = $valc->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[4]['blog'][] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $valc->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $cat->slug,
                            ];
                        }
                        break;
                    default:
                        # code...
                        break;
                }
            }
        }
        //Foreach Categorias 2
        foreach ($GLOBALS['cat2'] as $valc2) {
            $id = $valc2->ID;
            $thumbnail_id = get_post_thumbnail_id($id);
            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
            $results[2]['blog'][] = [
                'id' => $id,
                'title' => get_the_title($id),
                'img' => $img,
                'imgi' => $imgi,
                'extracto' => get_the_excerpt($id),
                'fecha' => get_the_date('', $id),
                'href' => get_permalink($id),
                'categoria' => getNameCategorie($id),
            ];
        }
        //Foreach Categorias 3
        foreach ($GLOBALS['cat3'] as $valc3) {
            foreach (get_the_category($valc3->ID) as $v3) {
                $categoria2= $v3->term_id;
                switch ($categoria2) {
                    case '61661':
                        $l++;
                        if($l < 9){
                            $id = $valc3->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[5]['blog'][] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $valc3->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $v3->slug,
                            ];
                        }
                        break;
                    case '61100':
                        $o++;
                        if($o < 6){
                            $id = $valc3->ID;
                            $thumbnail_id = get_post_thumbnail_id($id);
                            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
                            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
                            $results[3]['blog'][] = [
                                'id' => $id,
                                'title' => get_the_title($id),
                                'img' => $img,
                                'imgi' => $imgi,
                                'extracto' => $valc3->post_excerpt,
                                'fecha' => get_the_date('', $id),
                                'href' => get_permalink($id),
                                'tag_slug' => $v3->slug,
                            ];
                        }
                        break;
                    
                    default:
                        # code...
                        break;
                }
            }
        }
        //Foreach IDS
        foreach ($GLOBALS['ids'] as $vals) {
            $id = $vals->ID;
            $thumbnail_id = get_post_thumbnail_id($id);
            $img = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'full')[0] : '';
            $imgi = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'imgi')[0] : '';
            $results[1]['blog'][] = [
                'id' => $id,
                'title' => get_the_title($id),
                'img' => $img,
                'imgi' => $imgi,
                'content' => get_the_content(null, false, $id),
                'extracto' => get_the_excerpt($id),
                'fecha' => get_the_date('', $id),
                'href' => get_permalink($id),
            ];
        }
        $responseData = json_encode($results);
    // Escribir en el archivo
    file_put_contents('wp-content/pruebainicio1.json', $responseData);
    file_put_contents('json/pruebainicio1.json', $responseData);
    file_put_contents('wp-content/json/pruebainicio1.json', $responseData);
    file_put_contents('wp-content/uploads/json/pruebainicio1.json', $responseData);

}
add_action('save_post', 'creajson', 10, 1);*/
add_action( 'init', 'wpse4378_add_new_image_size' );
function wpse4378_add_new_image_size() {
    add_image_size( 'minis', 746, 420, true ); //notas inicio
    add_image_size( 'imgi', 750, 550, true ); //notas inicio
    add_image_size( 'med', 450, 600, true );
    //agregado por HOC el 01-12-2023 para app movil
    add_image_size( 'customSize', 500, 500, true );
}

function fjarrett_get_attachment_id_by_url( $url ) {

    // Split the $url into two parts with the wp-content directory as the separator
    $parsed_url  = explode( parse_url( WP_CONTENT_URL, PHP_URL_PATH ), $url );

    // Get the host of the current site and the host of the $url, ignoring www
    $this_host = str_ireplace( 'www.', '', parse_url( home_url(), PHP_URL_HOST ) );
    $file_host = str_ireplace( 'www.', '', parse_url( $url, PHP_URL_HOST ) );

    // Return nothing if there aren't any $url parts or if the current host and $url host do not match
    if ( ! isset( $parsed_url[1] ) || empty( $parsed_url[1] ) || ( $this_host != $file_host ) ) {
        return;
    }

    // Now we're going to quickly search the DB for any attachment GUID with a partial path match

    // Example: /uploads/2013/05/test-image.jpg
    global $wpdb;
    $attachment = $wpdb->get_col( $wpdb->prepare( "SELECT ID FROM {$wpdb->prefix}posts WHERE guid RLIKE %s;", $parsed_url[1] ) );

    // Returns null if no attachment is found
    return $attachment[0];
}
/**
 * Register with hook 'wp_enqueue_scripts', which can be used for front end CSS and JavaScript
 */
add_action( 'wp_enqueue_scripts', 'prefix_add_my_stylesheet' );

/**
 * Enqueue plugin style-file
 */
// all styles
// all scripts

function prefix_add_my_stylesheet() {
    $random = rand(5, 15000000);
    // Respects SSL, Style.css is relative to the current file
    wp_register_style( 'prefix-style', plugins_url('assets/css/custom.css?cache=2'.$random , __FILE__) );
    wp_enqueue_style( 'prefix-style' );
    
    wp_register_style( 'elecciones-style', plugins_url('assets/css/elecciones_2024.css?cache=2'.$random , __FILE__) );
    wp_enqueue_style( 'elecciones-style' );


}

add_action('wp_footer', 'prefix_add_my_stylesheet');
$random = rand(5, 15000000);
function prefix_add_footer_styles() {
    $random = rand(5, 15000000);
    wp_enqueue_style( 'destacadas-style', plugins_url('assets/css/destacadas_seccion_dos.css?cache=2'.$random , __FILE__) );
    wp_enqueue_style( 'video-css', plugins_url('assets/css/app.css' , __FILE__) );
    wp_enqueue_style( 'swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css', false );
    wp_enqueue_style( 'videos-style', plugins_url('assets/css/video_grid.css?cache=2'.$random , __FILE__) );
};
add_action( 'get_footer', 'prefix_add_footer_styles' );

function ti_custom_javascript() {
    $rand = rand(5, 15000000);
    wp_enqueue_script( 'jq-script', 'https://code.jquery.com/jquery-3.7.1.min.js');
    wp_enqueue_script( 'video-script', plugins_url('assets/js/app.min.js?cache=b'.$rand, __FILE__) );
    wp_enqueue_script( 'hls-script', 'https://cdn.jsdelivr.net/npm/hls.js@latest' );
    wp_enqueue_script( 'swiper-v-9', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', false );

   
    }
    add_action('wp_enqueue_scripts', 'ti_custom_javascript');
    
    function ti_custom_javascriptx() {
        $rand = rand(5, 15000000);
        wp_enqueue_script( 'swiper-v-9', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', false );

        
if ( is_front_page() && is_home() ) {
            // Default homepage
            wp_enqueue_script( 'vue-script', 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.15/vue.min.js' );
            wp_enqueue_script( 'fire-script', 'https://www.gstatic.com/firebasejs/5.9.3/firebase.js' );    
            // wp_enqueue_script( 'firecode-script', plugins_url('assets/js/videolive.js?cache=b'.$rand, __FILE__) );
       
            }
    
            if (  is_home() ) {
                // Default homepage
                wp_enqueue_script( 'vue-script', 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.15/vue.min.js' );
                wp_enqueue_script( 'fire-script', 'https://www.gstatic.com/firebasejs/5.9.3/firebase.js' );    
                // wp_enqueue_script( 'firecode-script', plugins_url('assets/js/videolive.js?cache=b'.$rand, __FILE__) );
           
                }
    
            if(is_page(290541)){
    
                wp_enqueue_script( 'vue-script', 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.15/vue.min.js' );
                wp_enqueue_script( 'fire-script', 'https://www.gstatic.com/firebasejs/5.9.3/firebase.js' );    
                // wp_enqueue_script( 'firecode-script', plugins_url('assets/js/videolive.js?cache=b'.$rand, __FILE__) );
           
    
            }
    
            if(is_page(240269)){
    
                wp_enqueue_script( 'vue-script', 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.15/vue.min.js' );
                wp_enqueue_script( 'fire-script', 'https://www.gstatic.com/firebasejs/5.9.3/firebase.js' );    
                // wp_enqueue_script( 'firecode-script', plugins_url('assets/js/videolive.js?cache=b'.$rand, __FILE__) );
           
    
            }


    
            
    
       
        }
        add_action('wp_footer', 'ti_custom_javascriptx');
        /*function excluir_categoria_de_busquedas($query) {
            if ($query->is_search() && !is_admin() && $query->is_main_query()) {
                $query->set('cat', '-61042');
            }
        }
        add_action('pre_get_posts', 'excluir_categoria_de_busquedas');*/
        function excluir_categoria($query) {
            if (!is_admin() && $query->is_main_query() && (is_home() || is_archive() || is_search())) {
                // Excluir la categoría con ID 65473
                $query->set('cat', array('-61042','-65546'));
            }
        }
        add_action('pre_get_posts', 'excluir_categoria');
        
?>