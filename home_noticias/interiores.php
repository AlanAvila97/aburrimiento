<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="icon" type="image/png" sizes="16x16" href="https://oncenoticias.digital/iconos/logotran16.PNG">
    <link rel="icon" type="image/png" sizes="32x32" href="https://oncenoticias.digital/iconos/logotran32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="https://oncenoticias.digital/iconos/logotran64.png">
    <link rel="icon" type="image/png" sizes="256x256" href="https://oncenoticias.digital/iconos/logotran256.png">
    <link rel="icon" type="image/png" sizes="512x512" href="https://oncenoticias.digital/iconos/logotran512.png">
    <link rel="shortcut icon" type="image/x-icon" href="https://oncenoticias.digital/iconos/icono_app.png">
    <link rel="apple-touch-icon" sizes="180x180" href="//d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2024/11/icono_app_180x180.png">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="./assets/vendor/bootstrap/css/bootstrap.css">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/fontawesome.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/solid.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/regular.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/brands.min.css">
    <!-- Swiper -->
    <link rel="stylesheet" href="./assets/vendor/swiper/css/swiper-bundle.min.css">
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">
    <link rel="stylesheet" href="./assets/css/footer.css">
    <link rel="stylesheet" href="./assets/css/interiores.css">
</head> 
<body>
	<div class="wrapper">
		<div class="main">
            <?php require_once("./partials/header.php");?>
			<main class="content">
                <section class="section-notices section-interiores-head pt-4 pb-1 pb-mb-4">
                    <div class="container d-flex flex-column">
                        <div class="title-interiores">
                            <h2>
                                TITULO DE LA NOTA
                            </h2>
                        </div>
                        <div class="img-principal">
                            <div class="container-social-note d-flex flex-column row-gap-2">
                                <a href="" class="item-social-note">
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-x-twitter fa-stack-1x"></i>
                                    </span>
                                </a>
                                <a href="" class="item-social-note">
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-facebook-f fa-stack-1x"></i>
                                    </span>
                                </a>
                                <a href="" class="item-social-note">
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-youtube fa-stack-1x"></i>
                                    </span>
                                </a>
                                <a href="" class="item-social-note">
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-instagram fa-stack-1x"></i>
                                    </span>
                                </a>
                                <a href="" class="item-social-note">
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-tiktok fa-stack-1x"></i>
                                    </span>
                                </a>
                                <a href="" class="item-social-note">
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-youtube fa-stack-1x"></i>
                                    </span>
                                </a>
                                <a href="" class="item-social-note">
                                    <span class="fa-stack" style="vertical-align: top;">
                                        <i class="fa-regular fa-circle fa-stack-2x"></i>
                                        <i class="fa-brands fa-whatsapp fa-stack-1x"></i>
                                    </span>
                                </a>
                            </div>
                            <picture>
                                <source class="lazy img-fluid" 
                                    srcset="https://dummyimage.com/1900x900/ccc/fff" 
                                    type="image/webp" 
                                    alt="Imagen nota" loading="lazy">
                                <source class="lazy img-fluid" 
                                    srcset="https://dummyimage.com/1900x900/ccc/fff" 
                                    type="image/png" 
                                    alt="Imagen nota" loading="lazy"> 
                                <img class="img-fluid lazy img-responsive" 
                                    src="https://dummyimage.com/1900x900/ccc/fff" 
                                    alt="Imagen nota" width="139" height="30">
                            </picture>
                        </div>
                        <div class="share-note d-flex justify-content-end my-4">
                            <a href="">
                                Compartir
                                <!-- <i class="fa-solid fa-share-nodes"></i> -->
                                <div class="icon-share">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 30">
                                        <path fill="#6D6D6D" d="M22.5 20.1c-.95 0-1.8.375-2.45.962l-8.913-5.187c.063-.287.113-.575.113-.875 0-.3-.05-.588-.113-.875l8.813-5.137A3.734 3.734 0 0 0 22.5 10a3.745 3.745 0 0 0 3.75-3.75A3.745 3.745 0 0 0 22.5 2.5a3.745 3.745 0 0 0-3.75 3.75c0 .3.05.588.113.875l-8.813 5.137A3.734 3.734 0 0 0 7.5 11.25 3.745 3.745 0 0 0 3.75 15a3.745 3.745 0 0 0 3.75 3.75c.988 0 1.875-.387 2.55-1.012l8.9 5.2c-.063.262-.1.537-.1.812a3.654 3.654 0 0 0 3.65 3.65 3.654 3.654 0 0 0 3.65-3.65 3.654 3.654 0 0 0-3.65-3.65Z"/>
                                    </svg>
                                </div>
                            </a>  
                        </div>
                        <div class="info-note">
                            <h3 class="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic debitis ullam nobis 
                            </h3>
                            <p class="mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit minima cupiditate 
                                ipsum. Nostrum, sint eaque aliquid, est numquam neque itaque explicabo possimus non inventore 
                                quisquam exercitationem iste eius libero.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit minima cupiditate 
                                ipsum. Nostrum, sint eaque aliquid, est numquam neque itaque explicabo possimus non inventore 
                                quisquam exercitationem iste eius libero.
                            </p>
                            <p class="mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit minima cupiditate 
                                ipsum. Nostrum, sint eaque aliquid, est numquam neque itaque explicabo possimus non inventore 
                                quisquam exercitationem iste eius libero.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit minima cupiditate 
                                ipsum. Nostrum, sint eaque aliquid, est numquam neque itaque explicabo possimus non inventore 
                                quisquam exercitationem iste eius libero.
                            </p>
                            <p class="mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit minima cupiditate 
                                ipsum. Nostrum, sint eaque aliquid, est numquam neque itaque explicabo possimus non inventore 
                                quisquam exercitationem iste eius libero.
                            </p>
                            <p class="mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit minima cupiditate 
                                ipsum. Nostrum, sint eaque aliquid, est numquam neque itaque explicabo possimus non inventore 
                                quisquam exercitationem iste eius libero.
                            </p>
                            <p class="mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit minima cupiditate 
                                ipsum. Nostrum, sint eaque aliquid, est numquam neque itaque explicabo possimus non inventore 
                                quisquam exercitationem iste eius libero.
                            </p>
                        </div>
                        <div class="content-video-note">
                            <div class="video iframe-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/GTVNgE9ZDlI?si=f5avCkL44HlzB9Zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div class="share-note d-flex justify-content-end mt-4">
                                <a href="">
                                    Compartir
                                    <!-- <i class="fa-solid fa-share-nodes"></i> -->
                                    <div class="icon-share">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 30 30">
                                            <path fill="#6D6D6D" d="M22.5 20.1c-.95 0-1.8.375-2.45.962l-8.913-5.187c.063-.287.113-.575.113-.875 0-.3-.05-.588-.113-.875l8.813-5.137A3.734 3.734 0 0 0 22.5 10a3.745 3.745 0 0 0 3.75-3.75A3.745 3.745 0 0 0 22.5 2.5a3.745 3.745 0 0 0-3.75 3.75c0 .3.05.588.113.875l-8.813 5.137A3.734 3.734 0 0 0 7.5 11.25 3.745 3.745 0 0 0 3.75 15a3.745 3.745 0 0 0 3.75 3.75c.988 0 1.875-.387 2.55-1.012l8.9 5.2c-.063.262-.1.537-.1.812a3.654 3.654 0 0 0 3.65 3.65 3.654 3.654 0 0 0 3.65-3.65 3.654 3.654 0 0 0-3.65-3.65Z"/>
                                        </svg>
                                    </div>
                                </a>  
                            </div>
                        </div>                        
                    </div>
                </section>
                <section class="section-notices section-body-notices mb-4">
                    <article class="container">
                        <div class="flex-column flex-lg-row row w-100 mx-0">
                            <div class="col-lg-8 mt-3 mt-mb-0 d-flex flex-column row-gap-5">
                                <!-- Gobierno -->
                                <div class="container-note-social">
                                </div>   
                            </div>
                            <div class="col-lg-4 mt-3">
                                <div class="align-items-center container-related-news d-flex flex-column justify-content-center px-3">
                                    <div class="w-100 pt-3">
                                    <?php
                                     $class = "h4 border-after-end";
                                     $title= "Últimas Noticias";
                                     include('./components/title-notes.php'); ?>
                                     </div>

                                    <?php
                                        $length = 5;
                                        $notes = [
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!"
                                        ];
                                        $hrfs = ["#", "#", "#", "#", "#"];
                                    include("./components/notas-relevantes.php"); ?>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <?php require_once("./partials/footer.php");?>
        </div>
    </div>
    <!-- Bootstrap -->
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/vendor/bootstrap/js/popper.min.js"></script>
    <!-- Swiper -->
    <script src="assets/vendor/swiper/js/swiper-bundle.min.js"></script>
    <!-- Lite Youtube -->
    <script type="module" src="assets/vendor/lite-youtube/lite-youtube.min.js"></script>
    <!-- JS -->
    <script src="assets/js/index.js"></script>
</body>
</html>