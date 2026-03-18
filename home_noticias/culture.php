<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cultura</title>
    <link rel="icon" type="image/png" sizes="16x16" href="https://oncenoticias.digital/iconos/logotran16.PNG">
    <link rel="icon" type="image/png" sizes="32x32" href="https://oncenoticias.digital/iconos/logotran32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="https://oncenoticias.digital/iconos/logotran64.png">
    <link rel="icon" type="image/png" sizes="256x256" href="https://oncenoticias.digital/iconos/logotran256.png">
    <link rel="icon" type="image/png" sizes="512x512" href="https://oncenoticias.digital/iconos/logotran512.png">
    <link rel="shortcut icon" type="image/x-icon" href="https://oncenoticias.digital/iconos/icono_app.png">
    <link rel="apple-touch-icon" sizes="180x180"
        href="//d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2024/11/icono_app_180x180.png">
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
    <link rel="stylesheet" href="./assets/css/culture.css">
    <link rel="stylesheet" href="./assets/css/section-images-grid.css">
    <link rel="stylesheet" href="./assets/css/section-content-grid.css">
</head>

<body>
    <div class="wrapper">
		<div class="main ">
            <?php require_once("./partials/header.php");?>
			<main class="content">
                <header class="culture-header">
                    <h1>Cultura</h1>
                    <i class="live-dot fa-solid fa-edit"></i>
                </header>
               <?php $images = [ 
                "https://dummyimage.com/860x420/ccc/fff&text=Principal",
                "https://dummyimage.com/420x205/ccc/fff&text=Secundaria+1",
                "https://dummyimage.com/420x205/ccc/fff&text=Secundaria+2", ]; 
               include('./partials/components/section-images-grid.php'); ?>
                
               <!-- Contenido principal + Lo mas visto -->
                <section class="main-content container section-notices section-important-notes px-4 px-md-3 pt-3 pt-mb-3 pb-3 pb-mb-4">
                    <div>
                       <!-- Expresiones Artisticas -->
                      <?php 
                        $title = "Expresiones Artísticas";
                        $image = "https://dummyimage.com/420x210/ccc/fff"; 
                        $principalContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam";
                        $subtitle1 = "Título Título Título";
                        $summary1 = "Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario";
                        $subtitle2 = "Título Título Título";
                        $summary2 = "Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario";
                       include('./partials/components/section-content-grid.php'); ?>

                    <!-- Memoria e Identidad -->
                      <?php 
                        $title = "Memoria e Identidad";
                        $image = "https://dummyimage.com/420x210/ccc/fff"; 
                        $principalContent = "jhkkjuhgkj thjfdtknorj ijrounbrog  origorn infolsns kfeéflkes  nognoldrsgndsrl nodgnodrgnol    olnolgdsrg";
                        $subtitle1 = "Título2 Título2 Título2";
                        $summary1 = "Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2";
                        $subtitle2 = "Título2 Título2 Título2";
                        $summary2 = "Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2 Sumario2";
                       include('./partials/components/section-content-grid.php'); ?>
                    </div>

                    <aside class="most-seen" aria-label="Lo más visto">
                        <div class="title-notes text-center w-100 mt-3">
                            <h2 class="h5 text-uppercase fw-bold border-bottom border-2 border-after-end">
                                Lo más visto
                            </h2>
                        </div>

                        <ol class="most-seen-items px-3 py-2 w-100">
                            <li>Título Título Título Título Título Título Título Título Título</li>
                            <li>Título Título Título Título Título Título Título Título Título</li>
                            <li>Título Título Título Título Título Título Título Título Título</li>
                            <li>Título Título Título Título Título Título Título Título Título</li>
                            <li>Título Título Título Título Título Título Título Título Título</li>
                        </ol>
                    </aside>
                </section>

                <!-- Lo mas reciente -->
                <section class="section-notices container section-last-notes px-4 px-md-2 py-4 py-md-3">
                    <article class="container">
                        <div class="title-notes text-center w-50">
                            <h2 class="h2 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                Lo Más Reciente
                            </h2>
                        </div>
                        <div class="recent-grid mt-4 row row-gap-3 row-gap-lg-0">
                            <article class="recent-card">
                                <img src="https://dummyimage.com/360x150/ccc/fff" alt="Reciente 1">
                                <br>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam</p>
                            </article>
                            <article class="recent-card">
                                <img src="https://dummyimage.com/360x150/ccc/fff" alt="Reciente 2">
                                <br>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam</p>
                            </article>
                            <article class="recent-card">
                                <img src="https://dummyimage.com/360x150/ccc/fff" alt="Reciente 3">
                                <br>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam Lorem ipsum dolor sit amet,
                                    consectetuer adipiscing elit, sed diam</p>
                            </article>
                        </div>
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
</body>
</html>