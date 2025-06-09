let status_game = true;
// 
document.addEventListener('keydown', (event) => {            
    switch (event.keyCode) {
        case 37: 
            // Flecha An8terior 
            RetrocederBalon();                                  
        break;
        case 39: 
            // Flecha Siguiente
            AvanzarBalon();
        break;
    }
}, false);
$("body").on("click", ".set-img", function(){
    if(status_game){
        $('.set-img').html('')
        let id = $(this).attr('id');
        let yard = parseInt($(this).attr('data-id'));
        $('.set-img').removeClass('active');
        $(this).addClass('active');
        $('#'+id).append('<img class="balon" src="balon.png" alt="Balon">');
        filterYards(yard);
        switch (yard) {
            case 1:
                $('#yard-1').removeClass('in_game')
                let status_L = $("#yard-1").hasClass("in_game");
                if(!status_L){
                    console.log('touch');
                    animationTouchDown(1);
                    $('#touchdown').click();
                    // $('#yard-1').html()
                }
                break;
            case 21:
                $('#yard-21').addClass('in_game')
                let status_R = $("#yard-21").hasClass("new_game");
                if(!status_R){
                    console.log('touch');
                    animationTouchDown(21);
                    $('#touchdown').click();

                }
                break;
        }
    }
});
$("body").on("click", "#game_left", function(){
    let id = '#yard-1';
    $('.set-img').html('')    
    $('.set-img').removeClass('in_game');
    $( id ).addClass( "active in_game " );
    $(id).append('<img class="balon " src="balon.png" alt="Balon">');
});
$("body").on("click", "#game_right", function(){
    let id = '#yard-21';
    $('.set-img').html('')    
    $('.set-img').addClass('in_game');
    $( id ).addClass( "active" );
    $( id ).removeClass( "in_game" );
    $(id).append('<img class="balon" src="balon.png" alt="Balon">');
});
$("body").on("click", "#game_clean", function(){
    $('.set-img').removeClass('active')
    $('.set-img').html('')
});
function animationTouchDown(id) {
    let audio =  document.getElementById("audio_touchdown");
        audio.play();
    $('.section-animation-touchDown').addClass('star-animation-down');
    $('#yard-'+id).html('')
    status_game = false;
    setTimeout(function(){
        $('.section-animation-touchDown').removeClass('star-animation-down');
        $('#yard-'+id).append('<img class="balon" src="balon.png" alt="Balon">');
        status_game = true;
        audio.pause();
        audio.currentTime = 0
    }, 4150); 
}
function AvanzarBalon() {    
    if($('.set-img .balon').length != 0 ){
        let currentPosition = parseInt($('.set-img.active').attr('data-id'));
        let nextId = currentPosition + 1 ;
        console.log(currentPosition);
        if(nextId <= 21){
            $('#yard-'+currentPosition).addClass('in_game')
            $('#yard-'+currentPosition).removeClass('active')
            $('#yard-'+nextId).click();
        }else{
            nextId = 21;
            console.log('mayor');
        }
        console.log(nextId);
    }else{
        $('#yard-1').click();   
    }  
}
function RetrocederBalon() {
    if($('.set-img .balon').length != 0 ){
        let currentPosition = parseInt($('.set-img.active').attr('data-id'));
        let pastId = currentPosition - 1;
        if(pastId >= 1){
            $('#yard-'+currentPosition).removeClass('active in_game')
            $('#yard-'+pastId).click();           
        }else{
            pastId = 1;
        }
    }
}
function filterYards(yard) {    
    $('.set-img').removeClass('in_game');     
    for (let index = 1; index < yard; index++) {
        $('#yard-'+index).addClass('in_game');     
    }
}