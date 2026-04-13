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
                            <?php 
                            $hrfs = ["#", "#", "#"];
                            $images = [
                                "https://dummyimage.com/860x420/ccc/fff",
                                "https://dummyimage.com/420x205/ccc/fff",
                                "https://dummyimage.com/420x205/ccc/fff"
                                ];
                            include("./components/grid-notas-collage-vertical.php");?>
                            <div class="aside-main-news phone-frame">
                                <div class="header-scroll">
                                    <h2>EN CORTO</h2>
                                    <span class="count">5 historias</span>
                                </div>
                                <div class="scroll-container" id="scrollContainer">
                                    <div class="card-scroll">
                                        <div class="card-img">
                                            <img src="https://dummyimage.com/420x205/ccc/fff" class="img-responsive" alt="">
                                        </div>
                                        <span class="card-tag">Política</span>
                                    </div>

                                    <div class="card-scroll">
                                        <div class="card-img">
                                            <img src="https://dummyimage.com/420x205/ccc/fff" class="img-responsive" alt="">
                                        </div>
                                        <span class="card-tag">Economía</span>
                                    </div>

                                    <div class="card-scroll">
                                        <div class="card-img">
                                            <img src="https://dummyimage.com/420x205/ccc/fff" class="img-responsive" alt="">
                                        </div>
                                        <span class="card-tag">Tecnología</span>
                                    </div>

                                    <div class="card-scroll">
                                        <div class="card-img">
                                            <img src="https://dummyimage.com/420x205/ccc/fff" class="img-responsive" alt="">
                                        </div>
                                        <span class="card-tag">Cultura</span>
                                    </div>

                                    <div class="card-scroll">
                                        <div class="card-img">
                                            <img src="https://dummyimage.com/420x205/ccc/fff" class="img-responsive" alt="">
                                        </div>
                                        <span class="card-tag">Deportes</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="section-notices section-body-notices mt-4">
                        <article class="container">
                            <div class="flex-column-reverse flex-lg-row row w-100 mx-0">
                                <div class="col-lg-8 mt-3 mt-mb-0 d-flex flex-column row-gap-5">
                                    <div class="container-conflicts">
                                        <div class="w-50">
                                     <?php 
                                     $title= "La pantalla";
                                     include('./components/title-notes.php'); ?>
                                     </div>                                      
                                        <?php
                                        $images = [
                                        "https://dummyimage.com/800x475/ccc/fff",
                                        "https://dummyimage.com/800x475/ccc/fff",
                                        "https://dummyimage.com/800x475/ccc/fff"
                                    ];
                                    $summarys = [
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!"
                                    ];
                                        include("./components/grid-notas-columnas.php");?>
                                    </div>
                                    <div class="container-migrations">
                                        <div class="w-50">
                                     <?php 
                                     $title= "La rockola";
                                     include('./components/title-notes.php'); ?>
                                     </div>
                                        <?php 
                                        $images = [
                                        "https://dummyimage.com/800x475/ccc/fff",
                                        "https://dummyimage.com/800x475/ccc/fff",
                                        "https://dummyimage.com/800x475/ccc/fff"
                                    ];
                                    $summarys = [
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!"
                                    ];
                                        include("./components/grid-notas-columnas.php");?>
                                    </div>
                                </div>
                                <div class="col-lg-4 mt-3">
                                    <div class="align-items-center container-related-news d-flex flex-column justify-content-center px-3">
                                        <div class="w-100 pt-3">
                                     <?php 
                                      $class = "h4 border-after-end";
                                     $title= "Lo más visto";
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
                                        include("./components/notas-relevantes.php");?>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section class="section-notices section-recents-news mt-4 mb-5">
                        <div class="container container-recents-news">
                            <div class="content-recent-news">
                                <div class="w-50">
                                     <?php 
                                     $class = "h3 border-after-start";
                                     $title= "Lo más reciente";
                                     include('./components/title-notes.php'); ?>
                                     </div>
                                <?php 
                                $images = [
                                    "https://dummyimage.com/800x475/ccc/fff",
                                    "https://dummyimage.com/800x475/ccc/fff",
                                    "https://dummyimage.com/800x475/ccc/fff"
                                    ];
                                $summarys = [
                                    "Lorem ipsum dolor sit sectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!",
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!"
                                    ];
                                $hrfs = ["#", "#", "#"];    
                                include("./components/grid-notas-columnas.php");?>
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