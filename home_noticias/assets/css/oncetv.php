<?php
/*
Plugin Name:  Once Noticias
Plugin URI:   https://www.canalonce.mx
Description:  Generar shortcodes, api, ajax, además de sumar estilos y JS
Version:      1.0
Author:       Gabriel Vega Zárate
Author URI:   http://oncenoticias.digital/
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  oncenoticias.digital
Domain Path:  /languages
*/


include 'estilosyjs.php';
include 'ajax.php';
include 'shortcode.php';
include 'api.php';
include 'api2.php';
include 'api3.php';
include 'search.php';//agregado por Harrison Olvera el 17-11-2023
include 'shortcodes/funciong.php';
include 'shortcodes/funcionm.php';
include 'shortcodes/elecciones_2024.php';
include 'shortcodes/videos_elecciones.php';
include 'shortcodes/homemodules.php';
include 'shortcodes/homeshrt.php';
include 'shortcodes/featured_s.php';
include 'shortcodes/especiales_od.php';
include 'shortcodes/especiales_otv.php';
include 'shortcodes/frasesemana.php';
include 'shortcodes/recomendaciones_libros.php';
include 'shortcodes/homeshrt2.php';
include 'shortcodes/social_ctm.php';
include 'shortcodes/opinion.php';
include 'shortcodes/catehome.php';
include 'shortcodes/mananera.php';
include 'shortcodes/menuelecciones.php';
include 'shortcodes/newsletter.php';
include 'shortcodes/videolive.php';
include 'shortcodes/not_dig.php';
include 'shortcodes/iframesvid.php';
include 'shortcodes/fras.php';
include 'shortcodes/carousel_not.php';
include 'shortcodes/noticias_por_fecha.php';
include 'shortcodes/filtroselecciones.php';
include 'shortcodes/gridhome.php';
include 'shortcodes/videoplay.php';
include 'shortcodes/reformas.php';
include 'shortcodes/recomendaciones_libros_n.php';
include 'shortcodes/reco.php';
include 'shortcodes/puntoreferencia.php';
include 'shortcodes/proyectos.php';
include 'shortcodes/estados.php';
include 'shortcodes/oscares.php';
include 'shortcodes/noticias_mas_recientes.php';
include 'shortcodes/frases_autores.php';
include 'shortcodes/home_prin.php';
include 'shortcodes/destacados_especiales.php';
include 'shortcodes/internacional.php';
include 'shortcodes/car_agenda.php';
include 'shortcodes/funcionmm.php';
include 'shortcodes/cultura_deporte.php';
include 'shortcodes/car_dm.php';
include 'shortcodes/barra_opinion.php';
include 'shortcodes/home_prind.php';
include 'shortcodes/nota_compartida.php';
include 'shortcodes/elnoti.php';
include 'shortcodes/aldia.php';
include 'shortcodes/manane.php';
include 'shortcodes/home_prindi.php';
include 'shortcodes/bibliotecas_multiples.php';
include 'shortcodes/noticieros_e.php';
include 'shortcodes/bloque.php';
include 'shortcodes/aldias.php';
include 'shortcodes/elnotis.php';
include 'shortcodes/car_agendas.php';
include 'shortcodes/especiales_otvs.php';
include 'shortcodes/sabado_eleccion.php';
include 'shortcodes/seccion_one_sabado.php';
include 'shortcodes/seccion_two_sabado.php';
include 'shortcodes/seccion_principal_elecciones.php';
include 'shortcodes/seccion-no-texto.php';
include 'shortcodes/electoral_emergencia.php';
include 'shortcodes/presidenciales_elect.php';
include 'shortcodes/transicion_banners.php';
include 'shortcodes/banners_principales.php';
include 'shortcodes/gabinete.php';
include 'shortcodes/especial_notes_one.php';
include 'shortcodes/olimpicos_orgullo_mexicano.php';
include 'shortcodes/olimpicos_imagenes.php';
include 'shortcodes/olimpicos_imageness.php';
include 'shortcodes/olimpo_regresivo.php';
include 'shortcodes/gabinete_extendido.php';
include 'shortcodes/olimpicos_actividades.php';
include 'shortcodes/olimpicos_campechano.php';
include 'shortcodes/paralimpicos_actividades.php';
include 'shortcodes/paralimpicos_imagenes.php';
include 'shortcodes/parlimpicos_orgullo_mexicano.php';
include 'shortcodes/banners_claudia.php';
include 'shortcodes/claudia_noticias.php';
include 'shortcodes/claudia_noticias2.php';
include 'shortcodes/tension_mundial.php';
include 'shortcodes/ultimas_not.php';
include 'shortcodes/funcion_notas_home.php';
include 'shortcodes/reproductor_categoria.php';
include 'shortcodes/slider_entrevistas.php';
include 'shortcodes/videos_noticiarios.php';
include 'shortcodes/funciongj.php';
include 'shortcodes/multimedia_eua.php';
include 'shortcodes/multimedia_eua_videos.php';
include 'shortcodes/slider_eua.php';
include 'shortcodes/seccion_header.php';
include 'shortcodes/multimedia_gral.php';
include 'shortcodes/slider_fiestas.php';
include 'shortcodes/funcion_notas_alza_voz.php';
include 'shortcodes/lista_spotify.php';
include 'shortcodes/slider_redes_genero.php';
include 'shortcodes/botones_noticiarios.php';
include 'shortcodes/slider_entrevistas_voz.php';
include 'shortcodes/seccion_rockola.php';
include 'shortcodes/funcion_notas_entretenimiento.php';
include 'shortcodes/seccion_videos_entretenimiento.php';
include 'shortcodes/slider_pantalla_entretenimiento.php';
include 'shortcodes/seccion_foto_entretenimiento.php';
include 'shortcodes/oncelab_menu2.php';
include 'shortcodes/carrusel_youtube2.php';
include 'shortcodes/oncelab_acumulado.php';
include 'shortcodes/oncelab_youtube_especiales3.php';
include 'apis/presidencia.php';
include 'apis/tagspresidencia.php';
include 'apis/busquedapresidencia.php';
include 'apis/postporid.php';
include 'apis/notasprin.php';
include 'apis/notasoncelab.php';
include 'apis/oncelab_buscador.php';
include 'apis/notasinicio.php';
include 'apis/notasbase.php';
include 'apis/notasentretenimiento.php';
include 'apis/notasapp.php';
include 'apis/apientretenimiento.php';
include 'apis/notasvideos.php';
include 'apis/apioncelab.php';
include 'shortcodes/video_entretenimiento.php';
include 'shortcodes/reproductor_radio.php';
include 'shortcodes/seccion_radio_IPN.php';
include 'shortcodes/slider_foco.php';
include 'shortcodes/botones_sitios.php';
include 'shortcodes/carousel_youtube_n.php';
include 'shortcodes/videos_noticias.php';
include 'shortcodes/archivojson.php';
include 'shortcodes/inicio_opt.php';
include 'shortcodes/oncelabopt.php';
include 'shortcodes/oncelab_bloque.php';
include 'shortcodes/formulario_oncelab.php';
include 'apis/menuapp.php';
include 'shortcodes/list_videos_entretenimiento.php';
include 'shortcodes/list_videos_entretenimiento_cosas.php';
include 'shortcodes/grid_correos.php';
include 'shortcodes/reproductor_radio1.php';
include 'shortcodes/mundial2026.php';
include 'shortcodes/seccion_principal_noticias.php';
include 'shortcodes/seccion_lo_ultimo_entretenimiento.php';

/* Api */