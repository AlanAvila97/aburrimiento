 <section class="section-notices section-body-notices mt-4">
                        <article class="container">
                            <div class="flex-column-reverse flex-lg-row row w-100 mx-0">
                                <div class="col-lg-8 mt-3 mt-mb-0 d-flex flex-column row-gap-5">
                                    <div class="container-conflicts">
                                        <div class="w-50">
                                    <?php
                                     $title= "Conflictos y Geopolítica";
                                     include get_template_directory() . '/templates/partials/partials/components/title-notes.php';?>
                                     </div>
                                        <?php
                                        $images = [
                                        $imagen1_tag1,$imagen2_tag1,$imagen3_tag1
                                    ];
                                    $summarys = [
                                        $titulo1_tag1,$titulo2_tag1,$titulo3_tag1
                                    ];
                                     $hrfs = [$link1_tag1,$link2_tag1,$link3_tag1];
                                        include get_template_directory() . '/templates/partials/partials/components/grid-notas-columnas.php';?>
                                    </div>
                                    <div class="container-migrations">
                                         <div class="w-50">
                                    <?php
                                     $title= "Migración y DDHH";
                                     include get_template_directory() . '/templates/partials/partials/components/title-notes.php';?>
                                     </div>
                                        <?php 
                                         $images = [
                                        $imagen1_tag2,$imagen2_tag2,$imagen3_tag2
                                    ];
                                    $summarys = [
                                        $titulo1_tag2,$titulo2_tag2,$titulo3_tag2
                                    ];
                                     $hrfs = [$link1_tag2,$link2_tag2,$link3_tag2];
                                        include get_template_directory() . '/templates/partials/partials/components/grid-notas-columnas.php';?>
                                    </div>
                                </div>
                                <div class="col-lg-4 mt-3">
                                    <div class="align-items-center container-related-news d-flex flex-column justify-content-center px-3">
                                        <div class="w-100 pt-3">
                                    <?php
                                     $class = "h4 border-after-end";
                                     $title= " Notas relacionadas";
                                     include get_template_directory() . '/templates/partials/partials/components/title-notes.php';?>
                                     </div>
                                        <?php 
                                        $length = 5;
                                        $notes = [
                                            $titulorecientes1,$titulorecientes2,$titulorecientes3,$titulorecientes4,$titulorecientes5
                                        ];
                                        $hrfs = [$linkrecientes1,$linkrecientes2,$linkrecientes3,$linkrecientes4,$linkrecientes5];
                                        include get_template_directory() . '/templates/partials/partials/components/notas-relevantes.php';?>
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
                                     include get_template_directory() . '/templates/partials/partials/components/title-notes.php';?>
                                     </div>
                                <?php 
                                 $images = [
                                    $imagenfinal1,$imagenfinal2,$imagenfinal3
                                    ];
                                $summarys = [
                                    $titulofinal1,$titulofinal2,$titulofinal3
                                    ];
                                $hrfs = [$linkfinal1,$linkfinal2,$linkfinal3];
                                include get_template_directory() . '/templates/partials/partials/components/grid-notas-columnas.php';?>
                            </div>
                        </div>
                    </section>