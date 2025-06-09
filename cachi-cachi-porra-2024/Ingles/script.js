const Bailamos = jsonBailamos();
$.each(Bailamos, function(){    
  $('body').attr('data-index', this.orden );
});
let count = parseInt( $('body').attr('data-index') );

$(document).ready(function() {
  preguntasBailamos(count);
});

function preguntasBailamos(count) {

  let i = 1;
  let r = 2;
  let pregunta = '';
  let respuesta = '';
  $('.content-game .container-info-game .info').html('');
  $.each(Bailamos, function(){    
    if(this.orden == count){
      let classQ = (i == 1) ? 'active' : 'd-none';
          pregunta = '<h1 id="question-'+i+'" class="p-'+r+' question '+classQ+'" data-indice="'+i+'">'+this.pregunta+'</h1>';
          respuesta = '<h1 id="answer-'+i+'" class="a-'+r+' answer '+classQ+'" data-indice="'+r+'">'+this.respuesta+'</h1>';
          respuestaOculta = '<h1 id="answer-hidden-'+i+'" class="a-h-'+r+' answer-hidden '+classQ+'" data-indice="'+r+'">'+this.respuesta+'</h1>';    
          $('.content-game .container-info-game .info').append(pregunta);
          $('.content-game .container-info-game .info').append(respuesta);
          $('.content-game .container-info-game .info').append(respuestaOculta);
          r++;
          i++;
    }
  });

}

$(document).keyup(function(event) {
  let pregunta = $('body .content-game .question.active').attr('data-indice');
  let respuesta = $('body .content-game .answer.active').attr('data-indice');
  $('body .content-game #answer-hidden-'+pregunta).addClass('d-none');

  if (event.which === 13) {    
    showQuestion(count, respuesta, pregunta);
  }else if (event.which === 40) {
    count = count + 1;
    $('body').attr('data-index', count);
    preguntasBailamos(count);  
      
  }else if (event.which === 38) {
    count = count - 1;
    $('body').attr('data-index', count);
    preguntasBailamos(count);  
  }else if (event.which === 82) {    
    showQuestion(count, respuesta, pregunta);
  }
});
$("body").on("click", ".btn-action", function(){
  let status = $(this).attr('data-action')
  let pregunta = $('body .content-game .question.active').attr('data-indice');
  let respuesta = $('body .content-game .answer.active').attr('data-indice');
  $('body .content-game #answer-hidden-'+pregunta).addClass('d-none');
  switch (status) {
    case '1':
      count = count - 1;
      $('body').attr('data-index', count);
      preguntasBailamos(count);  
      break;
    case '2':
      count = count + 1;
      $('body').attr('data-index', count);
      preguntasBailamos(count);  
      break;
    case '3':
      showQuestion(count, respuesta, pregunta);
      break;
  }
});
$("body").on("click", ".container-info-game .info", function(){
  let status = $(this).attr('data-status'); 
  let pregunta = $('body .content-game .question.active').attr('data-indice');
  let respuesta = $('body .content-game .answer.active').attr('data-indice'); 
    showQuestion(count, respuesta, pregunta);
});;
function showQuestion(indexBody, respuesta, pregunta) {
  $('body .content-game #question-'+pregunta).remove();
  $('body .content-game #answer-'+pregunta).attr('style','display: block;');

}
function deleteQuestion(indexBody, respuesta, pregunta) {
  $('body .content-game h1.a-'+respuesta).remove();
}
function jsonBailamos(){       
  var bailamos = $.ajax({ 
      url: 'https://admino.fabricaapps.com/rest/gato', 
      async: false
  });
  return bailamos.responseJSON;
}