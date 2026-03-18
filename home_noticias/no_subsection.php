<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantilla Sin Subsecciones</title>
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
    <!-- CSS de la plantilla -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">
    <link rel="stylesheet" href="./assets/css/footer.css">
    <link rel="stylesheet" href="./assets/css/no_subsection.css">
</head>

<body>
    <div class="wrapper">
        <div class="main ">
            <?php require_once("./partials/header.php");?>
            <main class="content">
                <!-- Encabezado -->
                <header class="ns-header">
                    <h1>Plantilla Sin Subsecciones</h1>
                    <i class="ns-live-dot fa-solid fa-edit"></i>
                </header>
                <!-- Bloque superior -->
                <section class="container ns-featured" aria-label="Notas destacadas">
                    <article>
                        <img src="https://dummyimage.com/560x220/ccc/fff" alt="Destacada principal">
                    </article>
                    <article>
                        <img src="https://dummyimage.com/560x220/ccc/fff" alt="Destacada secundaria 1">
                    </article>
                    <article>
                        <img src="https://dummyimage.com/560x220/ccc/fff" alt="Destacada secundaria 2">
                    </article>
                </section>
                <!-- Al momento -->
                <section class="container section-notices section-last-notes">
                    <article class="container">
                        <div class="title-notes text-center w-50">
                            <h2 class="h2 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                Al Momento
                            </h2>
                        </div>

                        <div class="ns-moment-list">
                            <article class="ns-moment-item">
                                <img src="https://dummyimage.com/320x210/ccc/fff" alt="Nota al momento 1">
                                <div>
                                    <h4 class="fw-bold text-uppercase">Título Título Título</h4>
                                    <p>Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario
                                        Sumario</p>
                                </div>
                            </article>
                            <article class="ns-moment-item">
                                <img src="https://dummyimage.com/320x210/ccc/fff" alt="Nota al momento 2">
                                <div>
                                    <h4 class="fw-bold text-uppercase">Título Título Título</h4>
                                    <p>Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario
                                        Sumario</p>
                                </div>
                            </article>
                            <article class="ns-moment-item">
                                <img src="https://dummyimage.com/320x210/ccc/fff" alt="Nota al momento 3">
                                <div>
                                    <h4 class="fw-bold text-uppercase">Título Título Título</h4>
                                    <p>Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario
                                        Sumario</p>
                                </div>
                            </article>
                        </div>
                    </article>
                </section>
                <!-- Lo mas reciente -->
                <section class="container section-notices section-last-notes">
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
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/vendor/bootstrap/js/popper.min.js"></script>
</body>
</html>