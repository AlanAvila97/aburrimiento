const spelling = jsonSpelling();
let wordsEnglish = [];
let wordsEspanish = [];
$.each(spelling, function(key, data){
  if(key == 0 ){
    $('body').attr('data-index', key );
  }
  wordsEnglish.push(this.ingles);
  wordsEspanish.push(this.spanish);
});

let count = parseInt( $('body').attr('data-index') );

$(document).ready(function() {
  $('#WordEnglish').val(wordsEnglish[0]);
  // $('#WordSpanish').val(wordsEspanish[0]);
  $('#HiddenWordSpanish').html(wordsEnglish[0]);  
  $(document).keyup(function(event) {
    if (event.which === 40) {
      count = count + 1;
      wordsSpelling(count, wordsEnglish, wordsEspanish, 0);
    }else if(event.which === 38){
      count = count - 1;
      wordsSpelling(count, wordsEnglish, wordsEspanish, 0);
    }
  });
});
function cleaninputs() {
    $('#WordEnglish').val('');
    $('#WordSpanish').val('');
    $('#HiddenWordSpanish').html('');
}
function wordsSpelling( index, wordsEnglish, wordsEspanish, status) {
  cleaninputs();
  // 
  let EValue = wordsEnglish[index];
  let SValue = wordsEspanish[index];
  // 
  $('#WordEnglish').val(EValue);
  $('#WordSpanish').val(SValue);
  $('#HiddenWordSpanish').html(EValue);
  $('#WordEnglish').addClass('d-none');
  $('.img-logo').removeClass('d-none');
}
$("body").on("click", ".container-info-game .info", function(){
  let status = $(this).attr('data-status');  
  if(status == '0'){
    $(this).attr('data-status', 1)
    $('.img-logo').addClass('d-none');
    $('#WordEnglish').removeClass('d-none');
  }else{
    $(this).attr('data-status', 0);
    $('.img-logo').removeClass('d-none');
    $('#WordEnglish').addClass('d-none');
  }
});;
$("body").on("click", ".btn-action", function(){
  let status = $(this).attr('data-action')
  switch (status) {
    case '1':
      count = count - 1;
      wordsSpelling(count, wordsEnglish, wordsEspanish, 0);
      break;
    case '2':
      count = count + 1;
      wordsSpelling(count, wordsEnglish, wordsEspanish, 0);
      break;
    case '3':
      $('#WordEnglish').removeClass('d-none');
      $('.img-logo').addClass('d-none');
      // showQuestion(count, respuesta, pregunta);
      break;
    case '4':
      $('#WordEnglish').addClass('d-none');
      $('.img-logo').removeClass('d-none');
      // showQuestion(count, respuesta, pregunta);
      break;
  }
});
function jsonSpelling(){       
  var spelling = $.ajax({ 
      url: 'https://admino.fabricaapps.com/public/horar?parametro=25', 
      async: false
  });
  return spelling.responseJSON;
}