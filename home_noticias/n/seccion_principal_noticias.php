<?php
function seccion_principal_noticias($atts) {
    //Consultas de slider
    $args1 = array( 
        'post_type' => 'post',
        'posts_per_page' => 2,
        'order' => 'DESC',
        'tag__in' => array(49955),
    );
    $cat_posts1 = get_posts($args1);
    $args2 = array( 
        'post_type' => 'post',
        'posts_per_page' => 2,
        'order' => 'DESC',
        'tag__in' => array(49956),
    );
    $cat_posts2 = get_posts($args2);
    $args3 = array( 
        'post_type' => 'post',
        'posts_per_page' => 2,
        'order' => 'DESC',
        'tag__in' => array(49957),
    );
    $cat_posts3 = get_posts($args3);
    //Imagen destacada
    $args_img_destacada = array( 
        'post_type' => 'post',
        'category__in' => array(69746),
        'posts_per_page' => 1,
        'orderby' => 'date',
        'order' => 'DESC',
    ); 
    $cat_posts_img_destacada= get_posts($args_img_destacada);
    //Consulta mañananera
    $args_mananera = array( 
        'post_type' => 'post',
        'post__in' => array(446492),
        'posts_per_page' => 1,
        'orderby' => 'date',
        'order' => 'DESC',
    ); 
    $cat_posts_mananera= get_posts($args_mananera);
    $args_tendencias = array( 
        'post_type' => 'post',
        'category__in' => array(56660),
        'posts_per_page' => 5,
        'orderby' => 'date',
        'order' => 'DESC',
    ); 
    $cat_posts_tendencias= get_posts($args_tendencias);
    $args_entrevistas = array( 
        'post_type' => 'post',
        'category__in' => array(61100),
        'posts_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC',
    ); 
    $cat_posts_entrevistas= get_posts($args_entrevistas);
    $ids_usados = array_merge(
        wp_list_pluck($cat_posts1, 'ID'),
        wp_list_pluck($cat_posts2, 'ID'),
        wp_list_pluck($cat_posts3, 'ID'),
        wp_list_pluck($cat_posts_img_destacada, 'ID'),
        wp_list_pluck($cat_posts_mananera, 'ID'),
        wp_list_pluck($cat_posts_tendencias, 'ID'),
        wp_list_pluck($cat_posts_entrevistas, 'ID')
    );
    $ids_usados = array_unique($ids_usados);
    $array_categorias = [23, 29, 26, 28, 30, 34];
    shuffle($array_categorias);
    $categorias_rand = array_slice($array_categorias, 0, 3);
    $categorias = [];
    foreach ($categorias_rand as $id) {
        $cat = get_category($id);
        preg_match('/src=["\']([^"\']+)["\']/', $cat->description ?? '', $matches);
        $categorias[] = [
            'titulo' => $cat->name ?? '',
            'imagen'   => $matches[1] ?? null,
            'slug'  => $cat->slug ?? '',
        ];
    }
    $args_ultimos = array(
        'post_type'      => 'post',
        'posts_per_page' => 4,
        'orderby'        => 'date',
        'order'          => 'DESC',
        'post__not_in'   => $ids_usados,
    );
    $cat_posts_ultimos = get_posts($args_ultimos);

    // Marca bandera para que wp_footer imprima el modal (se ejecuta 1 sola vez)
    $GLOBALS['oncenoticias_render_interview_modal'] = true;

    $html = '
    <link rel="stylesheet" href="http://192.168.7.198/wp-content/plugins/oncenoticias/assets/css/index.css">
    <section class="section-notices section-slider-notice px-4 px-md-5 py-3 py-sm-5 d-flex justify-content-center ">
        <article class="row w-100">
            <div class="container-navigation-prev col-2 col-sm-1 d-flex align-items-center justify-content-center p-0">
                <picture>
                    <source class="lazy img-fluid" 
                        srcset="https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2026/04/nav-prev.png" 
                        type="image/webp" 
                        alt="Logo Once Noticias" loading="lazy">
                    <source class="lazy img-fluid" 
                        srcset="https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2026/04/nav-prev.png" 
                        type="image/png" 
                        alt="Logo Once Noticias" loading="lazy"> 
                    <img class="img-fluid lazy img-responsive" 
                        src="https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2026/04/nav-prev.png" 
                        alt="Logo Once Noticias" width="139" height="30">
                </picture>
            </div>
            <div class="container container-slider col-8 col-sm-10 m-0 ">
                <div class="swiper slider-principal-notices">
                    <div class="swiper-wrapper">';
                        foreach ($cat_posts1 as $slide) {
                            $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($slide->ID), 'med')[0];
                            $link = get_permalink($slide->ID);
                            $title = get_the_title($slide->ID);
                            $html.='<div class="swiper-slide">
                                        <a href="'.$link.'" target="_blank" rel="noopener noreferrer">
                                            <img src="'.$imagen.'"/>
                                            <div class="overlay-text"> 
                                                <h3 class="h5 mb-0">'.$title.'</h3> 
                                            </div>
                                        </a>
                                    </div>';
                        }
                        foreach ($cat_posts2 as $slide) {
                            $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($slide->ID), 'med')[0];
                            $link = get_permalink($slide->ID);
                            $title = get_the_title($slide->ID);
                            $html.='<div class="swiper-slide">
                                        <a href="'.$link.'" target="_blank" rel="noopener noreferrer">
                                            <img src="'.$imagen.'"/>
                                            <div class="overlay-text"> 
                                                <h3 class="h5 mb-0">'.$title.'</h3> 
                                            </div>
                                        </a>
                                    </div>';
                        }
                        foreach ($cat_posts3 as $slide) {
                            $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($slide->ID), 'med')[0];
                            $link = get_permalink($slide->ID);
                            $title = get_the_title($slide->ID);
                            $html.='<div class="swiper-slide">
                                        <a href="'.$link.'" target="_blank" rel="noopener noreferrer">
                                            <img src="'.$imagen.'"/>
                                            <div class="overlay-text"> 
                                                <h3 class="h5 mb-0">'.$title.'</h3> 
                                            </div>
                                        </a>
                                    </div>';
                        }
            $html.='</div>
                        <div class="swiper-button-next d-none"></div>
                        <div class="swiper-button-prev d-none"></div>
                    </div>
                </div>
                <div class="container-navigation-next col-2 col-sm-1 d-flex align-items-center justify-content-center p-0">
                    <picture>
                        <source class="lazy img-fluid" 
                            srcset="https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2026/04/nav-next.png" 
                            type="image/webp" 
                            alt="Logo Once Noticias" loading="lazy">
                        <source class="lazy img-fluid" 
                            srcset="https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2026/04/nav-next.png" 
                            type="image/png" 
                            alt="Logo Once Noticias" loading="lazy"> 
                        <img class="img-fluid lazy img-responsive" 
                            src="https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2026/04/nav-next.png" 
                            alt="Logo Once Noticias" width="139" height="30">
                    </picture>
                </div>
        </article>
    </section>
    <section class="section-notices section-banner pb-1 pb-mb-4">
        <div class="continer-fluid">';
            foreach ($cat_posts_img_destacada as $imagen_destacada) {
                $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($imagen_destacada->ID), 'full')[0];
                $link = get_the_excerpt($imagen_destacada->ID);
                $html.='
                    <a href="'.$link.'" class="d-block w-100">
                        <picture>
                            <source class="lazy img-fluid" 
                                srcset="'.$imagen.'" 
                                type="image/webp" 
                                alt="Logo Once Noticias" loading="lazy">
                            <source class="lazy img-fluid" 
                                srcset="'.$imagen.'" 
                                type="image/png" 
                                alt="Logo Once Noticias" loading="lazy"> 
                            <img class="img-fluid lazy img-responsive" 
                                src="'.$imagen.'" 
                                alt="Logo Once Noticias" width="139" height="30">
                        </picture>
                    </a>
                ';
            }
            $html.='
        </div>
    </section>
    <section class="section-notices section-important-notes px-4 px-md-5 pt-3 pt-mb-5 pb-3 pb-mb-4">
        <article class="container">
            <div class="flex-column-reverse flex-lg-row row">
                <div class="col-lg-8 mt-3 mt-mb-0">
                    <div class="title-notes text-center w-50">
                        <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-start">
                            Destacadas
                        </h2>
                    </div>
                    <div class="continer-items d-flex flex-column mt-4 row-gap-3 w-100">';
                    $ultimo = array_pop($cat_posts_tendencias);
                    foreach ($cat_posts_tendencias as $tendencias) {
                        $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($tendencias->ID), 'minis')[0];
                        $extracto = get_the_excerpt($tendencias->ID);
                        $link = get_permalink($tendencias->ID);
                        $title = get_the_title($tendencias->ID);
                        $categories = get_the_category($tendencias->ID);
                        $category = !empty($categories) ? $categories[0]->name : '';
                        $date = get_the_date('j, F Y', $tendencias->ID);
                        $time_ago = human_time_diff(get_post_time('U', false, $tendencias->ID), current_time('timestamp'));
                        $time_ago = 'Hace ' . $time_ago;
                        $html.=' <a href="'.$link.'" class="row item-destacada pe-0 w-100 mx-0">
                            <div class="col-12 col-lg-4 px-0 px-lgx-3">
                                <div class="w-100 position-relative">
                                    <div class="overflow-label d-flex align-items-center justify-content-between position-absolute w-100 p-2">
                                        <h4 class="label-section m-0 px-3 py-1 text-uppercase text-white">'.$category.'</h4>
                                            <div class="align-items-center d-flex gap-1 justify-content-center text-white">
                                                <i class="fa-regular fa-clock"></i>
                                                <h6 class="m-0">'.$time_ago.'</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <picture class="d-block w-100">
                                        <source class="lazy img-fluid" 
                                            srcset="'.$imagen.'" 
                                            type="image/webp" 
                                            alt="Imagen nota" loading="lazy">
                                        <source class="lazy img-fluid" 
                                            srcset="'.$imagen.'" 
                                            type="image/png" 
                                            alt="Imagen nota" loading="lazy"> 
                                        <img class="img-fluid lazy img-responsive" 
                                            src="'.$imagen.'" 
                                            alt="Imagen nota" width="139" height="30">
                                    </picture>
                                </div>
                                <div class="col-lg-8 d-flex flex-column mt-2 mt-mb-0">
                                    <div class="title">
                                        <h2 class="border-bottom border-2 h5 mb-1 fw-bold text-uppercase ">'.$title.'</h2>
                                            <small>'.$date.'</small>
                                    </div>
                                    <div class="desc mt-2">
                                        <p class="text-justify m-0 text-elipsis-vertical">
                                            '.$extracto.'
                                        </p>
                                    </div>
                                </div>
                            </a>';
                    }
                    $html.='</div>
                    </div>
                    <div class="col-lg-4 d-flex flex-column">
                        <div class="title-notes text-start w-100">
                            <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-end">
                                Mañaneras del pueblo
                            </h2>
                        </div>
                    <div class="note-mananera mt-2">';
                        foreach ($cat_posts_mananera as $mananera) {
                            $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($mananera->ID), 'full')[0];
                            $link = get_the_excerpt($mananera->ID);
                            $html.='
                                    <a href="'.$link.'" class="d-block">
                                    <picture>
                                        <source class="lazy img-fluid" 
                                            srcset="'.$imagen.'" 
                                            type="image/webp" 
                                            alt="Imagen nota" loading="lazy">
                                        <source class="lazy img-fluid" 
                                            srcset="'.$imagen.'" 
                                            type="image/png" 
                                            alt="Imagen nota" loading="lazy"> 
                                        <img class="img-fluid lazy img-responsive" 
                                            src="'.$imagen.'" 
                                            alt="Imagen nota" width="139" height="30">
                                    </picture> 
                                </a>                                   
                            ';
                        }
                    $html.='</div>
                    <div class="title-notes text-start w-100 mt-3">
                        <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-end">
                            Tendencias
                        </h2>
                    </div>
                    <div class="align-items-center d-flex flex-column row-gap-2 mt-2 note-tendencias">';
                    $html.='
                        <a href="" class="row item-tendencias py-2 border w-100">
                            <div class="col-lg-4">
                                <picture>
                                    <source class="lazy img-fluid" 
                                        srcset="'.wp_get_attachment_image_src(get_post_thumbnail_id($ultimo->ID), 'minis')[0].'" 
                                        type="image/webp" 
                                        alt="Imagen nota" loading="lazy">
                                    <source class="lazy img-fluid" 
                                        srcset="'.wp_get_attachment_image_src(get_post_thumbnail_id($ultimo->ID), 'minis')[0].'" 
                                        type="image/png" 
                                        alt="Imagen nota" loading="lazy"> 
                                    <img class="img-fluid lazy img-responsive" 
                                        src="'.wp_get_attachment_image_src(get_post_thumbnail_id($ultimo->ID), 'minis')[0].'" 
                                        alt="Imagen nota" width="139" height="30">
                                </picture>
                            </div>
                            <div class="col-lg-8 d-flex flex-column mt-2 mt-lg-0">
                                <div class="title">
                                    <h2 class="h6 mb-1 fw-bold text-uppercase">'.get_the_title($ultimo->ID).'</h2>
                                </div>
                                <div class="desc mt-1">
                                    <p class="text-justify m-0 text-elipsis-vertical">
                                        '.get_the_excerpt($ultimo->ID).'
                                    </p>
                                </div>
                            </div>
                        </a>';
                        $html.='
                    </div>
                </div>
            </div>
        </article>
    </section>
    <section class="section-notices section-interviews-notes px-4 px-md-5 py-3 py-md-4">
        <article class="container">
            <div class="title-notes text-center w-25">
                <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-start">
                    Entrevistas
                </h2>
            </div>
            <div class="mt-4 content-item-interview row-gap-3 row-gap-lg-0">';
                foreach ($cat_posts_entrevistas as $entrevistas) {
                    $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($entrevistas->ID), 'minis')[0];
                    $title = get_the_title($entrevistas->ID);
                    $extracto = get_the_excerpt($entrevistas->ID);
                    // FIX: antes tenías dos atributos data-link, el segundo pisaba al primero.
                    $html.='<div class="item-interview" 
                                data-bs-toggle="modal" 
                                data-bs-target="#interviewModal" 
                                data-title="'.esc_attr($title).'"
                                data-extracto="'.esc_attr($extracto).'">
                                <picture>
                                    <source class="lazy img-fluid" 
                                        srcset="'.$imagen.'" 
                                        type="image/webp" 
                                        alt="Imagen nota" loading="lazy">
                                    <source class="lazy img-fluid" 
                                        srcset="'.$imagen.'" 
                                        type="image/png" 
                                        alt="Imagen nota" loading="lazy"> 
                                    <img class="img-fluid lazy img-responsive" 
                                        src="'.$imagen.'" 
                                        alt="Imagen nota" width="139" height="30">
                                </picture>
                                <div class="overlay-text"> 
                                    <h3 class="h5 mb-0">'.$title.'</h3> 
                                </div>
                            </div>';
                }
            $html.='</div>
        </article>
    </section>
    <section class="section-notices section-last-notes px-4 px-md-5 py-3 py-md-5">
        <article class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="title-notes text-center w-50">
                        <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-start">
                            ÚLTIMAS NOTICIAS
                        </h2>
                    </div>
                    <div class="container-item-last-notes mt-4 row-gap-4">';
                        foreach ($cat_posts_ultimos as $ultimas_noticias) {
                            $imagen=wp_get_attachment_image_src(get_post_thumbnail_id($ultimas_noticias->ID), 'minis')[0];
                            $title = get_the_title($ultimas_noticias->ID);
                            $link = get_permalink($ultimas_noticias->ID);
                            $html.='<a href="'.$link.'" class="row item-last-notes pe-0 w-100">
                                        <div class="col-lg-4 p-0 px-mb-4">    
                                            <picture>
                                                <source class="lazy img-fluid" 
                                                    srcset="'.$imagen.'" 
                                                    type="image/webp" 
                                                    alt="Imagen nota" loading="lazy">
                                                <source class="lazy img-fluid" 
                                                    srcset="'.$imagen.'" 
                                                    type="image/png" 
                                                    alt="Imagen nota" loading="lazy"> 
                                                <img class="img-fluid lazy img-responsive" 
                                                    src="'.$imagen.'" 
                                                    alt="Imagen nota" width="139" height="30">
                                            </picture>
                                        </div>
                                        <div class="col-lg-8 d-flex flex-column">
                                            <div class="desc mt-2">
                                                <p class="text-justify m-0 text-elipsis-vertical">
                                                    '.$title.'
                                                </p>
                                            </div>
                                        </div>
                                    </a>';
                        }
                    $html.='</div>
                </div>
                <div class="col-lg-4 d-flex flex-column mt-3 mt-mb-0">
                    <div class="title-notes w-100">
                        <h2 class="h3 text-uppercase fw-bold border-bottom border-2 border-after-end">
                            Más
                        </h2>
                    </div>
                    <div class="align-items-center d-flex flex-column row-gap-2 mt-2 note-categories">';
                        foreach ($categorias as $category) {
                            $html.='<a href="/secciones/'.$category['slug'].'" class="row item-categorie py-2 border border-dark w-100">
                                        <div class="col-lg-4">
                                            <picture>
                                                <source class="lazy img-fluid" 
                                                    srcset="'.$category['imagen'].'" 
                                                    type="image/webp" 
                                                    alt="Imagen nota" loading="lazy">
                                                <source class="lazy img-fluid" 
                                                    srcset="'.$category['imagen'].'" 
                                                    type="image/png" 
                                                    alt="Imagen nota" loading="lazy"> 
                                                <img class="img-fluid lazy img-responsive" 
                                                    src="'.$category['imagen'].'" 
                                                    alt="Imagen nota" width="139" height="30">
                                            </picture>
                                        </div>
                                        <div class="col-lg-8 mt-2 mt-md-0 d-flex flex-column">
                                            <div class="title">
                                                <h2 class="h6 mb-1 fw-bold text-uppercase">'.$category['titulo'].'</h2>
                                            </div>
                                        </div>
                                    </a>';
                        }
                    $html.='</div>
                </div>
            </div>
        </article>
    </section>
    <script src="http://192.168.7.198/wp-content/plugins/oncenoticias/assets/js/index.js"></script>
    <!-- Bootstrap -->
    <script src="http://192.168.7.198/wp-content/plugins/oncenoticias/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="http://192.168.7.198/wp-content/plugins/oncenoticias/assets/vendor/bootstrap/js/popper.min.js"></script>
    <!-- Swiper -->
    <script src="http://192.168.7.198/wp-content/plugins/oncenoticias/assets/vendor/swiper/js/swiper-bundle.min.js"></script>
    <!-- Lite Youtube -->
    <script type="module" src="http://192.168.7.198/wp-content/plugins/oncenoticias/assets/vendor/lite-youtube/lite-youtube.min.js"></script>
    ';
    return $html;
}
add_shortcode('seccion-principal-noticias', 'seccion_principal_noticias');
