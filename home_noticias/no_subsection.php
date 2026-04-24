<!DOCTYPE html>
<html lang="en">

<head>
    <title>Plantilla Sin Subsecciones</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php require_once("./includes/header-elements.php"); ?>
    <!--  -->
    <link rel="stylesheet" href="./assets/css/no_subsection.css">
</head>

<body>
    <div class="wrapper">
        <div class="main ">
            <?php require_once("./partials/header.php");?>
            <main class="content">
                 <navbar class="title-head">
                    <h1>Plantilla Sin Subsecciones</h1>
                </navbar>
                <section class="section-main-news">
                    <div class="container container-main-news">
                        
                        <?php
                        $hrfs = ["#", "#", "#"];
                        $subtitles = [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        ];
                        $images = [
                            "https://dummyimage.com/1080x812/ccc/fff",
                            "https://dummyimage.com/480x812/ccc/fff",
                            "https://dummyimage.com/480x812/ccc/fff"
                        ];
                       include("./components/slide-three-images.php");?>
                    </div>
                </section>
                
                <!-- Al Momento -->
                 <section class="section-notices section-body-notices mt-4">
                    <article class="container">
                        <div class="flex-column flex-lg-row row w-100 mx-0">
                              <div class=" mt-3 mt-mb-0 ">
                            
                                    <?php
                                     $class = "h3 border-after-start";
                                     $title= "Al Momento";
                                     include('./components/title-notes.php'); ?>
                                     
                           <?php 
                        $length = 3;
                        $items = [ 
                            ["img" => "https://dummyimage.com/320x210/ccc/fff", "alt" => "Nota 1", "titulo" => "Titulo 1", "sumario" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!"],
                            ["img" => "https://dummyimage.com/320x210/ccc/fff", "alt" => "Nota 2", "titulo" => "Titulo 2", "sumario" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!"],
                            ["img" => "https://dummyimage.com/320x210/ccc/fff", "alt" => "Nota 3", "titulo" => "Titulo 3", "sumario" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem libero distinctio debitis praesentium et laborum magni itaque a consectetur odio accusamus, adipisci modi vitae sed? Quos dolores ea aut!"],
                             ];
                         include('./components/grid-notas-vertical.php'); ?>
                         </div>
                        </div>
                    </article>
                </section>
                <!-- Lo mas reciente -->
                <section class="section-notices section-recents-news mb-5">
                    <div class="container container-recents-news">
                        <div class="content-recent-news">
                             
                                     <?php 
                                     $class = "h3 border-after-start";
                                     $title= "Lo más reciente";
                                     include('./components/title-notes.php'); ?>
                                   
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
                            include("./components/grid-notas-columnas.php"); ?>
                        </div>
                    </div>
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
        <?php require_once("./includes/footer-elements.php"); ?>
</body>
</html>