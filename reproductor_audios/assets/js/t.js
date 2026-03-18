let players = {};
const dataMp3 = [
    {
        'id': 'audio_1',
        'title': 'Reproductor 1',
        'desc': 'desc',
        'link': 'https://canalonce.mx/REST/data/audioonn/canciones/Todo%20duerme.mp3',
        'imageCH': 'https://canalonce.mx/REST/data/miniaturas/dialogos-en-confianza_min.jpg',
        'imagenw': 'https://canalonce.mx/REST/data/miniaturas/dialogos-en-confianza_min.jpg',
        'bg': '#000068',
        'link_spotify': '',
        'link_pgm': '',
    },
    {
        'id': 'audio_2',
        'title': 'Reproductor 2',
        'desc': 'desc',
        'link': 'https://canalonce.mx/REST/data/audioonn/canciones/La%20hora%20de%20comer.mp3',
        'imageCH': 'https://canalonce.mx/REST/data/miniaturas/banner-en-vivo-la-verdrag.jpg',
        'imagenw': 'https://canalonce.mx/REST/data/miniaturas/banner-en-vivo-la-verdrag.jpg',
        'bg': '#2d5b54',
        'link_spotify': '',
        'link_pgm': '',
    },
    {
        'id': 'audio_3',
        'title': 'Reproductor 3',
        'desc': 'desc',
        'link': 'https://canalonce.mx/REST/data/audioonn/canciones/Aquí%20y%20allá.mp3',
        'imageCH': 'https://canalonce.mx/REST/data/miniaturas/avatar-envejecer-2024_320x177.jpg',
        'imagenw': 'https://canalonce.mx/REST/data/miniaturas/avatar-envejecer-2024_320x177.jpg',
        'bg': '#005d2b',
        'link_spotify': '',
        'link_pgm': '',
    },
]
class IndependentMarquee {
    constructor(element) {
        this.wrapper = element;
        this.textElement = CONTAINER_REPRODUCTORES.querySelector('.info-audio');
        this.speed = 50;
        this.initialDelay = 1000;
        this.init();
    }
    init() {
        const textWidth = this.textElement.scrollWidth;
        const wrapperWidth = this.wrapper.clientWidth;
        // 
        if (textWidth > wrapperWidth) {
            // 
            const duration = ((textWidth + wrapperWidth) / this.speed) * 1000; // en ms
            // 
            this.textElement.style.transition = `transform ${duration}ms linear`;
            this.textElement.style.transform = 'translateX(0)';
            // 
            setTimeout(() => {
                this.startAnimation(duration);
            }, this.initialDelay);
        }
    }
    startAnimation(duration) {
        //
        this.textElement.style.transform = `translateX(-${this.textElement.scrollWidth}px)`;        
        // 
        setTimeout(() => {
            this.resetAndRestart(duration);
        }, duration);
    }
    resetAndRestart(duration) {
        // 
        this.textElement.style.transition = 'none';
        this.textElement.style.transform = 'translateX(0)';
        // 
        void this.textElement.offsetWidth;
        // 
        setTimeout(() => {
            this.textElement.style.transition = `transform ${duration}ms linear`;
            this.startAnimation(duration);
        }, 50);
    }
}
const CONTAINER_REPRODUCTORES = document.querySelector('.container-reproductores');
const secondsToString = (seconds) => {
    let duracion = '';        
    let hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;        
    let minute = Math.floor((seconds / 60) % 60);        
    minute = (minute < 10)? '0' + minute : minute;        
    let second = seconds % 60;
    second = Math.round(second);
    second = (second < 10)? '0' + second : second;
    if(hour != 0o0){
        duracion = hour + ':' + minute + ':' + second;
    }else{
        duracion = minute + ':' + second;
    }
    return duracion;
}
const actualizarProgreso = (e, timer, ele_progress) => {
    let audio = e.target;
    if (audio.duration) {
        const progress_audio = (audio.currentTime / audio.duration) * 100;
        progress(progress_audio, ele_progress)
        timer.textContent = secondsToString(audio.currentTime);
    }
}
const setAttrButtons = (element, status, icon_attr) => {
    let icon = element.querySelector('.action_icon_audio');                    
        icon.setAttribute('class', icon_attr);
        element.dataset.status = status;
}
const actualizarBotones = (button, type = 0) => {
    const buttons_icons = CONTAINER_REPRODUCTORES.querySelectorAll("button.play-btn");
    buttons_icons.forEach(element => {
        setAttrButtons(element, (true), 'action_icon_audio fa-solid fa-play fa-stack-1x');
    });
    if(type === 1) {
        setAttrButtons(button, (false), 'action_icon_audio fa-solid fa-pause fa-stack-1x ');
    }
}
const progress = (percent, element) => {
    let percent_audio = Math.max(0, Math.min(100, percent));
    const innerBar = element.querySelector('div');
    if (innerBar) {
        innerBar.style.width = percent + '%';
    } else {
        console.error('No se encontró la barra de progreso interna');
    }
}
const playAudio = (e, content_audio) => {
    let list_audios = CONTAINER_REPRODUCTORES.querySelectorAll('audio');
    let audio = content_audio.querySelector('audio'),
        progress = content_audio.querySelector('.progressBar'),
        text_timer = content_audio.querySelector('.duration');
    // 
    list_audios.forEach(element => {
        if(element.id === audio.id) { 
            audio.play();
        }else{ 
            element.pause();
        }
    });
    audio.addEventListener('timeupdate', (e) => actualizarProgreso(e, text_timer, progress));
    actualizarBotones(e.currentTarget, 1);
}
const pauseAudio = (button, content_audio) => {
    let list_audios = CONTAINER_REPRODUCTORES.querySelectorAll('audio');
    list_audios.forEach(element => {
        element.pause();
    });
    actualizarBotones(button);
}
const updateProgressBarVisual = (content_audio) => {
    const audioElement = content_audio.querySelector('audio');
    const progressBarFill = content_audio.querySelector('.progressBar div');
    if (audioElement.duration && progressBarFill) {
        const percent = (audioElement.currentTime / audioElement.duration) * 100;
        progressBarFill.style.width = percent + '%';
    }
};
const updateProgressBar = (e, content_audio) => {
    let audio = content_audio.querySelector('audio'),
        button = content_audio.querySelector('.play-btn'),
        progressBar = content_audio.querySelector('.progressBar'),
        text_timer = content_audio.querySelector('.duration')
    // 
    pauseAudio(button, content_audio)
    // 
    const rect = progressBar.getBoundingClientRect();       
    const clickX = e.clientX - rect.left;
    const barWidth = rect.width;
    const percent = clickX / barWidth;
    // 
    if (audio.duration) {
        audio.currentTime = audio.duration * percent;
        updateProgressBarVisual(content_audio);
        const currentTime = audio.currentTime;
        text_timer.textContent = secondsToString(currentTime);
        //
        audio.play();
        actualizarBotones(button, 1);
    }
}
const actionBtnTimeAudio = (e, content_audio, type) => {
    let audio = content_audio.querySelector('audio');        
    let button = content_audio.querySelector('.play-btn');
    let text_timer = content_audio.querySelector('.duration');
    // 
    if (!audio || !audio.duration) return;
    // 
    let newTime = (type === 'Add') ? audio.currentTime + 10 : audio.currentTime - 10;
    // 
    if (newTime < 0) {
        newTime = 0;
    }else if(newTime > audio.duration) {
        newTime = audio.duration;
    }
    // 
    audio.currentTime = newTime;
    // 
    updateProgressBarVisual(content_audio);
    text_timer.textContent = secondsToString(newTime);
    if (audio.paused) {
        button.click();
    }
}
const actionAudio = (e, content_audio) => {
    const button = e.target.closest('button');
    if(button ){
        let icon = button.querySelector('i');
        const status = button.dataset.status === 'true';
        if(status){
            playAudio(e, content_audio)
        }else{
            pauseAudio(e, content_audio)
        }
        button.dataset.status = (!status).toString();
    }
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
const initialitationReproductorMp3 = () => {
    let html = '', array_id = [];
    dataMp3.forEach((element, index) => {
        //                                 
        let id_video = element.id;
        let img_webp = (element.imagenw == null) ? element.imageCH : element.imagenw;
        let bg = element.bg;
        let link_audio = element.link;
        let link_spotify = element.link_spotify;
        let link_pgm = element.link_pgm;
        // 
        array_id.push(id_video);
        // 
        html += `<div id="${id_video}" class="audio-container" style="background-color: ${bg};" data-id="${id_video}" data-audio="${link_audio}">
            <div class="content-info-audio">
                <div class="logo-audio">
                    <picture>
                        <source class="lazy img-fluid" srcset="${img_webp}" type="image/webp">
                        <source class="lazy img-fluid" srcset="${element.imageCH}" type="image/png"> 
                        <img class="img-fluid lazy" src="${img_webp}" alt="Logo once+" width="139" height="30">
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
                    <div class="hidden-player"></div>                            
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
    array_id.forEach(element => {
        let audios = CONTAINER_REPRODUCTORES.querySelector(`#${element}`),
            audio_container = audios.querySelector(`.hidden-player`),
            link_audios = audios.dataset.audio;
        //
        let time_audio =  audios.querySelector('.timeDisplay .duration') 
        let au = document.createElement('audio');
            au.id = `player_${element}`;
            au.src = link_audios;
        //
        au.addEventListener('loadedmetadata', function(){
                    let duration = au.duration;          
                    let durationMp3 = secondsToString(duration);  
            setTextElement(time_audio, `${durationMp3}`);
        });
        // 
        audio_container.append(au);
        // 
        let play_icon = audios.querySelector('.play-btn'),
            progress_bar = audios.querySelector('.progressBar'),
            rest_progress = audios.querySelector('.rest-time'),
            add_progress = audios.querySelector('.add-time'),
            options_audio = audios.querySelectorAll('.options-btn');
        // 
        play_icon.addEventListener('click', (e) => actionAudio(e, audios) );
        progress_bar.addEventListener('click', (e) => updateProgressBar(e, audios) );
        rest_progress.addEventListener('click', (e) => actionBtnTimeAudio(e, audios, 'Rest') );
        add_progress.addEventListener('click', (e) => actionBtnTimeAudio(e, audios, 'Add') );
        options_audio.forEach(element => {            
            element.addEventListener('click', (e) => openOptionsAudio(e, audios));
        });
    });
}
document.addEventListener("DOMContentLoaded", function(event) {
    initialitationReproductorMp3();
});