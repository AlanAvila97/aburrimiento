<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Internacional</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php require_once("./includes/header-elements.php");?>
        <link rel="stylesheet" href="./assets/css/internacional.css">
    </head>
    <body>
        <div class="wrapper">
            <div class="main">
                <?php require_once("./partials/header.php");?>
                <main class="content">
                    <navbar class="title-head">
                        <h1>Internacional</h1>
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
                        </div>
                    </section>
                    <section class="section-notices section-body-notices mt-4">
                        <article class="container">
                            <div class="flex-column-reverse flex-lg-row row w-100 mx-0">
                                <div class="col-lg-8 mt-3 mt-mb-0 d-flex flex-column row-gap-5">
                                    <div class="container-conflicts">
                                        <div class="w-50">
                                    <?php
                                     $title= "Conflictos y Geopolítica";
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
                                     $hrfs = ["#", "#", "#"];
                                        include("./components/grid-notas-columnas.php");?>
                                    </div>
                                    <div class="container-migrations">
                                         <div class="w-50">
                                    <?php
                                     $title= "Migración y DDHH";
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
                                     $hrfs = ["#", "#", "#"];
                                        include("./components/grid-notas-columnas.php");?>
                                    </div>
                                </div>
                                <div class="col-lg-4 mt-3">
                                    <div class="align-items-center container-related-news d-flex flex-column justify-content-center px-3">
                                        <div class="w-100 pt-3">
                                    <?php
                                     $class = "h4 border-after-end";
                                     $title= " Notas relacionadas";
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