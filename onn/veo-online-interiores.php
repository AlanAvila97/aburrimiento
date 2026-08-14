<?php 
    $title = ($_GET['episode'] === '1') ? 'Originales ONN' : 'ONN Retro';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>    
    <link rel="stylesheet" href="./assets/vendor/bootstrap/css/bootstrap.css">    
    <!-- Fontawesome -->
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/fontawesome.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/solid.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/regular.min.css">	
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/brands.min.css">	
    <!-- Shikwasa -->
    <link rel="stylesheet" href="./assets/vendor/shikwasa/css/style.css">	
    <!--  -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">      
    <link rel="stylesheet" href="./assets/css/footer.css">     
    <link rel="stylesheet" href="./assets/css/veo-online-interiores.css">     
</head>
<body class="bg-veo-online">
    <div id="wrapper" >
        <header class="header header-once">
            <div class="container-header">
                <div class="logo">
                    <a href="./" aria-label="Redirección a página principal">                    
                        <picture>
                            <source class="lazy img-fluid" srcset="./assets/img/logo_onn.svg" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/logo_onn.svg" 
                                type="image/png"> 
                            <img class="img-fluid lazy" src="./assets/img/logo_onn.svg" alt="Logo Once" width="139" height="45">
                        </picture>
                    </a>
                </div><!-- End div logo -->
                <div class="sections-nav ">
                    <a href="./aconpamiento.html" class="btn btn-bg-onn">
                        Madres, padres, docentes y cuidadores
                    </a>
                    <a href="./descargables.html" class="btn btn-bg-onn">
                        Descargable
                    </a>
                    <a href="./radio-musica.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                        <i class="fa fa-circle"></i>
                        Radio y música
                    </a>
                    <a href="./veo_online.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                        <i class="fa fa-circle"></i>
                        Veo ONNline
                    </a>
                </div><!-- End div seccion nav -->            
                <div class="content-menu-hamburguer">
                    <input type="checkbox" class="menu-btn" id="openSidebarMenu">
                    <div id="sidebarMenu">
                        <div class="container-menu scroll-menu">
                            <a href="./aconpamiento.html" class="btn btn-bg-onn">
                                Madres, padres, docentes y cuidadores
                            </a>
                            <a href="./descargables.html" class="btn btn-bg-onn">
                                Descargable
                            </a>
                            <a href="./radio-musica.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                                <i class="fa fa-circle"></i>
                                Radio y música
                            </a>
                            <a href="./veo_online.html" class="btn btn-bg-onn d-flex justify-content-center align-items-center gap-2">
                                <i class="fa fa-circle"></i>
                                Veo ONNline
                            </a>
                        </div>
                    </div>
                </div>
            </div><!-- End div container header -->
        </header>
        <main>
            <section class="section-content-center section-banner">
                <div class="container w-60 container-title-banner text-center">
                    <h1 class="text-light fw-light text-uppercase fs-1xl">
                        <?php  echo $title; ?>
                    </h1>
                </div>
            </section>            
            <section id="programation" class="section-grid-three-columns">
                <div class="container w-60 container-title-onn py-0 py-lg-4 text-center">
                    <h2 class="text-light font-lilitaone h1 mt-3 mb-5 fs-1xl">
                        Selecciona tu programa favorito
                    </h2>                    
                    <div class="container-grid-three-columns">
                        <!-- <div class="item">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2024/10/De-monstruos-y-miedos_1400x1400.png" alt="La Mesa">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/de-monstruos-y-miedos">
                                    <h2 class="title">De monstruos y miedos</h2>
                                    <p>
                                            ¿Te ha pasado que se te pone la piel chinita, o sientes un nudo en la 
                                            garganta? Si es así, ¡no te pierdas este documental!
                                    </p>
                                </a>
                            </div>
                        </div> -->
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2024/09/La-mesa_1400x1400.png" alt="La Mesa">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/la-mesa">
                                    <h2 class="title text-light">La Mesa</h2>
                                    <p class="text-light">
                                        Conoce un espacio en el que todas y todos participamos: ideas, opiniones y 
                                        propuestas en una conversación que importa.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/11/De-viaje-por-un-libro_1400x1400.png" alt="De viaje por un libro">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/de-viaje-por-un-libro">
                                    <h2 class="title text-light">De viaje por un libro</h2>
                                    <p class="text-light">
                                        Las historias de los libros nos hacen reflexionar acerca de las cosas que nos 
                                        pasan, comparte lo que piensas con nosotros.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/11/Los-Reportajes-ONN.png" alt="Los reportajes de ONN">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/los-reportajes-de-onn">
                                    <h2 class="title text-light">Los reportajes de ONN</h2>
                                    <p class="text-light">
                                        Con micrófono en mano y cámara lista, el equipo ONN tiene para ti reportajes de 
                                        distintos temas. 
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/11/Las-nuevas-cintas-de-Staff.png" alt="Las nuevas cintas de Staff">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/las-nuevas-cintas-de-staff">
                                    <h2 class="title text-light">Las nuevas cintas de Staff</h2>
                                    <p class="text-light">
                                        Staff está de regreso en la cocina para compartirte deliciosas y nutritivas 
                                        recetas, conócelas y come como campeón y campeona.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/11/Las-viejas-cintas-de-Staff.png" alt="Las viejas cintas de Staff">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/las-viejas-cintas-de-staff">
                                    <h2 class="title text-light">Las viejas cintas de Staff</h2>
                                    <p class="text-light">¡Las viejas cintas de Staff están llenas de recetas deliciosas!</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/09/La-Doctora-Noyolo-y-yo_1400x1400.png" alt="La Doctora Noyolo y yo">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/la-doctora-noyolo-y-yo">
                                    <h2 class="title text-light">La Doctora Noyolo y yo</h2>
                                    <p class="text-light">Acompaña a la doctora Noyolo en un viaje por las emociones y descubre algunos ejercicios que te ayudarán a sentirte mejor.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/04/Ahorrando-Ando_1400x1400.png" alt="Ahorrando Ando">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/ahorrando-ando">
                                    <h2 class="title text-light">Ahorrando Ando</h2>
                                    <p class="text-light">
                                        Isa y Jonás son los protagonistas de este programa, juntos descubren datos 
                                        interesantes acerca del dinero, de ahorrar y de ser responsables al gastarlo.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/04/Ek_1400x1400.png" alt="EK">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/ek">
                                    <h2 class="title text-light">EK</h2>
                                    <p class="text-light">Ek es un simpático perro negro, que tiene un gato al que llama Filete y que quiere mucho.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2023/02/galeria_ONN.png" alt="Galería Once niñas y niños">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/galeria-onn">
                                    <h2 class="title text-light">Galería ONN</h2>
                                    <p class="text-light">
                                        Observa las obras de arte que son parte de la Galería de #OnceNiñasyNiños y 
                                        descubre las texturas, colores y técnicas de dibujo que los artistas usaron en 
                                        cada una de sus creaciones.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/12/Boton_INTELIGE_1400x1400_.png" alt="Intelige">
                            <div class="data">
                                <a href="https://canalonce.mx/programas/intelige">
                                    <h2 class="title text-light">Intelige</h2>
                                    <p class="text-light">
                                        Programa de concurso de cultura general, ciencia, ingeniería, tecnología, 
                                        arte y matemáticas.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m-verdadero-falso.jpg" alt='Verdadero o falso' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/verdadero-o-falso">
                                    <h2 class="title text-light">Verdadero o falso</h2>
                                    <p class="text-light">
                                        Verfal es un dragón muy curioso que ha vivido muchos años y gracias a su 
                                        conocimiento del mundo puede descifrar grandes enigmas.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_a-mover-el-bote.jpg" alt='Concierto. A mover el bote en casa' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/concierto-a-mover-el-bote-en-casa">
                                    <h2 class="title text-light">Concierto. A mover el bote en casa</h2>
                                    <p class="text-light">
                                        El equipo de Once Niñas y Niños te invita a disfrutar de un recorrido por todos 
                                        sus éxitos musicales y momentos especiales en este divertido concierto.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_como-con.mo_.jpg" alt='¿Cómo? con Mo' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/cmo-con-mo">
                                    <h2 class="title text-light">¿Cómo? con Mo</h2>
                                    <p class="text-light">
                                        Mo es curiosa y quiere conocer cómo funcionan y se hacen las cosas, su comida 
                                        favorita, juguetes y ropa, ¡acompáñala!
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_timora.jpg" alt='Timora y Sus Extrañas Historias' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/timora-y-sus-extraas-historias">
                                    <h2 class="title text-light">Timora y Sus Extrañas Historias</h2>
                                    <p class="text-light">
                                        Monstruos de lejanas tierras, gatos misteriosos y escobas con poderes mágicos 
                                        son algunos de los personajes que descubrirás cuando Timora te lea sus extrañas 
                                        historias. ¿Te atreves a escucharlas?
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_la-palabra-de-memo.jpg" alt='La palabra de Memo' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/la-palabra-de-memo">
                                    <h2 class="title text-light">La palabra de Memo</h2>
                                    <p class="text-light">Descubre el significado de algunas palabras que usamos todos los días. ¡Te sorprenderás!</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_secretos-culinarios-de-staff.jpg" alt='Secretos culinarios de Staff' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/secretos-culinarios-de-staff">
                                    <h2 class="title text-light">Secretos culinarios de Staff</h2>
                                    <p class="text-light">Acompaña a Staff a conseguir los ingredientes que necesita para preparar sus platillos favoritos.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_que-pasaria-si.jpg" alt='¿Qué pasaría si…?' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/qu-pasara-si">
                                    <h2 class="title text-light">¿Qué pasaría si…?</h2>
                                    <p class="text-light">El equipo de Once Niñas y Niños juegan a imaginar qué pasaría si algo fuera de lo común ocurriera, ¡diviértete con su ingenio!</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_preguntas-del-planeta.jpg" alt='Preguntas del planeta con Lucy' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/preguntas-del-planeta-con-lucy">
                                    <h2 class="title text-light">Preguntas del planeta con Lucy</h2>
                                    <p class="text-light">Lucy y Camila harán todo por responder tus dudas e inquietudes de la naturaleza y el medio ambiente.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_codigo-l.jpg" alt='Código – L' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/cdigo-l">
                                    <h2 class="title text-light">Código – L</h2>
                                    <p class="text-light">Déjate sorprender por la tecnología y conoce los inventos más interesantes que han cambiado al mundo.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_consulta-con-el-doctor-pelayo.jpg" alt='Consulta con el doctor Pelayo' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/consulta-con-el-doctor-pelayo">
                                    <h2 class="title text-light">Consulta con el doctor Pelayo</h2>
                                    <p class="text-light">El Dr. Pelayo está listo para resolver las dudas de sus pacientes y compartir datos asombrosos sobre salud y el cuerpo humano.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_libros-en-accion.jpg" alt='Libros En Acción' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/libros-en-accion">
                                    <h2 class="title text-light">Libros En Acci&oacute;n</h2>
                                    <p class="text-light">Lo m&aacute;s incre&iacute;ble de las historias, es que se encuentran en todas partes y las que se capturan en libros son las
                                            mejores.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_un-dia-en-on.jpg" alt='Un Día en Once Niños' width='275' height='275' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/un-dia-en-on">
                                    <h2 class="title text-light">Un D&iacute;a en... ON</h2>
                                    <p class="text-light">En Once Ni&ntilde;os pasa de todo: desde camar grafos que van al espacio hasta retretes robots que se apoderan del estudio.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_canciones-onn.jpg" alt='Musicales Once Niños' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/canciones-once-ninas-y-ninos">
                                    <h2 class="title text-light">Canciones Once Niños</h2>
                                    <p class="text-light">¡Baila y canta con el equipo de Once Niños!.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_abuelos.jpg" alt='Abuelos' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/abuelos">
                                    <h2 class="title text-light">Abuelos</h2>
                                    <p class="text-light">Niñas y niños nos cuentan todo sobre sus abuelos. El mejor día que han pasado juntos, sus recuerdos más entrañables y qué los hace
                                            especiales.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_dxt.jpg" alt='DXT' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/dxt">
                                    <h2 class="title text-light">DXT</h2>
                                    <p class="text-light">A los niños de éstas cápsulas les encanta correr, saltar y estirar cada parte de su cuerpo. ¡Descubre qué es lo que más les gusta sobre
                                            su deporte favorito!</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_las-piezas-del-rompecabezas.jpg" alt='Las Piezas del Rompecabezas' width='275'
                                    height='275' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/las-piezas-del-rompecabezas">
                                    <h2 class="title text-light">Las Piezas del Rompecabezas</h2>
                                    <p class="text-light">Yola sueña con tener un hermanito para vivir grandes aventuras, pero cuando nace Ro nada es como imaginaba.</p>
                                </a>
                            </div>
                        </div>
                        <div class="items-grid">
                            <img src="https://onceninasyninos.tv/wp-content/uploads/2022/01/m_kipatla.jpg" alt='Kipatla' width='288' height='288' />
                            <div class="data">
                                <a href="https://canalonce.mx/programas/kipatla">
                                    <h2 class="title text-light">Kipatla</h2>
                                    <p class="text-light">En este pueblo, todos son como quieren ser y eso es lo que hace único a este lugar que tal vez te resulte familiar.</p>
                                </a>
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container container-footer gap-3">
                <div class="footer-navigation-web d-flex justify-content-center align-items-center gap-4">
                    <a type="button" class="text-light">
                        <picture class="w-100 h-100 d-block">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/logo_footer_sintonizanos.png" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/logo_footer_sintonizanos.png" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="./assets/img/logo_footer_sintonizanos.png" alt="Logo plataforma" width="139" height="45">
                        </picture>
                    </a>
                    <a type="button" class=" text-light">
                        <picture class="w-100 h-100 d-block">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-CANAL-ONCE-2210X960-300x130_1.png" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-CANAL-ONCE-2210X960-300x130_1.png" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="./assets/img/LOGO-CANAL-ONCE-2210X960-300x130_1.png" alt="Logo plataforma" width="139" height="45">
                        </picture>
                    </a>
                    <a type="button" class=" text-light">
                        <picture class="w-100 h-100 d-block">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-IPN-182_1.png" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="./assets/img/LOGO-IPN-182_1.png" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="./assets/img/LOGO-IPN-182_1.png" alt="Logo plataforma" width="139" height="45">
                        </picture>
                    </a>
                </div>
                <div class="footer-info d-flex justify-content-center align-items-center gap-4">
                    <a type="button" class="btn btn-lg text-light text-decoration-underline">
                        Once Acerca de TyC
                    </a>
                </div>
            </div>
        </footer>
    </div>
    <script src="./assets/vendor/bootstrap/js/popper.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!--  -->
</body>
</html>