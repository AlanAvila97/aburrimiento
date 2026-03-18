const CONTAINER_REPRODUCTORES = document.querySelector('.container-reproductores');
const URL_MINIATURAS = 'https://canalonce.mx/REST/data/miniaturas/';
let players = {};
let timers = {};
let activePlayerId = null;
class CustomDurationMarquee {
    constructor(element) {
        this.element = element;
        this.speed = 145;
        this.init();
    }
    init() {
        this.calculateAndSetDuration();
        const resizeObserver = new ResizeObserver(() => {
            this.calculateAndSetDuration();
        });
        resizeObserver.observe(this.element);
        resizeObserver.observe(this.element.parentElement);
    }
    
    calculateAndSetDuration() {
        const textWidth = this.element.scrollWidth;
        const container = this.element.closest('.text-audio') || this.element.parentElement;
        const containerWidth = container.clientWidth;
        if (textWidth <= containerWidth) {
            this.element.style.animation = 'none';
            this.element.style.transform = 'translateX(0)';
            return;
        }
        const totalDistance = textWidth + (containerWidth / 2);
        const duration = totalDistance / this.speed;
        console.log(duration)
        this.element.style.animation = `slideLeft ${duration}s linear 3s infinite`;
        this.ensureKeyframes(duration);
    }
    
