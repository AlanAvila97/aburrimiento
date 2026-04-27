<?php $BASE_URL=home_url(); ?>
<link rel="icon" type="image/png" sizes="16x16" href="https://oncenoticias.digital/iconos/logotran16.PNG">
<link rel="icon" type="image/png" sizes="32x32" href="https://oncenoticias.digital/iconos/logotran32.png">
<link rel="icon" type="image/png" sizes="64x64" href="https://oncenoticias.digital/iconos/logotran64.png">
<link rel="icon" type="image/png" sizes="256x256" href="https://oncenoticias.digital/iconos/logotran256.png">
<link rel="icon" type="image/png" sizes="512x512" href="https://oncenoticias.digital/iconos/logotran512.png">
<link rel="shortcut icon" type="image/x-icon" href="https://oncenoticias.digital/iconos/icono_app.png">
<link rel="apple-touch-icon" sizes="180x180" href="//d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2024/11/icono_app_180x180.png">
<!-- Bootstrap -->
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/vendor/bootstrap/css/bootstrap.css">
<!-- Fontawesome -->
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/vendor/fontawesome/css/fontawesome.css">
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/vendor/fontawesome/css/solid.min.css">
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/vendor/fontawesome/css/regular.min.css">
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/vendor/fontawesome/css/brands.min.css">
<!-- Swiper -->
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/vendor/swiper/css/swiper-bundle.min.css">
<!-- CSS -->
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/css/main.css">
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/css/header.css">
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/css/footer.css">
<link rel="stylesheet" href="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/css/index.css">
<style>
  /* Restoring Jannah container after Bootstrap */
  #content.site-content.container {
    max-width: 1300px !important;
    padding-left: 15px !important;
    padding-right: 15px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
