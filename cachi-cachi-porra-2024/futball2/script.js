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
    $('.set-img').html('')
    let id = $(this).attr('id');
    $(this).addClass('active');
    $('#'+id).append('<img class="balon" src="balon.png" alt="Balon">')
});
$("body").on("click", ".btn-clean", function(){
    $('.set-img').removeClass('active')
    $('.set-img').html('')
});
function AvanzarBalon() {    
    if($('.set-img .balon').length != 0 ){
        let currentPosition = parseInt($('.set-img.active').attr('data-id'));
        let nextId = currentPosition + 1 ;
        if(nextId <= 21){
            $('#yard-'+currentPosition).removeClass('active')
            $('#yard-'+nextId).click();
        }else{
            nextId = nextId - 1;
            console.log('mayor');
        }
    }else{
        $('#yard-1').click();   
    }  
}
function RetrocederBalon(params) {
    if($('.set-img .balon').length != 0 ){
        let currentPosition = parseInt($('.set-img.active').attr('data-id'));
        let pastId = currentPosition - 1;
        if(pastId >= 1){
            $('#yard-'+currentPosition).removeClass('active')
            $('#yard-'+pastId).click();           
        }else{
            pastId = 1;
        }
    }
}