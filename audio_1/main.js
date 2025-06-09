const { Player } = window.Shikwasa

// const player = new Player({
//     container: () => document.querySelector('.radio'),
//     themeColor: '#be995f',
//     theme: 'auto',
//     preload: 'metadata',
//     audio: {
//         title: 'asas',
//         artist: 'ONN Radio',

//         cover: 'https://canalonce.mx/reproductores-onn/assets/img/PortadaONNRadio.png',
//         src: 'https://broadcast.radio.ipn.mx/RadioIPN'
//     },
// });
// player.el.setAttribute('data-style', 0)

// console.log(player);
const cleanAttrElemenr = (element ) =>{
    $(element).attr('style', '')
}
const setAttrDisplayNone = (element ) =>{
    $(element).attr('style', 'display: none;')
}
const setStatusPlayer = (element, status) => {
    $(element).attr('data-status', status);
}
const setConfigClose = (type) =>{
    if(type == 1){
        setAttrDisplayNone('#btn_minimize')
        setAttrDisplayNone('.shk-controls')
        setAttrDisplayNone('.shk-display')
        $('#btn_maximize').attr('style', 'display: block; width: 20px; height: 20px;')        
        $('.section-reproductor-radio .shk-cover').width('55px');
        $('.section-reproductor-radio .shk-cover').height('55px');
    }else{
        $('.section-reproductor-radio .shk-cover').width('70px');
        $('.section-reproductor-radio .shk-cover').height('70px');
        cleanAttrElemenr('#btn_minimize')
        cleanAttrElemenr('.shk-controls')
        setAttrDisplayNone('#btn_maximize')
        setAttrDisplayNone('.shk-display')
    }
}
const initialitationReproductor = () => {
    const { Player } = window.Shikwasa;
    const player = new Player({
        container: () => document.querySelector('.rep_radio'),
        themeColor: '#D6A44C',
        theme: 'dark',
        preload: 'metadata',
        autoplay: true,
        audio: {
            title: 'La Voz del Instituto Politécnico Nacional - IPN',
            artist: 'Radio IPN',
            cover: 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/logoradioipn_17.png',
            src: 'https://broadcast.radio.ipn.mx/RadioIPN'
        },
    });
    player.el.setAttribute('data-style', 0);
    $('body').on('click', '.btn_play_radio', function(){
        let status = parseInt($(this).attr('data-status'));
        if(status == 0){
        player.play();      
        $('#btn_play_radio .btn_play img').attr('src', 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/pause-small_radio.png')
        setStatusPlayer($(this), 1)
        }else{
        player.pause();
        $('#btn_play_radio .btn_play img').attr('src', 'https://d22jn00zjrk7sl.cloudfront.net/wp-content/uploads/2025/01/play-small_radio.png')                        
        setStatusPlayer($(this), 0)
        }
    });
    $('body').on('click', '.btn_close_radio', function(){
        let status = parseInt($(this).attr('data-status'));
        setConfigClose(status);
        player.pause();
        setStatusPlayer($(this), 0)
        setStatusPlayer($('.btn_play_radio'), 0)
    });
    window.addEventListener('resize', function() {
        if( window.innerWidth <= 550){
            console.log('menor')
            player.pause();
            setStatusPlayer($(this), 0)
            setStatusPlayer($('.btn_close_radio'), 1)
        }
    });
     // player.play();      
 }
 document.addEventListener('DOMContentLoaded', function(event) {    
     initialitationReproductor();
 });