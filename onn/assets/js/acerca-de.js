const ITEM_GRID = document.querySelectorAll('#grid-equipo .items-grid img');
// 
const sliderAcercaDe = () => {
    var swiper_gallery = new Swiper(".slider-galeria", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        slidesPerGroup: 1,
        loop: true,
        rewind: true,
        pagination: {
            el: "#section_galeria .content-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
    });
}
/**
 * @description Funcion que reproduce el episodio
 * @param id Id del episodio
 * @param video Video en formato youtube, vimeo, m3u8 o mp4
*/ 
function PlayEpisode(video) {      
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
    sliderAcercaDe();
    PlayEpisode('https://youtu.be/GdWOW9IL8Sc?si=QG-aHuFUJvkHpHrN');
    initGallery();
});