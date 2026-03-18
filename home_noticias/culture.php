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
                <!-- Destacadas -->
                <section class="hero-grid mt-5 container" aria-label="Destacadas">
                    <article>
                        <img src="https://dummyimage.com/760x430/ccc/fff" alt="Destacada principal">
                    </article>
                    <div class="hero-right">
                        <article>
                            <img src="https://dummyimage.com/430x210/ccc/fff" alt="Destacada secundaria 1">
                        </article>
                        <article>
                            <img src="https://dummyimage.com/430x210/ccc/fff" alt="Destacada secundaria 2">
                        </article>
                    </div>
                </section>
                <!-- Contenido principal + Lo mas visto -->
                <section class="main-content container section-notices section-important-notes px-4 px-md-3 pt-3 pt-mb-3 pb-3 pb-mb-4">
                    <div>
                        <!-- Expresiones Artisticas -->
                        <div class="editorial-group">
                            <div class="title-notes text-center w-100 mb-md-4">
                                <h2 class="h1 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                    Expresiones Artísticas
                                </h2>
                            </div>

                            <article class="lead-block mt-4 row-gap-3">
                                <figure class="thumb m-0">
                                    <img src="https://dummyimage.com/420x210/ccc/fff" alt="Memoria e identidad principal">
                                    <figcaption class="lead-caption pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    </figcaption>
                                    <div class="separator-red"></div>
                                </figure>

                                <div class="lead-copy">
                                    <div>
                                        <h4 class="fw-bold text-uppercase">Título Título Título</h4>
                                        <p>Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario
                                            Sumario Sumario</p>
                                    </div>
                                    <div class="separator-red"></div>
                                    <div>
                                        <h4 class="fw-bold text-uppercase">Título Título Título</h4>
                                        <p>Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario
                                            Sumario Sumario</p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <!-- Memoria e Identidad -->
                        <div class="editorial-group">
                            <div class="title-notes text-center w-100 mb-md-4">
                                <h2 class="h1 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                    Memoria e Identidad
                                </h2>
                            </div>

                            <article class="lead-block mt-4 row-gap-3">
                                <figure class="thumb m-0">
                                    <img src="https://dummyimage.com/420x210/ccc/fff" alt="Memoria e identidad principal">
                                    <figcaption class="lead-caption pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed diam Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                    </figcaption>
                                    <div class="separator-red"></div>
                                </figure>

                                <div class="lead-copy">
                                    <div>
                                        <h4 class="fw-bold text-uppercase">Título Título Título</h4>
                                        <p>Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario
                                            Sumario Sumario</p>
                                    </div>
                                    <div class="separator-red"></div>
                                    <div>
                                        <h4 class="fw-bold text-uppercase">Título Título Título</h4>
                                        <p>Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario Sumario
                                            Sumario Sumario</p>
                                    </div>
                                </div>
                            </article>
                        </div>
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