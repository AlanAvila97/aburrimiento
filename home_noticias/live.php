<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transmisión en Vivo - Once Noticias</title>
    <link rel="icon" type="image/png" sizes="16x16" href="https://oncenoticias.digital/iconos/logotran16.PNG">
    <link rel="icon" type="image/png" sizes="32x32" href="https://oncenoticias.digital/iconos/logotran32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="https://oncenoticias.digital/iconos/logotran64.png">
    <link rel="icon" type="image/png" sizes="256x256" href="https://oncenoticias.digital/iconos/logotran256.png">
    <link rel="icon" type="image/png" sizes="512x512" href="https://oncenoticias.digital/iconos/logotran512.png">
    <link rel="shortcut icon" type="image/x-icon" href="https://oncenoticias.digital/iconos/icono_app.png">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="./assets/vendor/bootstrap/css/bootstrap.css">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/fontawesome.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/solid.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/regular.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/brands.min.css">
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">
    <link rel="stylesheet" href="./assets/css/footer.css">
    <link rel="stylesheet" href="./assets/css/live.css">
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <?php require_once("./partials/header.php");?>
            <main class="content">
                <!-- Sección principal de transmisión en vivo -->
                <section class="section-live-streaming px-4 px-md-5 py-3 py-md-4">
                    <article class="container-fluid">
                        <div class="row g-3">
                            <!-- Reproductor Principal -->
                            <div class="col-lg-8">
                                <div class="video-player-wrapper">
                                    <div class="video-container position-relative">
                                        <!-- Reproductor de video -->
                                        <video 
                                            id="liveVideo" 
                                            class="video-player w-100" 
                                            controls 
                                            autoplay 
                                            poster="https://dummyimage.com/1200x675/000/fff">
                                            <source src="https://example.com/stream.m3u8" type="application/x-mpegURL">
                                            Tu navegador no soporta video HTML5.
                                        </video>
                                        
                                        <!-- Badge EN VIVO -->
                                        <div class="live-badge position-absolute top-0 start-0 m-3">
                                            <span class="badge bg-danger d-flex align-items-center gap-2">
                                                <span class="live-indicator"></span>
                                                EN VIVO
                                            </span>
                                        </div>

                                        

                                        <!-- Controles adicionales -->
                                        <div class="video-controls position-absolute bottom-0 end-0 m-3 d-flex gap-2">
                                            
                                        </div>
                                    </div>

                                    <!-- Información de la transmisión -->
                                    <div class="live-info p-3 border-top">
                                        <div class="row align-items-start">
                                            <div class="col-auto">
                                                <div class="live-avatar me-3">
                                                    <img src="./assets/img/logo.jpg" alt="Avatar del canal" class=" border border-2 border-light" width="60" height="60" style="object-fit: cover;">
                                                </div>
                                            </div>
                                            <div class="col flex-grow-1">
                                                <h2 class="h5 mb-1">Mañanera del Pueblo - En Vivo</h2>
                                                <p class="text-muted mb-2 small">
                                                    <i class="fas fa-calendar-alt"></i> Hoy a las 9:00 AM
                                                </p>
                                                <p class="mb-3">
                                                    Transmisión en vivo de la conferencia matutina con los temas más relevantes de actualidad.
                                                    Participación en tiempo real con preguntas y comentarios de la audiencia.
                                                </p>
                                                <div class="d-flex gap-2 flex-wrap">
                                                   
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- Sidebar derecho: Horarios y más -->
                            <div class="col-lg-4">
                                <!-- Horarios -->
                                <div class="live-schedule-wrapper d-flex flex-column h-100">
                                    <div class="schedule-tabs d-flex rounded-top overflow-hidden">
                                        <button type="button" class="schedule-tab active flex-fill" data-tab-target="Live">
                                            <i class="fas fa-clock"></i> Horarios
                                        </button>
                                        <button type="button" class="schedule-tab flex-fill" data-tab-target="Historico">
                                           <i class="fas fa-history"></i> Histórico de noticiarios
                                        </button>
                                    </div>

                                    <div class="chat-messages flex-grow-1 p-3 bg-white overflow-y-auto" id="chatMessages">
                                       <div id="Historico" class="tabcontent" style="display: none;">
                                        <a href="#" class="historico-item d-flex gap-3 align-items-center py-2 text-dark text-decoration-none">
                                            <img src="https://dummyimage.com/120x68/212529/ffffff" alt="Matutino" class="rounded" width="120" height="68">
                                            <span class="small fw-semibold">MATUTINO 20 MAYO 2026<br><span class="text-muted">1:36:56</span></span>
                                        </a>
                                        <a href="#" class="historico-item d-flex gap-3 align-items-center py-2 text-dark text-decoration-none">
                                            <img src="https://dummyimage.com/120x68/495057/ffffff" alt="Matutino" class="rounded" width="120" height="68">
                                            <span class="small fw-semibold">MATUTINO 21 MAYO 2026<br><span class="text-muted">1:39:55</span></span>
                                        </a>
                                        <a href="#" class="historico-item d-flex gap-3 align-items-center py-2 text-dark text-decoration-none">
                                            <img src="https://dummyimage.com/120x68/6c757d/ffffff" alt="Especial" class="rounded" width="120" height="68">
                                            <span class="small fw-semibold">A LAS 2 21 MAYO 2026<br><span class="text-muted">55:48</span></span>
                                        </a>
                                        <a href="#" class="historico-item d-flex gap-3 align-items-center py-2 text-dark text-decoration-none">
                                            <img src="https://dummyimage.com/120x68/6c757d/ffffff" alt="Matutino" class="rounded" width="120" height="68">
                                            <span class="small fw-semibold">MATUTINO 19 MAYO 2026<br><span class="text-muted">1:35:36</span></span>
                                        </a>
                                        <a href="#" class="historico-item d-flex gap-3 align-items-center py-2 text-dark text-decoration-none">
                                            <img src="https://dummyimage.com/120x68/6c757d/ffffff" alt="Matutino" class="rounded" width="120" height="68">
                                            <span class="small fw-semibold">MATUTINO 10 MAYO 2026<br><span class="text-muted">1:32:24</span></span>
                                        </a>
                                         <a href="#" class="historico-item d-flex gap-3 align-items-center py-2 text-dark text-decoration-none">
                                            <img src="https://dummyimage.com/120x68/6c757d/ffffff" alt="Matutino" class="rounded" width="120" height="68">
                                            <span class="small fw-semibold">MATUTINO 6 MAYO 2026<br><span class="text-muted">1:37:54</span></span>
                                        </a>
                                        
                                    </div>
                                       <div id="Live" class="tabcontent" style="display: block;"> 
                                        <strong>Lunes a viernes:</strong> 
                                        <hr class="rounded"> 
                                        <a href="" class="text-muted small" >Noticiario Matutino: 06:06 HRS</a><br> 
                                        <a href="" class="text-muted small" >Noticiario Meridiano: 14:00 HRS</a><br> 
                                        <a href="" class="text-muted small" >Punto de Referencia: 21:00 HRS</a><br> <br>
                                         <strong>Sabado y domingo</strong>
                                          <hr class="rounded">
                                           <a href="" class="text-muted small">Noticiario Sabatino: 21:00 HRS</a><br>
                                            <a href="" class="text-muted small">Noticiario Dominical: 20:00 HRS</a><br>
                                         </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                <!-- Sección de transmisiones relacionadas -->
                <section class="section-related-streams px-4 px-md-5 py-3 py-md-4 border-top">
                    <article class="container-fluid">
                        <div class="title-notes text-center mb-4">
                            <h2 class="h3 text-uppercase fw-bold">
                                Transmisiones Recomendadas
                            </h2>
                        </div>

                        <?php
                        $images = [
                            'https://dummyimage.com/400x225/212529/ffffff',
                            'https://dummyimage.com/400x225/495057/ffffff',
                            'https://dummyimage.com/400x225/6c757d/ffffff',
                            'https://dummyimage.com/400x225/343a40/ffffff'
                        ];
                        $summarys = [
                            'Cobertura especial: informe matutino',
                            'Mesa de analisis: panorama politico',
                            'Debate nocturno con especialistas',
                            'Resumen del dia: lo mas importante'
                        ];
                        $hrfs = ['#', '#', '#', '#'];
                        $length = 4;
                        require_once('./components/grid-transmisiones.php');
                        ?>
                    </article>
                </section>
            </main>
            <?php require_once("./partials/footer.php");?>
        </div>
    </div>

    <!-- Bootstrap -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/vendor/bootstrap/js/popper.min.js"></script>
    <!-- JS -->
    <script src="assets/js/live.js"></script>
</body>
</html>
