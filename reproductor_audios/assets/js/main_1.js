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
    let icon = element.querySelector('i');                    
        icon.setAttribute('class', icon_attr);
        element.dataset.status = status;
}
const actualizarBotones = (button, type = 0) => {
    const buttons_icons = CONTAINER_REPRODUCTORES.querySelectorAll("button.play-btn");
    buttons_icons.forEach(element => {
        let action_icon =  element.querySelector('#icon_action_audio')
        setAttrButtons(element, (true), 'fa-solid fa-play');
    });
    if(type === 1) {
        setAttrButtons(button, status, 'fa-solid fa-pause');
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
        text_timer = content_audio.querySelector('.timer');
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
        text_timer = content_audio.querySelector('.timer')
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
const initialitationReproductorMp3 = () => {
    let html = '', array_id = [];
    dataMp3.forEach((element, index) => {
        //                                 
        let id_video = element.id;
        let img_webp = (element.imagenw == null) ? element.imageCH : element.imagenw;
        // 
        array_id.push(id_video);
        // 
        html += `<div id="${id_video}" class="audio-container" data-id="${id_video}" data-audio="${element.link}">
                    <div class="progressBar">
                        <div></div>
                    </div>
                    <div class="content-info-audio">
                        <div class="logo-audio">
                            <picture>
                                <source class="lazy img-fluid" srcset="${img_webp}" type="image/webp">
                                <source class="lazy img-fluid" srcset="${element.imageCH}" type="image/png"> 
                                <img class="img-fluid lazy" src="${img_webp}" alt="Logo once+" width="139" height="30">
                            </picture>
                        </div>
                        <div class="info-audio">
                            <h2>${element.title || 'title'}</h2>
                            <div class="timeDisplay">
                                <span class="timer">00:00 </span> / <span class="duration"></span>                                        
                            </div>
                        </div>
                        <div class="audio-controls">
                            <button class="rest-time time-control">
                                <picture>
                                    <source class="lazy img-fluid" srcset="./assets/images/rest_ten.png" type="image/webp">
                                    <source class="lazy img-fluid" srcset="./assets/images/rest_ten.png" type="image/png"> 
                                    <img class="img-fluid lazy" src="./assets/images/rest_ten.png" alt="Logo once+" width="139" height="30">
                                </picture>
                            </button>
                            <button class="play-btn" data-status="true">
                                <i class="fa-solid fa-play"></i>                    
                            </button>
                            <button class="add-time time-control">
                                <picture>
                                    <source class="lazy img-fluid" srcset="./assets/images/add_ten.png" type="image/webp">
                                    <source class="lazy img-fluid" srcset="./assets/images/add_ten.png" type="image/png"> 
                                    <img class="img-fluid lazy" src="./assets/images/add_ten.png" alt="Logo once+" width="139" height="30">
                                </picture>
                            </button>
                        </div>
                        <div class="hidden-player"></div>
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
            progress_bar = audios.querySelector('.progressBar');
        play_icon.addEventListener('click', (e) => actionAudio(e, audios) )
        progress_bar.addEventListener('click', (e) => updateProgressBar(e, audios) )
    });
}
document.addEventListener("DOMContentLoaded", function(event) {
    initialitationReproductorMp3();
});