<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transmisión en Vivo - Once Noticias</title>
    <link rel="icon" type="image/png" sizes="16x16" href="https://oncenoticias.digital/iconos/logotran16.PNG">
    <link rel="icon" type="image/png" sizes="32x32" href="https://oncenoticias.digital/iconos/logotran32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="https://oncenoticias.digital/iconos/logotran64.png">
    <link rel="icon" type="image/png" sizes="256x256" href="https://oncenoticias.digital/iconos/logotran256.png">
    <link rel="icon" type="image/png" sizes="512x512" href="https://oncenoticias.digital/iconos/logotran512.png">
    <link rel="shortcut icon" type="image/x-icon" href="https://oncenoticias.digital/iconos/icono_app.png">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="./assets/vendor/bootstrap/css/bootstrap.css">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/fontawesome.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/solid.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/regular.min.css">
    <link rel="stylesheet" href="./assets/vendor/fontawesome/css/brands.min.css">
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/header.css">
    <link rel="stylesheet" href="./assets/css/footer.css">
    <link rel="stylesheet" href="./assets/css/live.css">
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <?php require_once("./partials/header.php");?>
            <main class="content">
                <!-- Sección principal de transmisión en vivo -->
                <section class="section-live-streaming px-4 px-md-5 py-3 py-md-4">
                    <article class="container-fluid">
                        <div class="row g-3">
                            <!-- Reproductor Principal -->
                            <div class="col-lg-8">
                                <div class="video-player-wrapper">
                                    <div class="video-container position-relative">
                                        <!-- Reproductor de video -->
                                        <video 
                                            id="liveVideo" 
                                            class="video-player w-100" 
                                            controls 
                                            autoplay 
                                            poster="https://dummyimage.com/1200x675/000/fff">
                                            <source src="https://example.com/stream.m3u8" type="application/x-mpegURL">
                                            Tu navegador no soporta video HTML5.
                                        </video>
                                        
                                        <!-- Badge EN VIVO -->
                                        <div class="live-badge position-absolute top-0 start-0 m-3">
                                            <span class="badge bg-danger d-flex align-items-center gap-2">
                                                <span class="live-indicator"></span>
                                                EN VIVO
                                            </span>
                                        </div>

                                        <!-- Indicador de espectadores -->
                                        <div class="viewers-count position-absolute top-0 end-0 m-3">
                                            <div class="d-flex align-items-center gap-2 bg-dark bg-opacity-75 px-3 py-2 rounded">
                                                <i class="fas fa-eye text-danger"></i>
                                                <span class="text-white fw-bold" id="viewerCount">12,547</span>
                                            </div>
                                        </div>

                                        <!-- Controles adicionales -->
                                        <div class="video-controls position-absolute bottom-0 end-0 m-3 d-flex gap-2">
                                            <button class="btn btn-sm btn-light" id="btnFullscreen" title="Pantalla completa">
                                                <i class="fas fa-expand"></i>
                                            </button>
                                            <button class="btn btn-sm btn-light" id="btnSettings" title="Configuración">
                                                <i class="fas fa-cog"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Información de la transmisión -->
                                    <div class="live-info p-3 border-top">
                                        <div class="row align-items-start">
                                            <div class="col-auto">
                                                <div class="live-avatar me-3">
                                                    <img src="https://dummyimage.com/100x100/ccc/fff" alt="Avatar del canal" class="rounded-circle">
                                                </div>
                                            </div>
                                            <div class="col flex-grow-1">
                                                <h2 class="h5 mb-1">Mañanera del Pueblo - En Vivo</h2>
                                                <p class="text-muted mb-2 small">
                                                    <i class="fas fa-calendar-alt"></i> Hoy a las 9:00 AM
                                                </p>
                                                <p class="mb-3">
                                                    Transmisión en vivo de la conferencia matutina con los temas más relevantes de actualidad.
                                                    Participación en tiempo real con preguntas y comentarios de la audiencia.
                                                </p>
                                                <div class="d-flex gap-2 flex-wrap">
                                                    <button class="btn btn-sm btn-danger" id="btnSubscribe">
                                                        <i class="fas fa-bell me-1"></i> Seguir
                                                    </button>
                                                    <button class="btn btn-sm btn-outline-secondary" id="btnShare">
                                                        <i class="fas fa-share-alt me-1"></i> Compartir
                                                    </button>
                                                    <button class="btn btn-sm btn-outline-secondary" id="btnReport">
                                                        <i class="fas fa-flag me-1"></i> Reportar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Descripción expandida -->
                                    <div class="live-description p-3 border-top bg-light">
                                        <h4 class="h6 mb-2">Descripción</h4>
                                        <p class="small mb-2">
                                            En esta transmisión en vivo, discutiremos los puntos más importantes de la actualidad nacional e internacional. 
                                            Contaremos con expertos en diversos temas para profundizar en cada uno de los asuntos tratados.
                                        </p>
                                        <button class="btn btn-sm btn-link p-0" id="btnExpandDescription">
                                            Ver más <i class="fas fa-chevron-down ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Sidebar derecho: Chat y más -->
                            <div class="col-lg-4">
                                <!-- Chat en vivo -->
                                <div class="live-chat-wrapper d-flex flex-column h-100">
                                    <div class="chat-header bg-dark text-white p-3 rounded-top">
                                        <h4 class="mb-0 d-flex align-items-center gap-2">
                                            <i class="fas fa-comments"></i>
                                            Chat en Vivo
                                        </h4>
                                    </div>

                                    <div class="chat-messages flex-grow-1 p-3 bg-white overflow-y-auto" id="chatMessages">
                                        <div class="chat-message mb-3">
                                            <div class="d-flex gap-2">
                                                <img src="https://dummyimage.com/32x32/ccc/fff" alt="Avatar" class="rounded-circle" width="32" height="32">
                                                <div class="flex-grow-1">
                                                    <div class="d-flex justify-content-between align-items-baseline mb-1">
                                                        <strong class="small">Juan Pérez</strong>
                                                        <span class="text-muted small">9:15 AM</span>
                                                    </div>
                                                    <p class="mb-0 small">¡Excelente transmisión! Muy informativo.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="chat-message mb-3">
                                            <div class="d-flex gap-2">
                                                <img src="https://dummyimage.com/32x32/ccc/fff" alt="Avatar" class="rounded-circle" width="32" height="32">
                                                <div class="flex-grow-1">
                                                    <div class="d-flex justify-content-between align-items-baseline mb-1">
                                                        <strong class="small">María García</strong>
                                                        <span class="text-muted small">9:14 AM</span>
                                                    </div>
                                                    <p class="mb-0 small">Me gustaría saber más sobre el tema de economía.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="chat-message mb-3">
                                            <div class="d-flex gap-2">
                                                <img src="https://dummyimage.com/32x32/ccc/fff" alt="Avatar" class="rounded-circle" width="32" height="32">
                                                <div class="flex-grow-1">
                                                    <div class="d-flex justify-content-between align-items-baseline mb-1">
                                                        <strong class="small text-danger">
                                                            <i class="fas fa-check-circle"></i> Moderador
                                                        </strong>
                                                        <span class="text-muted small">9:13 AM</span>
                                                    </div>
                                                    <p class="mb-0 small">Bienvenidos a la transmisión en vivo. Gracias por acompañarnos.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="chat-input p-3 border-top bg-light">
                                        <div class="input-group">
                                            <input 
                                                type="text" 
                                                class="form-control form-control-sm" 
                                                placeholder="Escribe tu mensaje..."
                                                id="chatInput">
                                            <button class="btn btn-danger btn-sm" type="button" id="btnSendChat">
                                                <i class="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                        <small class="text-muted d-block mt-2">
                                            Sé respetuoso. Lee nuestras normas comunitarias.
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                <!-- Sección de transmisiones relacionadas -->
                <section class="section-related-streams px-4 px-md-5 py-3 py-md-4 border-top">
                    <article class="container-fluid">
                        <div class="title-notes text-center mb-4">
                            <h2 class="h3 text-uppercase fw-bold">
                                Transmisiones Recomendadas
                            </h2>
                        </div>

                        <div class="row row-gap-3">
                            <div class="col-md-6 col-lg-3">
                                <div class="stream-card card h-100 border-0 shadow-sm">
                                    <div class="stream-thumbnail position-relative">
                                        <img src="https://dummyimage.com/400x225/ccc/fff" class="card-img-top" alt="Stream thumbnail">
                                        <div class="live-badge-small position-absolute top-0 start-0 m-2">
                                            <span class="badge bg-danger d-flex align-items-center gap-1">
                                                <span class="live-indicator-small"></span>
                                                EN VIVO
                                            </span>
                                        </div>
                                        <div class="stream-viewers position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-dark">
                                                <i class="fas fa-eye me-1"></i>8,234
                                            </span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title small mb-2">Entrevista Especial: Política Nacional</h5>
                                        <p class="card-text small text-muted mb-3">Análisis profundo de las últimas decisiones políticas.</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <img src="https://dummyimage.com/40x40/ccc/fff" alt="Canal" class="rounded-circle" width="40" height="40">
                                            <div class="small">
                                                <strong>Canal Principal</strong><br>
                                                <span class="text-muted">234K seguidores</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="stream-card card h-100 border-0 shadow-sm">
                                    <div class="stream-thumbnail position-relative">
                                        <img src="https://dummyimage.com/400x225/ccc/fff" class="card-img-top" alt="Stream thumbnail">
                                        <div class="live-badge-small position-absolute top-0 start-0 m-2">
                                            <span class="badge bg-danger d-flex align-items-center gap-1">
                                                <span class="live-indicator-small"></span>
                                                EN VIVO
                                            </span>
                                        </div>
                                        <div class="stream-viewers position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-dark">
                                                <i class="fas fa-eye me-1"></i>5,678
                                            </span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title small mb-2">Reportaje: Situación Económica</h5>
                                        <p class="card-text small text-muted mb-3">Investigación sobre el estado actual de la economía.</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <img src="https://dummyimage.com/40x40/ccc/fff" alt="Canal" class="rounded-circle" width="40" height="40">
                                            <div class="small">
                                                <strong>Reportajes</strong><br>
                                                <span class="text-muted">156K seguidores</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="stream-card card h-100 border-0 shadow-sm">
                                    <div class="stream-thumbnail position-relative">
                                        <img src="https://dummyimage.com/400x225/ccc/fff" class="card-img-top" alt="Stream thumbnail">
                                        <div class="live-badge-small position-absolute top-0 start-0 m-2">
                                            <span class="badge bg-danger d-flex align-items-center gap-1">
                                                <span class="live-indicator-small"></span>
                                                EN VIVO
                                            </span>
                                        </div>
                                        <div class="stream-viewers position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-dark">
                                                <i class="fas fa-eye me-1"></i>3,456
                                            </span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title small mb-2">Debate: Temas Sociales</h5>
                                        <p class="card-text small text-muted mb-3">Mesa de debate sobre problemas sociales actuales.</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <img src="https://dummyimage.com/40x40/ccc/fff" alt="Canal" class="rounded-circle" width="40" height="40">
                                            <div class="small">
                                                <strong>Debates</strong><br>
                                                <span class="text-muted">98K seguidores</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <div class="stream-card card h-100 border-0 shadow-sm">
                                    <div class="stream-thumbnail position-relative">
                                        <img src="https://dummyimage.com/400x225/ccc/fff" class="card-img-top" alt="Stream thumbnail">
                                        <div class="live-badge-small position-absolute top-0 start-0 m-2">
                                            <span class="badge bg-danger d-flex align-items-center gap-1">
                                                <span class="live-indicator-small"></span>
                                                EN VIVO
                                            </span>
                                        </div>
                                        <div class="stream-viewers position-absolute bottom-0 start-0 m-2">
                                            <span class="badge bg-dark">
                                                <i class="fas fa-eye me-1"></i>7,891
                                            </span>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title small mb-2">Especial: Cultura y Entretenimiento</h5>
                                        <p class="card-text small text-muted mb-3">Programa dedicado a temas de cultura y entretenimiento.</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <img src="https://dummyimage.com/40x40/ccc/fff" alt="Canal" class="rounded-circle" width="40" height="40">
                                            <div class="small">
                                                <strong>Cultura</strong><br>
                                                <span class="text-muted">142K seguidores</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    <!-- JS -->
    <script src="assets/js/live.js"></script>
</body>
</html>
