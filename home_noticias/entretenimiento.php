<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Entretenimiento</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php require_once("./includes/header-elements.php");?>
        <link rel="stylesheet" href="./assets/css/entretenimiento.css">
    </head>
    <body>
        <div class="wrapper">
            <div class="main">
                <?php require_once("./partials/header.php");?>
                <main class="content">
                    <navbar class="title-head">
                        <h1>Entretenimiento</h1>
                    </navbar>
                    <section class="section-main-news">
                        <div class="container container-main-news">
                            <?php include("./components/grid-notas-collage-vertical.php");?>
                            <div class="aside-main-news">

                            </div>
                        </div>
                    </section>
                    <section class="section-notices section-body-notices mt-4">
                        <article class="container">
                            <div class="flex-column-reverse flex-lg-row row w-100 mx-0">
                                <div class="col-lg-8 mt-3 mt-mb-0 d-flex flex-column row-gap-5">
                                    <div class="container-conflicts">
                                        <div class="title-notes text-center w-50">
                                            <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                                La pantalla
                                            </h2>
                                        </div>                                        
                                        <?php include("./components/grid-notas-columnas.php");?>
                                    </div>
                                    <div class="container-migrations">
                                        <div class="title-notes text-center w-50">
                                            <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                                La rockola
                                            </h2>
                                        </div>
                                        <?php include("./components/grid-notas-columnas.php");?>
                                    </div>
                                </div>
                                <div class="col-lg-4 mt-3">
                                    <div class="align-items-center container-related-news d-flex flex-column justify-content-center px-3">
                                        <div class="title-notes text-center w-100 pt-3">
                                            <h2 class="h4 text-uppercase fw-bold border-bottom border-2 border-after-end">
                                                Lo más visto
                                            </h2>
                                        </div>
                                        <?php include("./components/notas-relevantes.php");?>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section class="section-notices section-recents-news mt-4 mb-5">
                        <div class="container container-recents-news">
                            <div class="content-recent-news">
                                <div class="title-notes text-center w-50">
                                    <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-start">
                                        Lo más reciente
                                    </h2>
                                </div>
                                <?php include("./components/grid-notas-columnas.php");?>
                            </div>
                        </div>
                    </section>
                </main>
                <?php require_once("./partials/footer.php");?>
            </div>
        </div>
        <?php require_once("./includes/footer-elements.php");?>
    </body>
</html>