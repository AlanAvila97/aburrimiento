<?php 
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
    <!-- Shikwasa -->
    <link rel="stylesheet" href="./assets/vendor/shikwasa/css/style.css">	
    <!--  -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">      
    <link rel="stylesheet" href="./assets/css/footer.css">     
    <link rel="stylesheet" href="./assets/css/veo-online-interiores.css">   
    <style>
        .grid-item { width: 25%; }
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
        <main>
            <section class="section-content-center section-banner">
                <div class="container w-60 container-title-banner text-center">
                    <h1 class="text-light fw-light text-uppercase fs-1xl">
                    </h1>
                </div>
            </section>            
            <section id="programation" class="section-grid-three-columns">
                <div class="container w-60 container-title-onn py-0 py-lg-4 text-center">
                    <h2 class="text-light font-lilitaone h1 mt-3 mb-5 fs-1xl">
                        Selecciona tu programa favorito
                    </h2>                    
                    <!-- <div class="container-grid-three-columns"> -->
                    <div class="grid">
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2025/08/Sofia-Angelica-Lucas-Flores-759x1012.jpg" alt="Los reportajes de ONN">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2025/08/Jesus-Alberto-Macedo-Miranda-1012x782.jpg" alt="La Mesa">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2025/08/imagen_onnce_1755829933_68a7d6ad8fd05-1012x759.jpg" alt="De viaje por un libro">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2023/11/Los-Reportajes-ONN.png" alt="Los reportajes de ONN">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2023/11/Las-nuevas-cintas-de-Staff.png" alt="Las nuevas cintas de Staff">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2023/11/Las-viejas-cintas-de-Staff.png" alt="Las viejas cintas de Staff">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2023/09/La-Doctora-Noyolo-y-yo_1400x1400.png" alt="La Doctora Noyolo y yo">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2023/04/Ahorrando-Ando_1400x1400.png" alt="Ahorrando Ando">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2023/04/Ek_1400x1400.png" alt="EK">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2023/02/galeria_ONN.png" alt="Galería Once niñas y niños">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/12/Boton_INTELIGE_1400x1400_.png" alt="Intelige">
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m-verdadero-falso.jpg" alt='Verdadero o falso' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_a-mover-el-bote.jpg" alt='Concierto. A mover el bote en casa' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_como-con.mo_.jpg" alt='¿Cómo? con Mo' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_timora.jpg" alt='Timora y Sus Extrañas Historias' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_la-palabra-de-memo.jpg" alt='La palabra de Memo' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_secretos-culinarios-de-staff.jpg" alt='Secretos culinarios de Staff' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_que-pasaria-si.jpg" alt='¿Qué pasaría si…?' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_preguntas-del-planeta.jpg" alt='Preguntas del planeta con Lucy' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_codigo-l.jpg" alt='Código – L' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_consulta-con-el-doctor-pelayo.jpg" alt='Consulta con el doctor Pelayo' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_libros-en-accion.jpg" alt='Libros En Acción' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_un-dia-en-on.jpg" alt='Un Día en Once Niños' width='275' height='275' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_canciones-onn.jpg" alt='Musicales Once Niños' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_abuelos.jpg" alt='Abuelos' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_dxt.jpg" alt='DXT' />
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_las-piezas-del-rompecabezas.jpg" alt='Las Piezas del Rompecabezas'/>
                        </div>
                        <div class="grid-item">
                            <img class="img-fluid-responsive" src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_kipatla.jpg" alt='Kipatla' />
                        </div>
                    </div>                    
                </div>
            </section>
        </main>
    </div>
    <script src="./assets/vendor/bootstrap/js/popper.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!--  -->
    <script src="./assets/vendor/packery/packery.pkgd.js"></script>
    <script src="./assets/vendor/imagesLoaded/imagesloaded.pkgd.min.js"></script>
    <script defer>
        var grid = document.querySelector('.grid');
        var pckry = new Packery( grid, {
            itemSelector: '.grid-item',
            percentPosition: true
        });
        // layout Packery after each image loads
        imagesLoaded( grid ).on( 'progress', function() {
            pckry.layout();
        });  
    </script>
</body>
</html>