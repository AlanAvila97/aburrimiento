moment.locale('es-mx');
const url_audios = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/radioon2.json';
const url_video = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/radioonn.json?=cache';
const CONTAINER_IFRAME = getQueryElement('#texto_principal .container-iframe')
// 
let btn_prev = getQueryElement('.control-prev img'),
    btn_next = getQueryElement('.control-next img'),
    play = getQueryElement('.control-play img'),
    players = {};
// 
function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // desplazamiento suave
      block: "start",     // posición en la parte superior de la vista
      inline: "nearest"
    });
  }
}
// 
function secondsToString(seconds) {
    var duracion = '';        
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;        
    var minute = Math.floor((seconds / 60) % 60);        
    minute = (minute < 10)? '0' + minute : minute;        
    var second = seconds % 60;
    second = Math.round(second);
    second = (second < 10)? '0' + second : second;
    if(hour != 0o0){
        duracion = hour + ':' + minute + ':' + second;
    }else{
        duracion = minute + ':' + second;
    }
    return duracion;
}
// 
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
// 
function obtenerSrcDesdeTexto(textoIframe) {
    // 
    const parser = new DOMParser();
    const doc = parser.parseFromString(textoIframe, 'text/html');    
    // 
    const iframe = doc.querySelector('iframe');
    // // 
    if (iframe && iframe.src) {
        return iframe.src;
    } else {
        return null;
    }
}
// 
const cambiarImagenPicture = (url, element) => {
    const picture = element;
    // 
    const sources = picture.querySelectorAll('source');
    sources.forEach(source => {
        source.srcset = url;
    });
    // 
    const img = picture.querySelector('img');
    img.src = url;
}
// 
const parserData = async(url, type) => {        
    let new_array = [],
        info = await fetchData(url)
    // 
    let filter_type = (type === 'canciones') ? '2' : '1';
    info[type].forEach(element => {
        if(element.tipo === filter_type){
            new_array.push(element);
        }
    });
    // 
    const arrayOrder = new_array.map((item, index) => ({
        ...item,
        order: index + 1 
    }));
    return arrayOrder;
}
const prevPodcast = async(e, podcast) => {
    let info = await parserData(url_audios, 'podcast nuevos');
    if(info.length <= 0) info = await parserData(url_audios, 'podcast viejos');
    let id_order = parseInt(e.target.dataset.prev);
        prev = ( (id_order - 1) === 0 ) ? info.length : (id_order - 1),
        next = ( (id_order + 1) >= info.length ) ? 1 : (id_order + 1);
    const data = await setDataPodcast(info, id_order, prev, next, 'podcast');
    podcast.update({
        title: data.title,
        artist: data.artist,
        src: data.src
    });
    getQueryElement(`#icon_principal_podcast img`).dataset.status = 0;
    cambiarImagenPicture('https://onceninasyninos.tv/wp-content/uploads/2025/08/Botón-play.png', getQueryElement(`#icon_principal_podcast picture`))
}
const nextPodcast = async(e, podcast) => {
    let info = await parserData(url_audios, 'podcast nuevos');
    if(info.length <= 0) info = await parserData(url_audios, 'podcast viejos');
    let id_order = parseInt(e.target.dataset.next);
        prev = (  (id_order - 1) === 0 ) ? info.length : (id_order - 1),
        next = ( (id_order + 1) >= info.length ) ? 1 : (id_order + 1);
    const data = await setDataPodcast(info, id_order, prev, next, 'podcast');
    podcast.update({
        title: data.title,
        artist: data.artist,
        src: data.src
    });
    getQueryElement(`#icon_principal_podcast img`).dataset.status = 0;
    cambiarImagenPicture('https://onceninasyninos.tv/wp-content/uploads/2025/08/Botón-play.png', getQueryElement(`#icon_principal_podcast picture`))
}
const playAudio = (e, podcast) => {
    const target = e.currentTarget;
    // 
    let status_icon_play = target.dataset.status;
    let id_picture = target.dataset.id;
    let picture = getQueryElement(`#${id_picture} picture`);
    Object.keys(players).forEach(key => {
        if (key !== podcast && players[key] ) {
            players[key].pause();
        }
        if(podcast === 'canciones'){
            getQueryElement(`#icon_principal_podcast img`).dataset.status = 0;
            cambiarImagenPicture('https://onceninasyninos.tv/wp-content/uploads/2025/08/Botón-play.png', getQueryElement(`#icon_principal_podcast picture`))
        }else{
            getQueryElement(`#icon_principal_song img`).dataset.status = 0;
            cambiarImagenPicture('https://onceninasyninos.tv/wp-content/uploads/2025/08/Botón-play.png', getQueryElement(`#icon_principal_song picture`))
        }
    });    
    // 
    if (players[podcast]) {
        players[podcast].toggle();
        if (e && e.target) {
            e.currentTarget.dataset.status = (status_icon_play === '0') ? '1' : '0';            
            (status_icon_play === '0') ? cambiarImagenPicture('https://onceninasyninos.tv/wp-content/uploads/2025/08/Botón-pause.png', picture)
                                       : cambiarImagenPicture('https://onceninasyninos.tv/wp-content/uploads/2025/08/Botón-play.png', picture)
        }
    }
}
// 
const setDataPodcast = async(info, order, prev, next, type) => {
    const data = { 'title' : '', 'artist' : '', 'src' : '' }
    // 
    let title_audio = (type === 'podcast') ? getQueryElement('#title-podcast') : getQueryElement('#title-principal-song'),
        author_audio = (type === 'podcast') ? getQueryElement('#author-podcast') : getQueryElement('#author-principal-song'),
        time_audio = (type === 'podcast') ? getQueryElement('#time-podcast .duration') 
                                          : getQueryElement('#time-principal-song .duration'),
        url_audio = (type === 'podcast') ?  'https://canalonce.mx/REST/data/audioonn/radio/'
                                        : 'https://canalonce.mx/REST/data/audioonn/canciones/';
    // 
    let prev_audio = (type === 'podcast') ? prev : '',
        next_audio = (type === 'podcast') ? next : '';
    // 
    info.forEach(element => {
        if(element.order == order){
            // 
            let au = document.createElement('audio');
                au.src = url_audio+element.title;
            // 
            setTextElement(title_audio, element.nombre);
            setTextElement(author_audio, 'ONN RADIO');
            // 
            au.addEventListener('loadedmetadata', function(){
                let duration = au.duration;          
                let durationMp3 = secondsToString(duration);  
                setTextElement(time_audio, `${durationMp3}`);
            }); 
            // 
            if(type === 'podcast'){
                let parserDate = moment(element.created, "YYYY-MM-DD h:mm:ss").format('DD/MM/YYYY'); 
                let date_audio = getQueryElement('#date-podcast');
                    setTextElement(date_audio, parserDate);                    
                btn_prev.dataset.prev = prev_audio;
                btn_next.dataset.next = next_audio;
            }
            // 
            data.title = element.nombre;
            data.artist = 'ONN RADIO';
            data.src = url_audio+element.title;
        }
    });
    return data;
}
const getDataSong = async(e, info, cancion) => {
    scrollToId('play_list_radio');
    getQueryElement(`#icon_principal_song img`).dataset.status = 0;
    cambiarImagenPicture('https://onceninasyninos.tv/wp-content/uploads/2025/08/Botón-play.png', getQueryElement(`#icon_principal_song picture`))
    // 
    let order = e.currentTarget.dataset.order;
    const data = await setDataPodcast(info, order, '', '', 'canciones')
    cancion.update({
        title: data.title,
        artist: data.artist,
        src: data.src
    });
}
// 
const createListSongs = async(info, cancion) => {
    const contentList = getQueryElement('.content-play-list .play-list');
    let html = '';
    info.forEach((element, index) => {       
        html += `<div id="item-song-${index}"
                    class="item-list"
                    data-title="${element.nombre}"
                    data-artist="ONN Radio"
                    data-audio="${element.title}"
                    data-order="${element.order}">
                    <div class="image-song">
                        <picture class="d-block">
                            <source class="lazy img-fluid" 
                                srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/cover_play_rep.png" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/cover_play_rep.png" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="https://onceninasyninos.tv/wp-content/uploads/2025/08/cover_play_rep.png" alt="Logo Once" width="139" 
                                height="320">
                        </picture>
                        <div class="floating-btn">
                            <picture class="d-block">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/play_icon.png" type="image/webp">
                                <source class="lazy img-fluid" 
                                    srcset="https://onceninasyninos.tv/wp-content/uploads/2025/08/play_icon.png" 
                                    type="image/png"> 
                                <img class="img-fluid lazy img-fluid-responsive" 
                                    src="https://onceninasyninos.tv/wp-content/uploads/2025/08/play_icon.png" alt="Logo Once" width="139" 
                                    height="320">
                            </picture>
                        </div>
                    </div>
                    <div class="info-song">
                        <h1 id="title-rep" class="text-light font-lilitaone h1 fs-1">
                            ${element.nombre}
                        </h1>
                        <p class="author-rep text-light fs-3 mb-0">ONN RADIO</p>
                        <p class="time-rep text-light fs-4 mb-0"></p>
                    </div>
                </div>`;
    });
    contentList.innerHTML = html;
    // 
    info.forEach((element, index) => {
        let au = document.createElement('audio');
            au.src = `https://canalonce.mx/REST/data/audioonn/canciones/${element.title}`;   
        let time_content = contentList.querySelector(`#item-song-${index} .info-song .time-rep`);
        au.addEventListener('loadedmetadata', function(){
            var duration = au.duration;          
            var durationMp3 = secondsToString(duration);   
            time_content.innerHTML = durationMp3;
        },false);   
    });
    const items_songs = contentList.querySelectorAll('.item-list');
    items_songs.forEach(element => {
        element.addEventListener('click', (e) => getDataSong(e, info, cancion) )
    });
}
// 
const initialitationReproductorPodcast = async() => {
    let info = await parserData(url_audios, 'podcast nuevos');
    if(info.length <= 0) info = await parserData(url_audios, 'podcast viejos');
    let btn_prev = getQueryElement('.control-prev img'),
        btn_next = getQueryElement('.control-next img'),
        play = getQueryElement('.control-play img');
    let time = getQueryElement('.info-reproductor #time-podcast .timer');
    const data = await setDataPodcast(info, 1, info.length, 2, 'podcast')
    // 
    const { Player } = window.Shikwasa;
    players.podcast = new Player({
        container: () => document.querySelector('.player-podcast'),
        themeColor: '#D6A44C',
        theme: 'dark',
        preload: 'metadata',
        autoplay: true,
        audio: {
            title: data.title,
            artist: data.artist,
            cover: 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/logoradioipn_17.png',
            src: data.src
        },
    });
    players.podcast.on('timeupdate', (e) => {
        time.textContent = secondsToString(players.podcast.currentTime);
    });
    btn_prev.addEventListener('click', (e) => prevPodcast(e, players.podcast) )
    btn_next.addEventListener('click', (e) => nextPodcast(e, players.podcast) )
    play.addEventListener('click', (e) => playAudio(e, 'podcast') )
}
const initialitationReproductorCanciones = async() => {
    let info = await parserData(url_audios, 'canciones');
    let play = getQueryElement('.current-item-list #icon_principal_song img');
    let time = getQueryElement('#time-principal-song .timer');
    // 
    const data = await setDataPodcast(info, 1, '', '', 'canciones')
    // 
    const { Player } = window.Shikwasa;
    players.canciones = new Player({
        container: () => document.querySelector('.player-podcast'),
        themeColor: '#D6A44C',
        theme: 'dark',
        preload: 'metadata',
        autoplay: true,
        audio: {
            title: data.title,
            artist: data.artist,
            cover: 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/logoradioipn_17.png',
            src: data.src
        },
    });
    players.canciones.on('timeupdate', (e) => {
        time.textContent = secondsToString(players.canciones.currentTime);
    });
    play.addEventListener('click', (e) => playAudio(e, 'canciones') )
    createListSongs(info, players.canciones);
}
const setVideoOnn = async() => {
    let info = await fetchData(url_video);
    let data_iframe = obtenerSrcDesdeTexto(info.iframe);
    let parse_src = data_iframe.split('embed/')
    // 
    CONTAINER_IFRAME.innerHTML = `<lite-youtube videoid="${parse_src[1]}"></lite-youtube>`;    
}
document.addEventListener('DOMContentLoaded', function(event) {    
    initialitationReproductorPodcast();
    initialitationReproductorCanciones();
    setVideoOnn();
});