</style>
<header class="navbar navbar-expand navbar-light navbar-bg p-0">
    <div class="container-navbar">
        <div class="social-networks d-none d-lg-flex gap-2">
            <a href="https://twitter.com/OnceNoticiasTV">
                <span class="fa-stack">
                    <i class="fa-regular fa-circle fa-stack-2x text-white"></i>
                    <i class="fa-brands fa-x-twitter fa-stack-1x fa-inverse"></i>
                </span>
            </a>
            <a href="https://www.facebook.com/OnceNoticiasTV">
                <span class="fa-stack">
                    <i class="fa-regular fa-circle fa-stack-2x text-white"></i>
                    <i class="fa-brands fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
            </a>
            <a href="https://www.instagram.com/oncenoticias.digital/">
                <span class="fa-stack">
                    <i class="fa-regular fa-circle fa-stack-2x text-white"></i>
                    <i class="fa-brands fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
            </a>
            <a href="https://www.tiktok.com/@oncenoticias.digital">
                <span class="fa-stack">
                    <i class="fa-regular fa-circle fa-stack-2x text-white"></i>
                    <i class="fa-brands fa-tiktok fa-stack-1x fa-inverse"></i>
                </span>
            </a>
            <a href="https://www.youtube.com/channel/UCM4vf-nmAxPq8Do0Xi3qXkg">
                <span class="fa-stack">
                    <i class="fa-regular fa-circle fa-stack-2x text-white"></i>
                    <i class="fa-brands fa-youtube fa-stack-1x fa-inverse"></i>
                </span>
            </a>
            <a href="https://whatsapp.com/channel/0029VaKdOdMKQuJRN1OuSJ0F">
                <span class="fa-stack">
                    <i class="fa-regular fa-circle fa-stack-2x text-white"></i>
                    <i class="fa-brands fa-whatsapp fa-stack-1x fa-inverse"></i>
                </span>
            </a>
        </div>
        <div class="container-actions-navbar">
            <div class="container-live-day d-none d-lg-flex align-items-center justify-content-center gap-3 px-4">
                <div class="btn-live">
                    <picture>
                        <source class="lazy img-fluid" 
                            srcset="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/img/upscalemedia-transformed__2_-removebg-preview.png" 
                            type="image/webp" 
                            alt="Logo Once Noticias" loading="lazy">
                        <source class="lazy img-fluid" 
                            srcset="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/img/upscalemedia-transformed__2_-removebg-preview.png" 
                            type="image/png" 
                            alt="Logo Once Noticias" loading="lazy"> 
                        <img class="img-fluid lazy img-responsive" 
                            src="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/img/upscalemedia-transformed__2_-removebg-preview.png" 
                            alt="Logo Once Noticias" width="139" height="30">
                    </picture>
                </div>
                <div class="info-current-day px-2 py-1">
                    <h2 class="h6 m-0 text-uppercase fw-bold"><?php $date_format = tie_get_option( 'todaydate_format', 'l ,  j  F Y' ); echo date_i18n( $date_format, current_time( 'timestamp' ) ); ?></h2>
                </div>
            </div>
            <div class="container-search d-flex align-items-center justify-content-center px-4">
                <div class="justify-content-end justify-content-xl-between row w-100">
                    <div class="col-lg-10 input-search d-none d-xl-flex">    			
                        <form method="get" id="search" action="http://192.168.7.198/">
                            <div class="input-group">
                                <input id="search-input" class="is-ajax-search" inputmode="search" type="text" name="s" title="Buscar" placeholder="Buscar" autocomplete="off">
                                <button class="btn btn-dark btn-search">
                                    <span class="tie-icon-search tie-search-icon" aria-hidden="true"></span>
                                    <span class="screen-reader-text">Buscar</span>
                                </button>
                            </div>
                        </form>     
                    </div>
                    <div class="col-12 col-xl-2 d-flex justify-content-end container-bars">
                        <input type="checkbox" id="checkbox_menu">
                        <label for="checkbox_menu" class="toggle">
                            <div class="bars" id="bar1"></div>
                            <div class="bars" id="bar2"></div>
                            <div class="bars" id="bar3"></div>
                        </label>
                        <div class="align-items-center d-flex hamburger-menu justify-content-center">
                            <div class="align-items-center container-menu d-flex flex-column justify-content-center p-5 row-gap-4">
                                <a href="<?php echo $BASE_URL.'/secciones/agenda-ipn'?>" class="d-block">
                                    <h2 class="h3 text-uppercase text-black fw-bold"> AGENDA POLITÉCNICA </h2>
                                </a>
                                <a href="<?php echo $BASE_URL.'/secciones/entretenimiento'?>" class="d-block">
                                    <h2 class="h3 text-uppercase text-black fw-bold"> ENTRETENIMIENTO </h2>
                                </a>
                                <a href="<?php echo $BASE_URL.'/secciones/deportes'?>" class="d-block">
                                    <h2 class="h3 text-uppercase text-black fw-bold"> DEPORTES </h2>
                                </a>
                                <a href="<?php echo $BASE_URL.'/secciones/once-lab'?>" class="d-block">
                                    <h2 class="h3 text-uppercase text-black fw-bold"> ONCE LAB </h2>
                                </a>
                                <a href="<?php echo $BASE_URL.'/secciones/cultura'?>" class="d-block">
                                    <h2 class="h3 text-uppercase text-black fw-bold"> CULTURA </h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-logo d-flex align-items-center container-logo d-flex justify-content-center">
            <a href="<?php echo $BASE_URL; ?>" class="d-grid">
                <div class="logo">
                    <picture>
                        <source class="lazy img-fluid" 
                            srcset="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/img/login_nuevo_noticias-removebg-preview.png" 
                            type="image/webp" 
                            alt="Logo Once Noticias" loading="lazy">
                        <source class="lazy img-fluid" 
                            srcset="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/img/login_nuevo_noticias-removebg-preview.png" 
                            type="image/png" 
                            alt="Logo Once Noticias" loading="lazy"> 
                        <img class="img-fluid lazy img-responsive" 
                            src="http://192.168.7.198/wp-content/themes/jannah/templates/partials/assets/img/login_nuevo_noticias-removebg-preview.png" 
                            alt="Logo Once Noticias" width="139" height="30">
                    </picture>
                </div>
            </a>
        </div>
        <div class="container-navigation pt-2 d-none d-lg-block">
            <lu class="d-inline-flex gap-2 justify-content-center list-unstyled w-100">
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/internacional'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            Internacional
                        </h3>
                    </a>
                </li>
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            Política
                        </h3>
                    </a>
                </li>
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/economia'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            Economía
                        </h3>
                    </a>
                </li>
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/internacional'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            Seguridad
                        </h3>
                    </a>
                </li>
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/salud'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            Salud
                        </h3>
                    </a>
                </li>
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/internacional'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            Estado
                        </h3>
                    </a>
                </li>
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/internacional'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            Metrópoli
                        </h3>
                    </a>
                </li>
                <li class="p-3"> 
                    <a href="<?php echo $BASE_URL.'/secciones/internacional'?>" class="d-flex align-items-center justify-content-center gap-3">
                        <h3 class="fw-bold h5 m-0 text-black text-uppercase">
                            ¿Cómo se hace?
                        </h3>
                    </a>
                </li>
            </lu>
        </div>
    </div>
</header>
<!-- Modal -->
<div class="modal fade" id="interviewModal" tabindex="-1" aria-labelledby="interviewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="interviewModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            </div>
        </div>
    </div>
</div>