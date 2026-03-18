<?php 
    $id = isset($_GET['episodes']) ? $_GET['episodes'] : '';
    $class_banner = '';
    switch ($id) {
        case '1':
            $class_banner = 'infancias';
            break;        
        case '2':
            $class_banner = 'escolares';
            break;        
        case '3':
            $class_banner = 'juegos';
            break;        
        case '4':
            $class_banner = 'fondos';
            break;        
        default:
            # code...
            break;
    }
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
    <!-- Swiper -->
    <link rel="stylesheet" href="./assets/vendor/swiper/css/swiper-bundle.min.css" />
    <!--  -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">      
    <link rel="stylesheet" href="./assets/css/footer.css">     
    <link rel="stylesheet" href="./assets/css/descargables-interiores.css">     
</head>
<body class="bg-descargables">
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
            <section id="banner_descargable" class="section-content-center section-banner <?php echo $class_banner; ?>">
                <div class="container w-60 container-title-banner text-center">
                    <h1 class="text-light fw-light text-uppercase fs-1xl">
                        PReescolares
                    </h1>
                </div>
            </section>
            <section id="secciones_descargables" class="section-content-center">
                <div class="container w-60 container-title-onn py-4 text-center">
                    <div class="content-items-banners-secciones d-flex flex-column gap-5">
                        <a href="https://onceninasyninos.tv/2024/04/03/descargable-titeres-de-dedo-teatritonn/" 
                           class="items-banners <?php echo ($id != 1 ) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_teatrito.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_teatrito.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_teatrito.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2025/03/19/descargables-dia-del-nino-y-la-nina-2025/" 
                           class="items-banners <?php echo ($id != 1 ) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_de-cabeza.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_de-cabeza.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_de-cabeza.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2020/11/06/descargables-colorea-al-equipo-on/" 
                           class="items-banners <?php echo ($id != 1 ) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_colorea.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_colorea.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_colorea.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2020/11/06/descargables-une-los-puntos-y-colorea/" 
                           class="items-banners <?php echo ($id != 1 ) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_puntos.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_puntos.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_puntos.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2020/11/06/descargables-viste-como-mas-te-guste-al-equipo-on/" 
                           class="items-banners <?php echo ($id != 1 ) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_viste.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_viste.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/08/PI_viste.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <!--  -->
                        <a href="https://onceninasyninos.tv/wp-content/uploads/2025/05/Imprimibles_Do%CC%81ndeStaff_onn2025.pdf" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/05/postal1-1012x567.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/05/postal1-1012x567.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/05/postal1-1012x567.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/wp-content/uploads/2025/05/PaperToys.pdf" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/05/postal-3-1012x567.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/05/postal-3-1012x567.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/05/postal-3-1012x567.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/wp-content/uploads/2025/06/Experimentos_Electricidad_esta%CC%81tica.pdf" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/06/Banner_estática-1012x202.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/06/Banner_estática-1012x202.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/06/Banner_estática-1012x202.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/wp-content/uploads/2025/06/Experimentos_Electricidad_esta%CC%81tica.pdf" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/06/Banner-1012x202.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/06/Banner-1012x202.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/06/Banner-1012x202.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/la-ciencia-del-cuerpo-seis-pasos-para-hacer-tu-taumatropo/" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/02/banner-1012x202.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/02/banner-1012x202.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/02/banner-1012x202.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/wp-content/uploads/2025/03/Nora-Lisa.pdf" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/03/Banner_Nora-Lisa-1012x202.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/03/Banner_Nora-Lisa-1012x202.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/03/Banner_Nora-Lisa-1012x202.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/feliz-dia-del-amor-y-la-amistad/" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/02/ODT_Cuestionarios_AmigosON-15-1012x202.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/02/ODT_Cuestionarios_AmigosON-15-1012x202.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/02/ODT_Cuestionarios_AmigosON-15-1012x202.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="http://onceninasyninos.tv/2021/03/05/descargables-dia-internacional-de-la-mujer-2021/" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2021/03/Banner-Interior-Descargables-Día-Internacional-de-la-Mujer-2021-1012x203.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2021/03/Banner-Interior-Descargables-Día-Internacional-de-la-Mujer-2021-1012x203.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2021/03/Banner-Interior-Descargables-Día-Internacional-de-la-Mujer-2021-1012x203.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2020/10/13/organizate-con-on/" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2020/10/Banner-organizate-con-ON.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2020/10/Banner-organizate-con-ON.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2020/10/Banner-organizate-con-ON.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2020/10/29/dia-de-muertos-descargables/" 
                           class="items-banners <?php echo ($id != 2) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2020/10/Banner-descargables.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2020/10/Banner-descargables.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2020/10/Banner-descargables.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <!--  -->
                        <a href="https://onceninos.tv/staffvsmonstruo2/" 
                           class="items-banners <?php echo ($id != 3) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/STAFFVSSTAFFMONSTRUO.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/STAFFVSSTAFFMONSTRUO.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninos.tv/wp-content/themes/great/images/STAFFVSSTAFFMONSTRUO.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninos.tv/lascintasdestaff2/" 
                           class="items-banners <?php echo ($id != 3) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/LASCINTASDESTAFF.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/LASCINTASDESTAFF.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninos.tv/wp-content/themes/great/images/LASCINTASDESTAFF.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninos.tv/piensarapido2/" 
                           class="items-banners <?php echo ($id != 3) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/PIENSARAPIDO.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/PIENSARAPIDO.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninos.tv/wp-content/themes/great/images/PIENSARAPIDO.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninos.tv/lapesadilladealan2/" 
                           class="items-banners <?php echo ($id != 3) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/LAPESADILLADEALAN.jpg" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/LAPESADILLADEALAN.jpg" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninos.tv/wp-content/themes/great/images/LAPESADILLADEALAN.jpg" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://que-tan-experto-eres.elonce.mx/" 
                           class="items-banners <?php echo ($id != 3) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/HEADER-SECION-JUEGOS.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninos.tv/wp-content/themes/great/images/HEADER-SECION-JUEGOS.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninos.tv/wp-content/themes/great/images/HEADER-SECION-JUEGOS.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <!--  -->
                        <a href="https://onceninasyninos.tv/2024/04/21/fondos-de-pantalla-dia-del-nino-y-la-nina-2024/" 
                           class="items-banners <?php echo ($id != 4) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2024/04/Día-del-Niño-y-la-Niña-2024-Wallpaper_horizontal2.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2024/04/Día-del-Niño-y-la-Niña-2024-Wallpaper_horizontal2.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2024/04/Día-del-Niño-y-la-Niña-2024-Wallpaper_horizontal2.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2023/04/21/fondos-de-pantalla-dia-del-nino-y-la-nina-2023/" 
                           class="items-banners <?php echo ($id != 4) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2023/04/wallpaper-Diadelninoylanina-web-1012x569.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2023/04/wallpaper-Diadelninoylanina-web-1012x569.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2023/04/wallpaper-Diadelninoylanina-web-1012x569.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <a href="https://onceninasyninos.tv/2020/10/29/dia-de-muertos-descargables/" 
                           class="items-banners <?php echo ($id != 4) ? 'd-none' : 'd-block'; ?>">
                            <picture class="w-100 h-100 d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2020/10/Imagen-final-rompecabezas2-Día-de-Muertos.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2020/10/Imagen-final-rompecabezas2-Día-de-Muertos.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2020/10/Imagen-final-rompecabezas2-Día-de-Muertos.png" alt="Logo Once" width="139" height="45">
                            </picture>
                        </a>
                        <!--  -->
                    </div>
                    <div class="content-items-banners-secciones d-flex flex-column align-items-center gap-5 mt-5">
                        <a href="./descargables.html" 
                            class="btn btn-lg btn-outline-primary text-light text-decoration-underline btn-back">
                            <h4 class="font-comfortaa">Regresar</h4>
                        </a>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container container-footer container-footer-full gap-3">
                <div class="footer-navigation-web d-flex justify-content-center align-items-center gap-4">
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
            </div>
        </footer>
    </div>
    <script src="./assets/vendor/bootstrap/js/popper.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Swiper -->
    <script src="./assets/vendor/swiper/js/swiper-bundle.min.js"></script>
</body>
</html>