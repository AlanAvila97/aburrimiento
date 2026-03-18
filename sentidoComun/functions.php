<?php
/**
 * Nook functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Nook
 * @since Nook 1.0
 */

declare( strict_types = 1 );

if ( ! function_exists( 'nook_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Nook 1.0
	 *
	 * @return void
	 */
	function nook_support() {

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

		// Make theme available for translation.
		load_theme_textdomain( 'nook' );
	}

endif;

add_action( 'after_setup_theme', 'nook_support' );

function nook_child_enqueue_styles() {
    wp_enqueue_style('nook-parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('nook-child-style', 
        get_stylesheet_directory_uri() . '/assets/css/style.css',
        array('nook-parent-style'),
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'nook_child_enqueue_styles');
if ( ! function_exists( 'nook_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Nook 1.0
	 *
	 * @return void
	 */
	function nook_styles() {

		// Register theme stylesheet.
		wp_register_style(
			'nook-style',
			get_stylesheet_directory_uri() . '/style.css',
			array(),
			wp_get_theme()->get( 'Version' )
		);

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'nook-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'nook_styles' );


// updater for WordPress.com themes
if ( is_admin() )
	include dirname( __FILE__ ) . '/inc/updater.php';

//Shortcode seccion interna categorias-tags 
function taxonomia_actual($atts) {
    $bandera = 0;
    if (is_category()) {
        $term = get_queried_object();
        if ((int) $term->term_id === 31) {
            $bandera = 1;
            $arg_noticias = [
                'post_type' => 'post',
                'orderby' => 'date',
                'order' => 'DESC',
                'category__in' => [13],
                'posts_per_page' => 28,
            ];
            $arg_ultimas = array( 
                'post_type'      => 'post',
                'orderby'        => 'date',
                'order'          => 'DESC',
                'category__not_in' => array(13, 1),
                'posts_per_page' => 8, 
            ); 
            $cat_posts_ultimas = get_posts($arg_ultimas);
        } else {
            $arg_noticias = [
                'post_type' => 'post',
                'orderby' => 'date',
                'order' => 'DESC',
                'category__in' => [$term->term_id],
                'posts_per_page' => 12,
            ];
        }
    } elseif (is_tag()) {
        $term = get_queried_object();
        $arg_noticias = [
            'post_type' => 'post',
            'orderby' => 'date',
            'order' => 'DESC',
            'tag__in' => [$term->term_id],
            'posts_per_page' => 12,
        ];
        if (strtolower(substr($term->name, 0, 7))==='revista') {
            $bandera = 2;
            $args = [
                'post_type'      => 'post',
                'posts_per_page' => 1,
                'title'          => $term->name,
                'category__in'   => [13],
            ];
            $cat_contenido_revista = get_posts($args);
        }
    } else {
        return;
    }
    $cat_posts_noticias = get_posts($arg_noticias);
    switch ($bandera) {
        case 0:
            $destacadas = array_slice($cat_posts_noticias , 0 , 8);
        $historico = array_slice($cat_posts_noticias, 8 , 8);
        $html = '<link href="https://sentidocomunmx.com/wp-content/themes/nook-wpcom/assets/css/interior_categorias.css" rel="stylesheet">
                    <div class="container">
                        <section class="news-section">
                                <div class="cell">
                                    <div class="news-container">';
                                    foreach ($destacadas as $dest) {
                                        $fecha = date_i18n('F j, Y', strtotime($dest->post_date));
                                        $imagen = wp_get_attachment_image_src(get_post_thumbnail_id($dest->ID), 'medium');
                                        $html.= '<a href="'.$dest->guid.'">
                                                    <article class="news-card">
                                                        <div class="image-wrapper">
                                                            <img src="'.$imagen[0].'" alt="Tennis player">
                                                        </div>
                                                        <div class="content">
                                                            <h2>'.$dest->post_title.'</h2>
                                                            <div class="meta">
                                                                <span class="date">'.ucwords($fecha).'</span>
                                                            </div>
                                                            <p>'.$dest->post_excerpt.'</p>
                                                        </div>
                                                    </article>
                                                </a>';
                                    }
                                $html.='</div>
                                </div>
                                <div class="cell">
                                    <div class="latest-news-container">';
                                    foreach ($historico as $hist) {
                                        $fecha = date_i18n('F j, Y', strtotime($hist->post_date));
                                        $html.= '<div class="latest-news-item">
                                                    <a href="'.$hist->guid.'">
                                                        <span>'.ucwords($fecha).'</span>
                                                        <h3>'.$hist->post_title.'</h3>
                                                    </a>
                                                </div>';
                                    }
                                    $html.='</div>
                                </div>
                            </section>
                        </div>
                    ';
            break;
        case 1:
             $html = '<link href="https://sentidocomunmx.com/wp-content/themes/nook-wpcom/assets/css/interior_categorias.css" rel="stylesheet">
                    <div class="container re">
                        <section class="news-section">
                            <div class="cell">
                                <div class="news-container">';
                                foreach ($cat_posts_noticias as $dest) {
                                    $fecha = date_i18n('F j, Y', strtotime($dest->post_date));
                                    $imagen = wp_get_attachment_image_src(get_post_thumbnail_id($dest->ID), 'largue');
                                    $html.= '<a href="https://sentidocomunmx.com/tag/'.$dest->post_title.'">
                                                <article class="news-card-revistas">
                                                    <div class="image-wrapper-revistas">
                                                        <img src="'.$imagen[0].'" alt="Tennis player">
                                                    </div>
                                                </article>
                                            </a>';
                                }
                            $html.='</div>
                            </div>
                            <div class="cell">
                                <div class="latest-news-container">';
                                foreach ($cat_posts_ultimas as $hist) {
                                    $fecha = date_i18n('F j, Y', strtotime($hist->post_date));
                                    $html.= '<div class="latest-news-item">
                                                <a href="'.$hist->guid.'">
                                                    <span>'.ucwords($fecha).'</span>
                                                    <h3>'.$hist->post_title.'</h3>
                                                </a>
                                            </div>';
                                }
                                $html.='</div>
                            </div>
                        </section>
                    </div>';
            break;
        case 2:
            $imagenrevista = wp_get_attachment_image_src(get_post_thumbnail_id($cat_contenido_revista[0]->ID), 'large');
            $html = '<link href="https://sentidocomunmx.com/wp-content/themes/nook-wpcom/assets/css/custom-revista.css" rel="stylesheet">
                <section class="section-revista">
                    <div class="container-revista container">
                        <div class="portada-revista">
                            <div class="portada">
                                <img src="'.$imagenrevista[0].'" 
                                    class="img-fluid"
                                    alt="">
                                <a href="'.$cat_contenido_revista[0]->post_excerpt.'" class="btn-download">
                                    Descargar
                                    <img src="https://sentidocomunmx.com/wp-content/uploads/2026/02/download_sentido.png" alt="Descargar">
                                </a>
                            </div>
                        </div>
                        <div class="cell">
                            <div class="news-container">';
                            foreach ($cat_posts_noticias as $noticia) {
                                $fecha = date_i18n('F j, Y', strtotime($noticia->post_date));
                                $imagen_articulo=wp_get_attachment_image_src(get_post_thumbnail_id($noticia->ID), 'medium');
                                $html.='<a href="'.$noticia->guid.'">
                                    <article class="news-card">
                                        <div class="image-wrapper">
                                            <img src="'.$imagen_articulo[0].'" alt="Tennis player"> 
                                        </div>
                                        <div class="content">
                                            <h2>'.$noticia->post_title.'</h2>
                                            <div class="meta">
                                                <span class="date">'.ucwords($fecha).'</span>
                                            </div>
                                            <p>'.$noticia->post_excerpt.'</p>
                                        </div>
                                    </article>
                                </a>
                                ';
                            }

                            $html.='</div>
                        </div>
                    </div>
                </section>
                <script>
                    document.querySelector(".btn-download").addEventListener("click", async function(e) {
                        e.preventDefault();
                        const pdfUrl = this.getAttribute(2data-pdf-url");
                        try {
                            const response = await fetch(pdfUrl);
                            const blob = await response.blob();
                            const url = window.URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = "sentido_comun_14.pdf";
                            document.body.appendChild(a);
                            a.click();
                            window.URL.revokeObjectURL(url);
                            document.body.removeChild(a);
                        } catch (error) {
                            window.open(pdfUrl, "_blank");
                        }
                    });
                </script>';
            break;
        default:
            # code...
            break;
    }
    if ($bandera != 1) {
        
    } else {
       
    }
    
   
    //return "<span data-tipo='{$tipo}'>{$nombre}</span>";
    return $html;
}
add_shortcode('taxonomia-actual', 'taxonomia_actual');
//Shortcode de 3 columnas
function contenido_central_shortcode() {
    $arg_noticias = array( 
        'post_type' => 'post',
        'orderby' => 'date',
        'order' => 'DESC',
        'category__in' => array(6),
        'posts_per_page' => 3, 
    ); 
    $cat_posts_noticias = get_posts($arg_noticias);
    $arg_columnas = array( 
        'post_type' => 'post',
        'orderby' => 'date',
        'order' => 'DESC',
        'category__in' => array(7),
        'posts_per_page' => 3, 
    ); 
    $cat_posts_columnas = get_posts($arg_columnas);
    $tag1 = get_the_tags($cat_posts_columnas[0]->ID);
    $all_meta1 = get_term_meta($tag1[0]->term_id);
    $tag2 = get_the_tags($cat_posts_columnas[1]->ID);
    $all_meta2 = get_term_meta($tag2[0]->term_id);
    $tag3 = get_the_tags($cat_posts_columnas[2]->ID);
    $all_meta3 = get_term_meta($tag3[0]->term_id);
    $arg_revista = array( 
        'post_type' => 'post',
        'orderby' => 'date',
        'order' => 'DESC',
        'category__in' => array(13),
        'posts_per_page' => 1, 
    ); 
    $cat_posts_revista = get_posts($arg_revista);
    $imagenrevista = wp_get_attachment_image_src(get_post_thumbnail_id($cat_posts_revista[0]->ID), 'large');
    $imagenp1 = wp_get_attachment_image_src(get_post_thumbnail_id($cat_posts_noticias[0]->ID), 'medium');
    $imagenp2 = wp_get_attachment_image_src(get_post_thumbnail_id($cat_posts_noticias[1]->ID), 'medium');
    $imagenp3 = wp_get_attachment_image_src(get_post_thumbnail_id($cat_posts_noticias[2]->ID), 'medium');
    $imagenp1g = wp_get_attachment_image_src(get_post_thumbnail_id($cat_posts_noticias[0]->ID), 'large');
    $imagenp2g = wp_get_attachment_image_src(get_post_thumbnail_id($cat_posts_noticias[1]->ID), 'large');
    $imagenp3g = wp_get_attachment_image_src(get_post_thumbnail_id($cat_posts_noticias[2]->ID), 'large');

    echo '</pre>';
    $html = '<link href="https://sentidocomunmx.com/wp-content/themes/nook-wpcom/assets/css/main.css" rel="stylesheet">
            <section class="section-sentido-comun">
                <div class="container container-sentido-comun">
                    <div class="column-sentido-comun column-text">
                        <div class="item-text title">
                            <h2>NOTICIAS</h2>
                        </div>
                        <a href="'.$cat_posts_noticias[0]->guid.'" class="item-text item-note text">
                            <div class="content-image">
                                <picture>
                                    <source srcset="'.$imagenp1[0].'" type="image/png"
                                        media="(max-width: 1180px)" alt="" loading="lazy">
                                    <source srcset="'.$imagenp1[0].'" type="image/png"
                                        media="(min-width: 1180px)" alt="" loading="lazy">
                                        <img class="img-fluid lazy"
                                        src="'.$imagenp1g[0].'" alt="" width="1200" height="600">
                                </picture>
                                <div class="overlay-item">
                                    <h3>'.$cat_posts_noticias[0]->post_title.'</h3>
                                    <p>'.$cat_posts_noticias[0]->post_excerpt.'</p>
                                </div>
                            </div>
                        </a><a href="'.$cat_posts_noticias[1]->guid.'" class="item-text item-note text">
                            <div class="content-image">
                                <picture>
                                    <source srcset="'.$imagenp2[0].'" type="image/png"
                                        media="(max-width: 1180px)" alt="" loading="lazy">
                                    <source srcset="'.$imagenp2[0].'" type="image/png"
                                        media="(min-width: 1180px)" alt="" loading="lazy"><img class="img-fluid lazy"
                                        src="'.$imagenp2g[0].'" alt="" width="1200" height="600">
                                </picture>
                                <div class="overlay-item">
                                    <h3>'.$cat_posts_noticias[1]->post_title.'</h3>
                                    <p>'.$cat_posts_noticias[1]->post_excerpt.'</p>
                                </div>
                            </div>
                        </a><a href="'.$cat_posts_noticias[2]->guid.'" class="item-text item-note text">
                            <div class="content-image">
                                <picture>
                                    <source srcset="'.$imagenp3[0].'" type="image/png"
                                        media="(max-width: 1180px)" alt="" loading="lazy">
                                    <source srcset="'.$imagenp3[0].'" type="image/png"
                                        media="(min-width: 1180px)" alt="" loading="lazy"><img class="img-fluid lazy"
                                        src="'.$imagenp3g[0].'" alt="" width="1100" height="400">
                                </picture>
                                <div class="overlay-item">
                                    <h3>'.$cat_posts_noticias[2]->post_title.'</h3>
                                    <p>'.$cat_posts_noticias[2]->post_excerpt.'</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="column-sentido-comun column-image">
                        <a href="'.$cat_posts_revista[0]->post_excerpt.'" class="item-text item-note text">
                            <picture>
                                <source srcset="'.$imagenrevista[0].'"
                                    type="image/png" media="(max-width: 1180px)" alt="" loading="lazy">
                                <source srcset="'.$imagenrevista[0].'"
                                    type="image/png" media="(min-width: 1180px)" alt="" loading="lazy"><img class="img-fluid lazy"
                                    src="'.$imagenrevista[0].'" alt=""
                                    width="1200" height="600">
                            </picture>
                        </a>
                    </div>
                    <div class="column-sentido-comun column-text">
                        <div class="item-text title">
                            <h2>COLUMNAS PLEBEYAS</h2>
                        </div>
                        <a href="'.$cat_posts_columnas[0]->guid.'" class="item-text item-profile text">
                            <div class="title">
                                <h3>'.$cat_posts_columnas[0]->post_title.'</h3>
                            </div>
                            <div class="info">
                                <div class="img-profile"><img src="'.$all_meta1['z_taxonomy_image'][0].'" alt=""></div>
                                <div class="text-profile">
                                    <h4>'.$tag1[0]->name.'</h4>
                                    <p>'.$cat_posts_columnas[0]->post_excerpt.'</p>
                                </div>
                            </div>
                        </a>
                        <a href="'.$cat_posts_columnas[1]->guid.'" class="item-text item-profile text">
                            <div class="title">
                                <h3>'.$cat_posts_columnas[1]->post_title.'</h3>
                            </div>
                            <div class="info">
                                <div class="img-profile"><img src="'.$all_meta2['z_taxonomy_image'][0].'" alt=""></div>
                                <div class="text-profile">
                                    <h4>'.$tag2[0]->name.'</h4>
                                    <p>'.$cat_posts_columnas[1]->post_excerpt.'</p>
                                </div>
                            </div>
                        </a>
                        <a href="'.$cat_posts_columnas[2]->guid.'" class="item-text item-profile text">
                            <div class="title">
                                <h3>'.$cat_posts_columnas[2]->post_title.'</h3>
                            </div>
                            <div class="info">
                                <div class="img-profile"><img src="'.$all_meta3['z_taxonomy_image'][0].'" alt=""></div>
                                <div class="text-profile">
                                    <h4>'.$tag3[0]->name.'</h4>
                                    <p>'.$cat_posts_columnas[2]->post_excerpt.'</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>';
    // return $html;
    // // Eliminar saltos de línea, retornos y tabs
    // $html_limpio = preg_replace('/\s+/', ' ', $html);
    
    // // También eliminar espacios entre tags (opcional)
    // $html_limpio_1 = preg_replace('/>\s+</', '><', $html_limpio);
    
    // return $html_limpio_1;
    return $html;
}
add_shortcode('contenido-central-shortcode', 'contenido_central_shortcode');

function contenido_revista_shortcode() {
    $html = '<link href="https://sentidocomunmx.com/wp-content/themes/nook-wpcom/assets/css/custom-revista.css" rel="stylesheet">
            <section class="section-revista">
                <div class="container-revista container">
                    <div class="portada-revista">
                        <div class="portada">
                            <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/Sentido-Comun-Portada-14.jpg" 
                                class="img-fluid"
                                alt="">
                            <a href="https://sentidocomunmx.com/wp-content/uploads/2026/01/sentido_comun_14.pdf" class="btn-download">
                                Descargar
                            </a>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="news-container">
                            <a href="https://sentidocomunmx.com/?p=819">
                                <article class="news-card">
                                    <div class="image-wrapper">
                                        <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/venezuela2026-300x226.png" alt="Tennis player">
                                    </div>
                                    <div class="content">
                                        <h2>Reforma histórica en Venezuela permite inversión petrolera</h2>
                                        <div class="meta">
                                            <span class="date">Enero 30, 2026</span>
                                        </div>
                                        <p>La Asamblea Nacional de Venezuela aprobó una reforma que permite la entrada de inversión extranjera en el sector petrolero, con el fin de impulsar la competitividad y atraer capitales.</p>
                                    </div>
                                </article>
                            </a>
                            <a href="https://sentidocomunmx.com/?p=812">
                                <article class="news-card">
                                    <div class="image-wrapper">
                                        <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/salinasSAT2026-300x169.jpeg" alt="Tennis player">
                                    </div>
                                    <div class="content">
                                        <h2>Deuda fiscal de Grupo Salinas será cubierta en pagos</h2>
                                        <div class="meta">
                                            <span class="date">Enero 30, 2026</span>
                                        </div>
                                        <p>El SAT informó que Grupo Salinas ya realizó un primer pago de la deuda millonaria y cubrirá el resto en parcialidades.</p>
                                    </div>
                                </article>
                            </a>
                            <a href="https://sentidocomunmx.com/?p=760">
                                <article class="news-card">
                                    <div class="image-wrapper">
                                        <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/Mananera29.01.26-e1769729972606-300x165.png" alt="Tennis player">
                                    </div>
                                    <div class="content">
                                        <h2>Gobierno busca que ningún caso de violencia infantil se quede sin atención</h2>
                                        <div class="meta">
                                            <span class="date">Enero 29, 2026</span>
                                        </div>
                                        <p>La estrategia de la Secretaría de Mujeres y el Gobierno Federal busca homologar la actuación de autoridades de salud y fiscalías estatales ante casos de violencia en infancias.</p>
                                    </div>
                                </article>
                            </a>
                            <a href="https://sentidocomunmx.com/?p=792">
                                <article class="news-card">
                                    <div class="image-wrapper">
                                        <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/Sheinbaum28.01.26-e1769728828413-300x211.png" alt="Tennis player">
                                    </div>
                                    <div class="content">
                                        <h2>Sheinbaum refuerza diálogo sobre comercio bilateral con Trump</h2>
                                        <div class="meta">
                                            <span class="date">Enero 29, 2026</span>
                                        </div>
                                        <p>La conversación entre los mandatarios de México y Estados Unidos se centró en la frontera, la lucha contra el narcotráfico y el comercio.</p>
                                    </div>
                                </article>
                            </a>
                            <a href="https://sentidocomunmx.com/?p=782">
                                <article class="news-card">
                                    <div class="image-wrapper">
                                        <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/MarcoRubio2026-300x157.png" alt="Tennis player">
                                    </div>
                                    <div class="content">
                                        <h2>Senado de EE. UU. analiza política hacia Venezuela</h2>
                                        <div class="meta">
                                            <span class="date">Enero 29, 2026</span>
                                        </div>
                                        <p>Marco Rubio, secretario de Estado, afirmó que la decisión de atacar Venezuela se fundamenta en acusaciones de narcotráfico contra Nicolás Maduro.</p>
                                    </div>
                                </article>
                            </a>
                            <a href="https://sentidocomunmx.com/?p=768">
                                <article class="news-card">
                                    <div class="image-wrapper">
                                        <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/Atentado29.01.26-226x300.png" alt="Tennis player">
                                    </div>
                                    <div class="content">
                                        <h2>Ataque a diputados en Sinaloa activa respuesta federal</h2>
                                        <div class="meta">
                                            <span class="date">Enero 29, 2026</span>
                                        </div>
                                        <p>El Gabinete de Seguridad creó una célula de inteligencia para esclarecer el ataque.</p>
                                    </div>
                                </article>
                            </a>
                        </div>
                    </div>
                </div>
            </section>';
    return $html;    
}
add_shortcode('contenido-revista-shortcode', 'contenido_revista_shortcode');
function contenido_carousel(){
    $arg_revista_pasadas = array( 
        'post_type' => 'post',
        'orderby' => 'date',
        'order' => 'DESC',
        'category__in' => array(13),
        'posts_per_page' => 8, 
        'offset' => 1,
    ); 
    $cat_posts_revistas = get_posts($arg_revista_pasadas);
    $html = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />
            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .section-slider{
                    margin-bottom: 1rem;
                }
                .section-slider .container-slider{
                    width: 100%;
                    height: auto;
                    display: flex;
                }
                .section-slider .container-slider .swiper {
                    width: 100%;
                    height: 100%;
                }
                .section-slider .container-slider .swiper .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    background: #444;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .section-slider .container-slider .swiper .swiper-slide img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .section-slider .container-slider .swiper .swiper-button-next, 
                .section-slider .container-slider .swiper .swiper-button-prev{
                    color: #ffffff;
                    background: #08080873;
                    padding: 0.7rem;
                    width: 40px;
                    height: 80px;
                    border-radius: 0.5rem;
                }
            </style>
             <section class="section-slider">
                <div class="container container-slider">  
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">';
                        foreach ($cat_posts_revistas as $val) {
                            $html .= '<div class="swiper-slide"><a class="item-slider-partys" href="'.esc_url($val->post_excerpt).'" target="_blank"><img src="'.esc_url(wp_get_attachment_image_src(get_post_thumbnail_id($val->ID), 'large')[0]).'" alt="'.esc_attr($val->post_title).'"></a></div>';
                        }
                        $html .= '
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
            <script>
                var swiper = new Swiper(".mySwiper", {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    rewind: true,
                    preloadImages: false,
                    lazy: true,
                    resizeObserver: true, 
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        300: {
                            slidesPerView: 2,
                        },
                        310: {
                            slidesPerView: 2,
                        },
                        320: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        950: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1500: {
                            slidesPerView: 4,
                        },
                        2100: {
                            slidesPerView: 4,
                        },
                    },
                });
            </script>';  
    return $html;
}
add_shortcode('contenido-carousel', 'contenido_carousel');

function header_custom() {
    ob_start(); ?>
    <link href="https://sentidocomunmx.com/wp-content/themes/nook-wpcom/assets/css/nav.css" rel="stylesheet">
        <header class="header fixed-top header-sentido alignfull">
            <div class="container-header">
                <div class="content-menu-hamburguer">
                    <input type="checkbox" class="menu-btn" id="openSidebarMenu">
                    <div id="sidebarMenu"><div class="container-menu scroll-menu">
                        <a id="MenuInicio" href="https://sentidocomunmx.com/category/noticias/" class="items " 
                           aria-labelledbyledby="firstname" meta="Redirección a página principal">
                            Noticias
                        </a>
                        <a id="MenuInicio" href="https://sentidocomunmx.com/category/columnas-plebeyas/" class="items " 
                           aria-labelledbyledby="firstname" meta="Redirección a página principal">
                           Columnas Plebeyas
                        </a>
                        <a id="MenuInicio" href="https://sentidocomunmx.com/category/dato-encerrado/" class="items " 
                           aria-labelledbyledby="firstname" meta="Redirección a página principal">
                           Dato Encerrado
                        </a>
                        <a id="MenuInicio" href="https://sentidocomunmx.com/category/carton/" class="items " 
                           aria-labelledbyledby="firstname" meta="Redirección a página principal">
                           Cartón Común 
                        </a>
                        <a id="MenuInicio" href="https://sentidocomunmx.com/category/revistas/" class="items " 
                           aria-labelledbyledby="firstname" meta="Redirección a página principal">
                           Revistas
                        </a>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="logo">
                <a href="/" aria-labelledby="Redirección a página principal">
                    <picture>
                        <source class="lazy img-fluid" 
                            srcset="https://sentidocomunmx.com/wp-content/uploads/2026/01/logo-sentido-comun_processed.png" 
                            type="image/webp">
                        <source class="lazy img-fluid" 
                            srcset="https://sentidocomunmx.com/wp-content/uploads/2026/01/logo-sentido-comun_processed.png" 
                            type="image/png">
                        <img class="img-fluid lazy" 
                            src="https://sentidocomunmx.com/wp-content/uploads/2026/01/logo-sentido-comun_processed.png" 
                            alt="Logo Once" width="139" height="45">
                    </picture>
                </a>
            </div>
            <div class="sections-nav">
                <ul class="elements-nav">
                    <li>
                        <a href="https://sentidocomunmx.com/category/noticias/" 
                           aria-labelledby="Redirección a página en vivo">
                           <h3>Noticias</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://sentidocomunmx.com/category/columnas-plebeyas/" 
                           aria-labelledby="Redirección a página en vivo">
                           <h3>Columnas Plebeyas</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://sentidocomunmx.com/category/dato-encerrado/" 
                           aria-labelledby="Redirección a página horarios">
                           <h3>Dato Encerrado</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://sentidocomunmx.com/category/carton/" 
                           aria-labelledby="Redirección a página horarios">
                           <h3>Cartón Común</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://sentidocomunmx.com/category/revistas/" 
                           aria-labelledby="Redirección a página horarios">
                           <h3>Revistas</h3>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="container-form">
                <form role="search" method="get" action="https://sentidocomunmx.com/"
                    class="wp-block-search__button-inside wp-block-search__text-button alignleft wp-block-search">
                    <div class="wp-block-search__inside-wrapper">
                        <div class="container-icon-search">
                            <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/search-interface-symbol.png" alt="">
                        </div>
                        <div class="container-intpu">
                            <input id="wp-block-search__input-1" placeholder="Buscar" value="" type="search" name="s" required="">
                        </div>                        
                    </div>
                </form>
            </div>
        </div>
    </header>
<?php
    return ob_get_clean();
}

add_shortcode('header-custom', 'header_custom');

function seccion_mixta_shortcode() {
    // Datos en Breve (izquierdo)
    $arg_datosBreve = array( 
        'post_type' => 'post',
        'orderby' => 'date',
        'order' => 'DESC',
        'category__in' => array(9),
        'posts_per_page' => 8, 
    ); 
    $cat_postsizquierdo = get_posts($arg_datosBreve);
    
    // Cartón (derecho)
    $arg_carton = array( 
        'post_type' => 'post',
        'orderby' => 'date',
        'order' => 'DESC',
        'category__in' => array(21),
        'posts_per_page' => 8, 
    ); 
    $cat_postsderecho = get_posts($arg_carton);
    
    $html = '<style>.seccion-mixta{width:100%;} .seccion-mixta .contenedor-sliders{ display:flex;width:100%;flex-wrap:wrap; }.seccion-mixta .contenedor-izquierdo{display:flex;flex-direction:column;width:50%; padding: 0.5rem; }.seccion-mixta .contenedor-izquierdo .item-texto{width:100%;padding:2rem;box-sizing:border-box;}.seccion-mixta .contenedor-derecho{width:50%; padding: 0.5rem;}.seccion-mixta .contenedor-derecho img{width:100%;height:100%;object-fit:cover;}@media(max-width:768px){.seccion-mixta{flex-direction:column;}.seccion-mixta .contenedor-izquierdo,.seccion-mixta .contenedor-derecho{width:100%;}.seccion-mixta .contenedor-derecho img{height:auto;}}.section-slider-partys .container-slider-partys .swiper{width:100%;height:100%;}.section-slider-partys .container-slider-partys{width:100%;height:auto}.section-slider-partys .container-slider-partys .swiper .swiper-button-next:after,.section-slider-partys .container-slider-partys .swiper .swiper-button-prev:after{color:#701d47;background:#ffffff9e;padding:0.5rem;}.section-slider-partys .container-slider-partys .item-slider-partys{width:100%;height:auto;display:flex;justify-content:center;color:#000;cursor:pointer;text-decoration:none;}.section-slider-partys .container-slider-partys .item-slider-partys img{display:block;width:100%;height:30rem;max-width:100%;object-fit:cover;object-position: top;}</style>';
    
    $html .= '<section class="seccion-mixta alignfull">';
    $html .= '<div class="container contenedor-sliders">';
    $html .= '<div class="contenedor-izquierdo">';
    $html .= '<div class="contenedor-div-izquierdo">';
    $html .= '<section class="section-slider-partys alignfull">';
    $html .= '<div class="container-slider-partys"><div class="swiper mySwipperCarton"><div class="swiper-wrapper">';
    
    foreach ($cat_postsizquierdo as $val) {
        $html .= '<div class="swiper-slide"><a class="item-slider-partys" href="'.esc_url($val->guid).'" target="_blank"><img src="'.esc_url(wp_get_attachment_image_src(get_post_thumbnail_id($val->ID), 'medium')[0]).'" alt="'.esc_attr($val->post_title).'"></a></div>';
    }
    
    $html .= '</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div></section></div></div>';
    
    $html .= '<div class="contenedor-derecho">';
    $html .= '<div class="contenedor-div-derecho">';
    $html .= '<section class="section-slider-partys alignfull">';
    $html .= '<div class="container-slider-partys"><div class="swiper mySwipperDatosEnBreve"><div class="swiper-wrapper">';
    
    foreach ($cat_postsderecho as $val) {
        $html .= '<div class="swiper-slide"><a class="item-slider-partys" href="'.esc_url($val->guid).'" target="_blank"><img src="'.esc_url(wp_get_attachment_image_src(get_post_thumbnail_id($val->ID), 'medium')[0]).'" alt="'.esc_attr($val->post_title).'"></a></div>';
    }
    
    $html .= '</div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div></div></section></div></div></div></section>';
    
    $html .= '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"/>';
    $html .= '<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>';
    $html .= '<script>var swiperCarton = new Swiper(".mySwipperCarton", {navigation: {nextEl: ".mySwipperCarton .swiper-button-next",prevEl: ".mySwipperCarton .swiper-button-prev",},});var swiperDatos = new Swiper(".mySwipperDatosEnBreve", {navigation: {nextEl: ".mySwipperDatosEnBreve .swiper-button-next",prevEl: ".mySwipperDatosEnBreve .swiper-button-prev",},});</script>';
    
    return $html;
}

add_shortcode('seccion-mixta', 'seccion_mixta_shortcode');

function footer_redes_sociales_shortcode() {
    ob_start();
    ?>
    
    <style>
        #footer-bar {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 100%;
            background-image: url(https://sentidocomunmx.com/wp-content/uploads/2026/01/BCK_footer.jpg);
            background-size: 100% 100%;
        }
        #footer-bar p{
            display: none;
        }
        #footer-bar .container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
        }
        #footer-bar .container .redes-sociales {
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            flex-direction: row;
        }
        #footer-bar .container .redes-sociales ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            gap: 1rem;
            list-style: none;
            padding: 0;
            margin: 0;
        }
        #footer-bar .container .imagen-izquierda {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        #footer-bar .container .imagen-derecha {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        #footer-bar .container img {
            width: 4rem;
            height: auto;
            max-width: 100%;
            object-fit: cover;
            display: block;
        }
        #footer-bar .redes-sociales ul li {
            display: flex;
            align-items: center;
        }
        #footer-bar .redes-sociales ul li a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            transition: transform 0.3s ease;
        }
        #footer-bar .redes-sociales ul li a:hover {
            transform: scale(1.1);
        }
        #footer-bar .redes-sociales ul li a svg {
            fill: white;
        }
        @media (max-width: 800px) { 
            #footer-bar .container .redes-sociales ul {
                gap: 2rem;
            }    
        }
    </style>
    
    <section id="footer-bar" class="">
        <div class="container alignfull">
            <div class="imagen-izquierda">
                <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/flecha_der_1.png" alt="Flecha izquierda" loading="lazy">
            </div>
            <div class="redes-sociales">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/RevistaSentidoComunMx/videos/?_rdr" target="_blank" rel="noopener noreferrer" aria-label="Visitar Facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="true" focusable="false">
                                <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@SentidoComunMx" target="_blank" rel="noopener noreferrer" aria-label="Visitar YouTube">
                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="true" focusable="false">
                                <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/SentidoComunMx_" target="_blank" rel="noopener noreferrer" aria-label="Visitar X (Twitter)">
                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" aria-hidden="true" focusable="false">
                                <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.threads.com/@sentidocomunmx_?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" aria-label="Visitar X (Twitter)">
                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M16.3 11.3c-.1 0-.2-.1-.2-.1-.1-2.6-1.5-4-3.9-4-1.4 0-2.6.6-3.3 1.7l1.3.9c.5-.8 1.4-1 2-1 .8 0 1.4.2 1.7.7.3.3.5.8.5 1.3-.7-.1-1.4-.2-2.2-.1-2.2.1-3.7 1.4-3.6 3.2 0 .9.5 1.7 1.3 2.2.7.4 1.5.6 2.4.6 1.2-.1 2.1-.5 2.7-1.3.5-.6.8-1.4.9-2.4.6.3 1 .8 1.2 1.3.4.9.4 2.4-.8 3.6-1.1 1.1-2.3 1.5-4.3 1.5-2.1 0-3.8-.7-4.8-2S5.7 14.3 5.7 12c0-2.3.5-4.1 1.5-5.4 1.1-1.3 2.7-2 4.8-2 2.2 0 3.8.7 4.9 2 .5.7.9 1.5 1.2 2.5l1.5-.4c-.3-1.2-.8-2.2-1.5-3.1-1.3-1.7-3.3-2.6-6-2.6-2.6 0-4.7.9-6 2.6C4.9 7.2 4.3 9.3 4.3 12s.6 4.8 1.9 6.4c1.4 1.7 3.4 2.6 6 2.6 2.3 0 4-.6 5.3-2 1.8-1.8 1.7-4 1.1-5.4-.4-.9-1.2-1.7-2.3-2.3zm-4 3.8c-1 .1-2-.4-2-1.3 0-.7.5-1.5 2.1-1.6h.5c.6 0 1.1.1 1.6.2-.2 2.3-1.3 2.7-2.2 2.7z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sentidocomunmx_/" target="_blank" rel="noopener noreferrer" aria-label="Visitar X (Twitter)">
                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@sentidocomunmx_?_r=1&amp;_t=ZS-9383i0PCei9" target="_blank" rel="noopener noreferrer" aria-label="Visitar X (Twitter)">
                            <svg width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5514228779" target="_blank" rel="noopener noreferrer" aria-label="Visitar X (Twitter)">
                            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="imagen-derecha">
                <img src="https://sentidocomunmx.com/wp-content/uploads/2026/01/flecha_iz_1.png" alt="Flecha derecha" loading="lazy">
            </div>
        </div>
    </section>
    
    <?php
    return ob_get_clean();
}
add_shortcode('footer_redes_sociales', 'footer_redes_sociales_shortcode');
function ultimas_entradas_shortcode() {

    $arg_ultimas = array( 
        'post_type'      => 'post',
        'orderby'        => 'date',
        'order'          => 'DESC',
        'category__not_in' => array(13, 1),
        'posts_per_page' => 6, 
    ); 

    $cat_posts_ultimas = get_posts($arg_ultimas);

    ob_start(); ?>

    <style>
        #ultimas-noticias-wid{
            padding: 1rem;
            position: relative;
        }
        #ultimas-noticias-wid .contenedor{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: sticky;
            top: 1rem;
        }
        #ultimas-noticias-wid .item-ultimas-noticias a{
            color: #fff;
            text-decoration: none;
        }
        #ultimas-noticias-wid .item-ultimas-noticias a span{
            font-size: 10px;
            display: block;
            line-height: 12px;
            margin-bottom: 5px;
        }
        #ultimas-noticias-wid .item-ultimas-noticias h3{
            font-size: 19px;
        }
        #ultimas-noticias-wid .item-ultimas-noticias{
            position: relative;
        }
        #ultimas-noticias-wid .item-ultimas-noticias:before{
            content:"";
            position:absolute;
            bottom:0;
            left:50%;
            width:0;
            height:2px;
            background:#f5141f;
            transition:.3s;
        }
        #ultimas-noticias-wid .item-ultimas-noticias:hover:before{
            width:100%;
            left:0;
        }
    </style>

    <div id="ultimas-noticias-wid">
        <div class="contenedor">

            <?php foreach ($cat_posts_ultimas as $ultimas): 
                $fecha = ucwords(date_i18n('F j, Y', strtotime($ultimas->post_date)));
            ?>

                <div class="item-ultimas-noticias">
                    <a href="<?php echo get_permalink($ultimas->ID); ?>">
                        <span><?php echo esc_html($fecha); ?></span>
                        <h3><?php echo esc_html($ultimas->post_title); ?></h3>
                    </a>
                </div>

            <?php endforeach; ?>

        </div>
    </div>

    <?php
    return ob_get_clean();
}

add_shortcode('ultimas_entradas', 'ultimas_entradas_shortcode');


// Filtros para evitar wpautop en shortcodes - SOLO UNA VEZ AL FINAL
remove_filter('the_content', 'wpautop');
add_filter('the_content', 'wpautop', 99);
add_filter('the_content', 'shortcode_unautop', 100);