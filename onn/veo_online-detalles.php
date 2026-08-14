<?php 

    $id = isset($_GET['episode']) ? intval($_GET['episode']) : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>    
    <link rel="stylesheet" href="./assets/vendor/bootstrap/css/bootstrap.css">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/fontawesome.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/solid.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/regular.min.css">	
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/brands.min.css">
    <!-- Videojs -->
    <link rel="stylesheet" href="./assets/vendor/videojs/css/video-js.min.css">	
    <link rel="stylesheet" href="./assets/vendor/videojs/css/videojs-http-source-selector.css">	
    <link rel="stylesheet" href="./assets/vendor/videojs/css/videojs.caption.min.css">		
    <!--  -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">      
    <link rel="stylesheet" href="./assets/css/footer.css">     
    <link rel="stylesheet" href="./assets/css/veo_online-detalles.css">     
    <style>
    </style> 
</head>
<body class="bg-veo-online">
    <div id="wrapper" >
        <header class="header header-once">
            <div class="container-header">
                <div class="logo">
                    <a href="./" aria-label="Redirección a página principal">                    
                        <picture>
                            <source class="lazy img-fluid" srcset="./assets/img/logo_onn.svg" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/logo_onn.svg" 
                                type="image/png"> 
                            <img class="img-fluid lazy" src="./assets/img/logo_onn.svg" alt="Logo Once" width="139" height="45">
                        </picture>
                    </a>
                </div><!-- End div logo -->
                <div class="sections-nav ">
                    <a href="./aconpamiento.html" class="btn btn-bg-onn">
                        Madres, padres, docentes y cuidadores
                    </a>
                    <a href="./descargables.html" class="btn btn-bg-onn">
                        Descargable
                    </a>
                    <a href="./radio-musica.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                        <i class="fa fa-circle"></i>
                        Radio y música
                    </a>
                    <a href="./veo_online.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                        <i class="fa fa-circle"></i>
                        Veo ONNline
                    </a>
                </div><!-- End div seccion nav -->            
                <div class="content-menu-hamburguer">
                    <input type="checkbox" class="menu-btn" id="openSidebarMenu">
                    <div id="sidebarMenu">
                        <div class="container-menu scroll-menu">
                            <a href="./aconpamiento.html" class="btn btn-bg-onn">
                                Madres, padres, docentes y cuidadores
                            </a>
                            <a href="./descargables.html" class="btn btn-bg-onn">
                                Descargable
                            </a>
                            <a href="./radio-musica.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                                <i class="fa fa-circle"></i>
                                Radio y música
                            </a>
                            <a href="./veo_online.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                                <i class="fa fa-circle"></i>
                                Veo ONNline
                            </a>
                        </div>
                    </div>
                </div>
            </div><!-- End div container header -->
        </header>
        <main data-program="<?php echo $id; ?>">
            <section class="section-content-center section-banner">
                <div class="container w-60 container-title-banner text-center">
                    <h1 id="title_pgm" class="text-light fw-light text-uppercase fs-1xl">
                    </h1>
                </div>
            </section>
            <section id="video_programa" class="section-content-center">
                <div class="container w-60 container-title-onn py-0 py-lg-4 ">
                    <div class="content-video mt-5">
                        <video id="streamplayer" 
                            class="video-js vjs-big-play-centered" 
                            controls autoplay preload="auto" 
                            playsinline data-setup='{"fluid": true}'>
                        </video>
                    </div>
                    <p id="desc_pgm" class="text-light h2 mt-5 fs-4 text-center">
                    </p>
                    <div class="content-episodes mt-5 d-flex flex-column">
                        <h2 class="text-light font-lilitaone h1 mb-5 fs-1xl">
                            Episodios disponibles:
                        </h2>
                        <div class="list-episodes d-flex flex-column gap-1 px-3">
                            <!-- <a class="text-light fs-1 font-lilitaone text-decoration-none">
                                Episodio 7
                            </a>
                            <a class="text-light fs-1 font-lilitaone text-decoration-none">
                                Episodio 8
                            </a>
                            <a class="text-light fs-1 font-lilitaone text-decoration-none">
                                Episodio 9
                            </a> -->
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container container-footer gap-3">
                <div class="footer-navigation-web d-flex justify-content-center align-items-center gap-4">
                    <a type="button" class="text-light">
                        <picture class="w-100 h-100 d-block">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/logo_footer_sintonizanos.png" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/logo_footer_sintonizanos.png" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="./assets/img/logo_footer_sintonizanos.png" alt="Logo plataforma" width="139" height="45">
                        </picture>
                    </a>
                    <a type="button" class=" text-light">
                        <picture class="w-100 h-100 d-block">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-CANAL-ONCE-2210X960-300x130_1.png" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-CANAL-ONCE-2210X960-300x130_1.png" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="./assets/img/LOGO-CANAL-ONCE-2210X960-300x130_1.png" alt="Logo plataforma" width="139" height="45">
                        </picture>
                    </a>
                    <a type="button" class=" text-light">
                        <picture class="w-100 h-100 d-block">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-IPN-182_1.png" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-IPN-182_1.png" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="./assets/img/LOGO-IPN-182_1.png" alt="Logo plataforma" width="139" height="45">
                        </picture>
                    </a>
                </div>
                <div class="footer-info d-flex justify-content-center align-items-center gap-4">
                    <a type="button" class="btn btn-lg text-light text-decoration-underline">
                        Once Acerca de TyC
                    </a>
                </div>
            </div>
        </footer>
    </div>
    <script src="./assets/vendor/bootstrap/js/popper.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Videojs -->
	<script src="./assets/vendor/videojs/js/video.min.js"></script>
	<script src="./assets/vendor/videojs/js/Youtube.min.js"></script>
	<script src='./assets/vendor/videojs/js/videojs-http-source-selector.js'></script>
	<script src='./assets/vendor/videojs/js/videojs-contrib-quality-levels.min.js'></script>
	<script src="./assets/vendor/videojs/js/videojs-landscape-fullscreen.min.js"></script>
	<script src="./assets/vendor/videojs/js/videojs-player-analytics.js"></script>
	<script src="./assets/vendor/videojs/js/videojs-vimeo.umd.js"></script>
	<script src="./assets/vendor/videojs/js/videojs.hotkeys.min.js"></script>
	<script src="./assets/vendor/videojs/js/silvermine-videojs-chromecast.min.js"></script>
	<script src='./assets/vendor/videojs/js/cast_sender.js?loadCastFramework=1'></script>
    <script src='./assets/vendor/videojs/js/videojs-http-source-selector.js'></script>
    <!-- Momentjs -->
    <script src="./assets/vendor/moment/moment.js"></script>
    <script src="./assets/vendor/moment/moment-with-locales.js"></script>
    <script src="./assets/vendor/moment/moment-timezone-with-data.min.js"></script>
    <!--  -->
    <script src="./assets/js/actions-main.js"></script>
    <script src="./assets/js/main.js"></script>
    <script src="./assets/js/veo-online-detalles.js"></script>
</body>
</html>