    ensureKeyframes(duration) {
        const styleId = 'dynamic-marquee-keyframes';
        let styleElement = document.getElementById(styleId);
        
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = styleId;
            document.head.appendChild(styleElement);
        }
    }
}
async function fetchData(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error);
    }
}
const parserVideoId = (url) => {
    if (!url) return [null, null];
        return url.split('https://youtu.be/');
}
async function parseoDataEpisodes(slug) {
    try {
        let data = await fetchData(`https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodes/desktop/${slug}.json`);
        if (!data || data.length === 0) {
            console.error(`No hay datos para ${slug}`);
            return null;
        }
        let last_data = data.pop();
        if (!last_data.vda) {
            console.error(`No hay URL de video para ${slug}`);
            return null;
        }
        let id_video = parserVideoId(last_data.vda);
        return id_video[1];
    } catch (error) {
            console.error(`Error en parseoDataEpisodes para ${slug}:`, error);
        return null;
    }
}
async function initialitationReproductorPGM() {
    let html = '';
    const data_pgm_slugc = [
        { 'slug': 'dialogos-en-confianza', 'bg': '#000068', 'order': 1 },
        { 'slug': 'aprender-a-envejecer', 'bg': '#2d5b54', 'order': 2 },
        { 'slug': 'la-verdrag', 'bg': '#005d2b', 'order': 3 },
    ]
    let audio_data = [];
    let channels = await fetchData('https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json');
    if (!channels) {
        console.error('No se pudieron cargar los canales');
        return;
    }
    const slugMap = new Map(data_pgm_slugc.map(item => [item.slug, {
        bg: item.bg,
        order: item.order
    }]));
    const data_pgm = channels
        .filter(itemExterno => slugMap.has(itemExterno.slugc))
        .map(item => {
            const datosLocal = slugMap.get(item.slugc);
            return {
                ...item,
                bgAudio: datosLocal.bg,
                orderAudio: datosLocal.order
            };
        });
    const data_pgm_actualizado = await Promise.all( 
        data_pgm.map(async (element) => {                
            try {
                let episodes = await parseoDataEpisodes(element.slugc);
                return {
                    ...element,
                    vda: episodes
                };
            } catch (error) {
                console.error(`Error procesando ${element.slugc}:`, error);
                return {
                    ...element,
                    vda: null, 
                    error: true
                };
            }
        })
    );
    data_pgm_actualizado.forEach(element => {
        audio_data.push({                                    
            'id': element.vda,
            'slugc': element.slugc,
            'title': element.name,
            'desc': element.description,
            'link': element.vda,
            'imageCH': element.imageCH,
            'imagenw': element.imageWCH,
            'bg': element.bgAudio,
            'link_spotify': element.spotify,
            'link_pgm': '#',
            'order_audio': element.orderAudio
        })
    });
    audio_data.sort((a, b) => a.order_audio - b.order_audio);
    audio_data.forEach((element, index) => {
        // 
        if (!element.id) {
            console.warn(`Saltando ${element.slugc} - no hay video ID`);
            return;
        }
        
        let id_video = element.id;
        let img_webp = element.imagenw || element.imageCH;
        let bg = element.bg;
        let link_audio = element.link;
        let link_spotify = element.link_spotify;
        let link_pgm = element.link_pgm;

        html += `<div id="${id_video}" class="audio-container" style="background-color: ${bg};" data-id="${id_video}" data-audio="${link_audio}">
                    <div class="content-info-audio">
                        <div class="logo-audio">
                            <picture>
                                <source class="lazy img-fluid" srcset="${URL_MINIATURAS+img_webp}" type="image/webp">
                                <source class="lazy img-fluid" srcset="${URL_MINIATURAS+element.imageCH}" type="image/png"> 
                                <img class="img-fluid lazy" src="${URL_MINIATURAS+img_webp}" alt="Logo once+" width="139" height="30">
                            </picture>
                        </div>
                        <div class="container-text-audio">                        
                            <div class="text-audio">
                                <div class="info-audio">
                                    <h2>${element.title || 'title'}</h2>
                                </div>
                                <div class="subtitle-audio">
                                    <p>${element.desc}</p>
                                </div> 
                            </div>                            
                        </div>
                        <div class="controls-audio">
                            <div class="timeline">
                                <button class="rest-time time-control">
                                    <picture>
                                        <source class="lazy img-fluid" srcset="./assets/images/rest_ten.png" type="image/webp">
                                        <source class="lazy img-fluid" srcset="./assets/images/rest_ten.png" type="image/png"> 
                                        <img class="img-fluid lazy" src="./assets/images/rest_ten.png" alt="Logo once+" width="139" height="30">
                                    </picture>
                                </button>
                                <div class="progressBar">
                                    <div></div>
                                </div>
                                <button class="add-time time-control">
                                    <picture>
                                        <source class="lazy img-fluid" srcset="./assets/images/add_ten.png" type="image/webp">
                                        <source class="lazy img-fluid" srcset="./assets/images/add_ten.png" type="image/png"> 
                                        <img class="img-fluid lazy" src="./assets/images/add_ten.png" alt="Logo once+" width="139" height="30">
                                    </picture>
                                </button>
                            </div>
                            <div class="timeDisplay">
                                <span class="duration"></span>                                        
                            </div>
                            <div class="actions">
                                <div class="content-options">
                                    <button class="options-btn">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </button>
                                </div>
                                <button class="play-btn" data-status="true">
                                    <span class="fa-stack fa-1x">
                                        <i class="fa-solid fa-circle fa-stack-2x"></i>
                                        <i class="action_icon_audio fa-solid fa-play fa-stack-1x "></i>
                                    </span>
                                </button>
                            </div>
                            <div class="hidden-player" id="player-${index}"></div>                            
                        </div>
                        <div class="waveWrapper waveAnimation" style="--bg_color: ${bg};">
                            <button class="options-btn">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                            <div class="container-redirects">
                                <a href="${link_spotify}" target="_blank">
                                    <i class="fa-brands fa-spotify"></i>
                                    <h3>Disfruta del episodio en Spotify</h3>
                                </a>
                                <a href="${link_pgm}" target="_blank">
                                    <img class="img-responsive" src="https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/docs/octubre/android-icon-192x192.png" alt="">
                                    <h3>Disfruta del contenido visual</h3>
                                </a>
                            </div>
                            <div class="waveWrapperInner bgBottom" >
                                <div class="wave waveBottom" style="background-image: url('./assets/images/wave-bot.png')"></div>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
    CONTAINER_REPRODUCTORES.innerHTML = html;
    let text_animation_desc = CONTAINER_REPRODUCTORES.querySelectorAll('.subtitle-audio');    
    text_animation_desc.forEach(element => {
        new CustomDurationMarquee(element);
    });
    // 
    if (typeof YT !== 'undefined' && YT.Player) {
        initializePlayers();
    } 
}
function initializePlayers() {
    let audioContainers = document.querySelectorAll('.audio-container');

    audioContainers.forEach(function(container, index) {
        let videoId = container.dataset.id;
        let playerId = 'player-' + index;
        let playerElement = document.getElementById(playerId);
        if (!playerElement) {
            return;
        }
        
        if (window.players && window.players[playerId]) {
            console.log('Reproductor ya existe:', playerId);
            return;
        }
        
        if (!window.players) window.players = {};
        
        if (typeof YT === 'undefined' || !YT.Player) {
            console.error('YouTube API no está cargada');
            return;
        }
        try {
            window.players[playerId] = new YT.Player(playerId, {
                height: '1',
                width: '1',
                videoId: videoId,
                playerVars: {
                    'autoplay': 0,
                    'controls': 0,
                    'disablekb': 1,
                    'fs': 0,
                    'iv_load_policy': 3,
                    'modestbranding': 1,
                    'showinfo': 0,
                    'rel': 0
                },
                events: {
                    'onReady': function(event) { 
                        onPlayerReady(event, playerId, container); 
                    },
                    'onStateChange': function(event) { 
                        onPlayerStateChange(event, playerId); 
                    },
                    'onError': function(error) {
                        console.error('Error en reproductor', playerId, ':', error);
                    }
                }
            });
        } catch (error) {
            console.error('Error creando reproductor', playerId, ':', error);
        }
    });
}
function onYouTubePlayerAPIReady() {
    if (document.querySelectorAll('.audio-container').length > 0) {
        initializePlayers();
    }
}
function onPlayerReady(event, playerId, container) {
    let playButton = container.querySelector(".play-btn");
    let progressBar = container.querySelector(".progressBar");
    let rest_progress = container.querySelector('.rest-time');
    let add_progress = container.querySelector('.add-time');
    let options_audio = container.querySelectorAll('.options-btn');
    if (!playButton ) {
        console.error('Elementos no encontrados en:', playerId);
        return;
    }
    playButton.addEventListener("click", function(e) {
        const button = e.target.closest('button');
        if(button ){
            const status = button.dataset.status === 'true';
            console.log(status)
            if(status){                
                if (activePlayerId && activePlayerId !== playerId) {
                    stopPlayer(activePlayerId);
                }    
                playAudio(e, playerId, container)
            }else{
                pausePlayer(e, playerId)
            }
            button.dataset.status = (!status).toString();
        }                    
    });
    add_progress.addEventListener('click', function (e) {
        const button = e.target.closest('button');
        if(button ){
            if (activePlayerId && activePlayerId !== playerId) {
                stopPlayer(activePlayerId);
            }  
            actionBtnTimeAudio(playerId, container, 'Add');
        }
    });
    rest_progress.addEventListener('click', function (e) {
        const button = e.target.closest('button');
        if(button ){
            if (activePlayerId && activePlayerId !== playerId) {
                stopPlayer(activePlayerId);
            }  
            actionBtnTimeAudio(playerId, container, 'Rest');
        }
    });
    progressBar.addEventListener('click', function(e) {
        const player = window.players[playerId];
        if (player && player.getDuration) {
            if (activePlayerId && activePlayerId !== playerId) {
                stopPlayer(activePlayerId);
            }
            if (activePlayerId !== playerId) {
                const container = document.getElementById(playerId).closest('.audio-container');
                const playButton = container.querySelector(".play-btn");
                actualizarBotones(playButton, 1);
                activePlayerId = playerId;
            }
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percent = (clickX / rect.width) * 100;
            const newTime = (percent / 100) * player.getDuration();
            player.seekTo(newTime, true);
            updateProgressBarVisual(player, container);
            if (player.getPlayerState && player.getPlayerState() !== YT.PlayerState.PLAYING) {
                player.playVideo();
            }
        }
    });
    options_audio.forEach(element => {            
        element.addEventListener('click', (e) => openOptionsAudio(e, container));
    });
    updateTimeDisplay(window.players[playerId], container.querySelector('.duration'), true);     
}
function setAttrButtons (element, status, icon_attr) {
    let icon = element.querySelector('.action_icon_audio');                    
        icon.setAttribute('class', icon_attr);
        element.dataset.status = status;
}
function actualizarBotones(button, type = 0){
    const buttons_icons = CONTAINER_REPRODUCTORES.querySelectorAll("button.play-btn");
    buttons_icons.forEach(element => {
        setAttrButtons(element, (true), 'action_icon_audio fa-solid fa-play fa-stack-1x');
    });
    if(type === 1) {
        setAttrButtons(button, (false), 'action_icon_audio fa-solid fa-pause fa-stack-1x ');
    }
}
//
function playAudio(e, playerId, container) {
    const player = window.players[playerId];
    // 
    if(player.getCurrentTime() === 0){
        container.querySelector('.duration').textContent = '00:00';
    }
    player.playVideo();        
    actualizarBotones(e.currentTarget, 1);
}
function pausePlayer(e, playerId) {
    const player = window.players[playerId];
    if (player) {
        player.pauseVideo();    
        actualizarBotones(e.currentTarget);

        if (activePlayerId === playerId) {
            activePlayerId = null;
        }
    }
}
// 
function stopPlayer(playerId) {
    const player = window.players[playerId];
    if (player) {        
        player.pauseVideo();
        if (activePlayerId === playerId) {
            activePlayerId = null;
        }
    }
}
function actionBtnTimeAudio (playerId, container, type){
    const player = window.players[playerId];
    if (!player || !player.getDuration()) return;

    let newTime = (type === 'Add') ? player.getCurrentTime() + 10 : player.getCurrentTime() - 10;
    if (newTime < 0) {
        newTime = 0;
    }else if(newTime > player.getDuration()) {
        newTime = player.getDuration();
    }
    player.seekTo(newTime, true)
    updateProgressBarVisual(player, container);
}
const openOptionsAudio = (e, container) => {    
    let button = e.target.closest('button');    
    let bg_wave = container.querySelector('.waveWrapper')    
    let btn_options = container.querySelectorAll('.options-btn');
    if(button){        
        btn_options.forEach(element => {
            element.classList.toggle('active')
        });
        bg_wave.classList.toggle('active');
    }
}
const updateProgressBarVisual = (player, container) => {
    const progressBarFill = container.querySelector('.progressBar div');
    if (player.getDuration() && progressBarFill) {
        const percent = (player.getCurrentTime() / player.getDuration()) * 100;        
        progressBarFill.style.width = percent + '%';
    }
};
function progress(percent, element) {
    percent = Math.max(0, Math.min(100, percent));
    const innerBar = element.querySelector('div');
    if (innerBar) {
        innerBar.style.width = percent + '%';
    } else {
        console.error('No se encontró la barra de progreso interna');
    }
}
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    let mm = minutes.toString().padStart(2, '0');
    let ss = remainingSeconds.toString().padStart(2, '0');
    return mm + ':' + ss;
}
function updateTimeDisplay(player, timeDisplayElement, initial = false) {
    if (player && player.getDuration) {
        let currentTime = player.getCurrentTime() || 0;
        let duration = player.getDuration() || 0;
        timeDisplayElement.textContent = ( initial) ? formatTime(duration) :  formatTime(currentTime);
    }
}
function onPlayerStateChange(event, playerId) {
    let player = window.players[playerId];
    let container = document.getElementById(playerId).closest('.audio-container');
    
    if (!container) {
        console.error('Contenedor no encontrado :', playerId);
        return;
    }
    let timeDisplay = container.querySelector('.duration');
    let progressBar = container.querySelector('.progressBar');
    
    if (event.data == YT.PlayerState.PLAYING) {
        activePlayerId = playerId;
        if (player && player.getDuration) {
            let playerTotalTime = player.getDuration();
            timers[playerId] = setInterval(function() {
                if (player && player.getCurrentTime) {
                    let playerCurrentTime = player.getCurrentTime();
                    let playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100;
                    progress(playerTimeDifference, progressBar);
                    updateTimeDisplay(player, timeDisplay);
                }
            }, 1000);
        }
    } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        if (timers[playerId]) {
            clearInterval(timers[playerId]);
        }
        updateTimeDisplay(player, timeDisplay);
        
        if (activePlayerId === playerId) {
            activePlayerId = null;
        }
    }
}
document.addEventListener("DOMContentLoaded", function(event) {
    if (!window.youtubeAPILoaded) {
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.youtubeAPILoaded = true;
    }
    initialitationReproductorPGM();
});