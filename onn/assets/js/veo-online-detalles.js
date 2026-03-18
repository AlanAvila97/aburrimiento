moment.locale('es-mx');
const url_list = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/oncatchup.json';
const url_onCatchup = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/catch.json';
const id_cve_pgm = getQueryElement('main').dataset.program;
const CONTAINER_EPISODES = getQueryElement('#video_programa .list-episodes')
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
const handleUpdateVideo = (e) => {
    let video = e.target.dataset.vda;
    PlayEpisode(video);
}
// 
const parseDataListNinos = async(url) => {
    let new_array = [], episodes = [],
        info = await fetchData(url),
        currentDay = moment().format('YYYY-MM-DD')
        
    // 
    info['arrayProgramas'].forEach(element => {
        if(element.fcalendario === currentDay && element.cve_programa === id_cve_pgm){
            new_array.push(element);            
        }
    });
    let JSON_LINK_EPISODES = await fetchData(`https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodios/catchup/${id_cve_pgm}.json`);
    new_array.forEach(element => {
        JSON_LINK_EPISODES.forEach(epi => {
            if(epi.cve_chap == element.cve_capitulo && epi.seson == element.num_temporada && epi.cve_pgm == id_cve_pgm ){
                episodes.push(epi)
            }
        });
    });
    return episodes;
}
// 
const getDataOnCatchup = async() => {
    let html = "",
        data_list = await fetchData(url_onCatchup),
        data_onCatchup = await parseDataListNinos(url_list);
        first_video = ''
        // episodes = await fetchData(`https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodios/catchup/${id_cve_pgm}.json`)
    data_list.forEach(element => {
        if(element.cve_pgm === id_cve_pgm){
            getQueryElement('#title_pgm').innerText = element.nombre_serie;
            getQueryElement('#desc_pgm').innerText = element.descripcion;
        }
    });
    console.log(data_onCatchup);
    data_onCatchup.forEach((element, index) => {
        if(index === 0) first_video = element.vda;
        html += `<a class="text-light fs-1 font-lilitaone text-decoration-none"
                    data-movie="${element.file}" data-vda="${element.vda}">
                    ${element.nombre}
                </a>`

    });
    CONTAINER_EPISODES.innerHTML = html;
    PlayEpisode(first_video)
    let items_episodes = CONTAINER_EPISODES.querySelectorAll('a');
    items_episodes.forEach(element => {        
        element.addEventListener('click', handleUpdateVideo)
    });
}
/**
 * @description Funcion que reproduce el episodio
 * @param id Id del episodio
 * @param video Video en formato youtube, vimeo, m3u8 o mp4
*/ 
function PlayEpisode(video) {      
    scrollToId('video_programa');
    var options = { 
        plugins: {
            httpSourceSelector:
            {
            default: 'auto'
            },
        },  
        techOrder: [ 'chromecast', 'html5', 'youtube', 'vimeo' ],
        controls: true,
        html5:{
            hls: {
            overrideNative: !videojs.browser.IS_SAFARI,
            },
        },
        controlBar: {
            volumePanel: {
            inline: false,
            volumeControl: {
                vertical: true
            }
            },
            fullscreenToggle: false
        },    
        youtube: {
            ytControls: 2,
            playsinline: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            cc_load_policy: 0,
            
            rel: 0,
        },
    };  
    videojs.registerPlugin('apiVideoAnalytics', VideoJsApiVideoAnalytics);
    var reproductor =  videojs('streamplayer', {options});  
        reproductor.apiVideoAnalytics({
            events: [
            {
                name: 'play',
                label: 'video play',
                action: 'play',
                event_label: video,
            },
            {
                name: 'fullscreenchange',
                label: {
                open: 'video fullscreen open',
                exit: 'video fullscreen exit'
                },
                action: 'fullscreen change',
                event_label: video,
            },
            {
                name: 'timeupdate',
                action: 'time updated',
                event_label: video,
            }
            ]            
        });
    if (video.includes('m3u8')) {
        reproductor.httpSourceSelector();
        reproductor.chromecast();
        reproductor.landscapeFullscreen({
                                        fullscreen: {
                                                    enterOnRotate: true,
                                                    exitOnRotate: true,
                                                    alwaysInLandscapeMode: true,
                                                    iOS: false
                                        }  
                                    });
        reproductor.src({ type: 'application/x-mpegURL', src: video });        
        reproductor.controls(true);
        reproductor.playsinline(true);
        reproductor.autoplay(true); 
    }else if (video.includes('vimeo')) {
        var repVimeo =  videojs('VideoPlayer', {});  
            repVimeo.chromecast();

            repVimeo.apiVideoAnalytics({
                                        events: [
                                        {
                                            name: 'play',
                                            label: 'video play',
                                            action: 'play',
                                            event_label: video,
                                        },
                                        {
                                            name: 'fullscreenchange',
                                            label: {
                                            open: 'video fullscreen open',
                                            exit: 'video fullscreen exit'
                                            },
                                            action: 'fullscreen change',
                                            event_label: video,
                                        },
                                        {
                                            name: 'timeupdate',
                                            action: 'time updated',
                                            event_label: video,
                                        }
                                        ]            
                                    });
            repVimeo.reset();
            repVimeo.src({ techOrder: ["vimeo"], type: 'video/vimeo', src: video});
            repVimeo.controls(true);
            repVimeo.playsinline(true);
            reproductor.autoplay(true);   
    }else if (video.includes('youtu.be') || video.includes('youtube') ||  video.includes('youtu')){
    reproductor.httpSourceSelector();
    reproductor.chromecast();
    reproductor.landscapeFullscreen({
                                    fullscreen: {
                                                enterOnRotate: true,
                                                exitOnRotate: true,
                                                alwaysInLandscapeMode: true,
                                                iOS: false
                                    }  
                                    });
    reproductor.src({ type: 'video/youtube', src: video });          
    reproductor.controls(true);
    reproductor.playsinline(false);
    }else{
        reproductor.httpSourceSelector();
        reproductor.chromecast();
        reproductor.landscapeFullscreen({
                                        fullscreen: {
                                                    enterOnRotate: true,
                                                    exitOnRotate: true,
                                                    alwaysInLandscapeMode: true,
                                                    iOS: false
                                        }  
                                        });
        reproductor.src({ type: 'video/mp4', src: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/trailer/'+video });          
        reproductor.controls(true);
        reproductor.playsinline(false);
    }       
}
document.addEventListener('DOMContentLoaded', function(event) {    
    getDataOnCatchup();
});