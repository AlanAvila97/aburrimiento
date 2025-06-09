const ref = 'posts/email';
let num = 0;

firebase.initializeApp(config);
firebase.database().ref(ref).set(
  [
    {
      num,
      link: 'https://d2mqwgsb5fhf0p.cloudfront.net/done_eee6b85804/done_eee6b85804.m3u8',
      type: 'application/x-mpegURL'
    },
    {
      num,
      link: 'https://canaloncetv.s3.us-east-1.amazonaws.com/REST/data/trailer/trailer-mujeres.mp4',
      type: 'video/mp4'
    },
    {
      num,
      link: 'https://youtu.be/83_M-b7Mj6g',
      type: 'video/youtube'
    },
    {
      num,
      link: 'https://vivo.canaloncelive.tv/oncedos/ngrp:pruebachunks_all/playlist.m3u8',
      type: 'application/x-mpegURL'
    },
]);

firebase.database().ref(ref).on('value', snapshot => {
  let data = snapshot.val(), 
      list_videos = [];

    data.forEach(ele => {
      list_videos.push(
        {
          sources: [
            {
              src: ele.link,
              type: ele.type
            }
          ],
        },
      );
    });
    PlayEpisode(list_videos);
});
/**
 * @description Funcion que reproduce el episodio
 * @param id Id del episodio
 * @param video Video en formato youtube, vimeo, m3u8 o mp4
*/ 
function PlayEpisode(videoList) {  
    var options = { 
        plugins: {
            httpSourceSelector:{
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
    var reproductor =  videojs('VideoPlayer', {options});  
        reproductor.playlist(videoList);
        reproductor.playlist.autoadvance(0);
        reproductor.hotkeys({
          volumeStep: 0.1,
          seekStep: 5,
          enableMute: true,
          enableFullscreen: true,
          enableNumbers: false,
          enableVolumeScroll: true,
          enableHoverScroll: true,
          captureDocumentHotkeys: true,
          documentHotkeysFocusElementFilter: e => e.tagName.toLowerCase() === "body",
          fullscreenKey: function(e) {
            return ((e.which === 70) || (e.ctrlKey && e.which === 13));
          },                                  
      });
      reproductor.httpSourceSelector();
      reproductor.landscapeFullscreen({
        fullscreen: {
                    enterOnRotate: true,
                    exitOnRotate: true,
                    alwaysInLandscapeMode: true,
                    iOS: false
        }  
      });
      reproductor.controls(true);
      reproductor.playsinline(true);
      reproductor.autoplay(true); 
}