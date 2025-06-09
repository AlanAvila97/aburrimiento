let data = comprobationDataLocal();
let count = parseInt( $('body').attr('data-index') );

$(document).ready(function() {
  gameQuestions();
});

function gameQuestions() {

  let i = 1, r = 2, pregunta = '', respuesta = '';
  $('.content-game .container-info-game .info').html('');

  $.each(data, function(){    
    if(this.estatus == '0'){
      let classQ = (i == 1) ? 'active' : 'd-none';
          pregunta = '<h1 id="question-'+i+'" class="p-'+r+' question '+classQ+'" data-indice="'+i+'" data-id="'+this.id+'">'+this.pregunta+'</h1>';
          respuesta = '<h1 id="answer-'+i+'" class="a-'+r+' answer '+classQ+'" data-indice="'+r+'" data-id="'+this.id+'">'+this.respuesta+'</h1>';
          respuestaOculta = '<h1 id="answer-hidden-'+i+'" class="a-h-'+r+' answer-hidden '+classQ+'" data-indice="'+r+'" data-id="'+this.id+'">'+this.respuesta+'</h1>';    
          $('.content-game .container-info-game .info').append(pregunta);
          $('.content-game .container-info-game .info').append(respuesta);
          $('.content-game .container-info-game .info').append(respuestaOculta);
          r++;
          i++;
    }
  });
}

$(document).keyup(function(event) {
  switch (event.which) {
    case 13: // Tecla enter
      console.log('enter');
      let current_count = parseInt($('body').attr('data-index'));
      showAnswer(current_count, 'd-none', 'd-none', 'd-block');  
      break;
    case 82: // Tecla R
      console.log('enter');
      let current_count_r = parseInt($('body').attr('data-index'));
      showAnswer(current_count_r, 'd-none', 'd-none', 'd-block');  
      break;
    case 37: // Flecha hacia derecha 
      console.log('prev');
      actionShowPrevQuestions();
      break;
    case 39: // Flecha hacia izquierda
      console.log('next');
      actionShowNextQuestions();
      break;
  }
});
$("body").on("click", ".btn-action", function(){
  let status = $(this).attr('data-action');
  switch (status) {
    case '1':
      actionShowPrevQuestions();
      break;
    case '2':
      actionShowNextQuestions();
      break;
    case '3':
      let current_count = parseInt($('body').attr('data-index'));
      showAnswer(current_count, 'd-none', 'd-none', 'd-block');  
      break;
  }
});
function actionShowPrevQuestions() {
  count = (count > 1) ? count - 1 : 1; 
  let old_count_p = parseInt($('body').attr('data-index'));
  showPrevQuestion(old_count_p);  
  $('body').attr('data-index', count);
  updateQuestion(count, 0);
}
function showPrevQuestion(old_count) {
  if(count >= 1 && old_count != 1){
    actionsQuestions(count, 'active', 'd-none')
    actionsQuestions(old_count, 'd-none', 'active')
    actionsQuestions(old_count, 'd-none', 'd-block')
  }
}
function actionShowNextQuestions() {
  let old_count_n = $('body').attr('data-index');
  count = (count < data.length) ? count + 1 : data.length + 1;
  $('body').attr('data-index', count);
  showNextQuestion(old_count_n);  
  updateQuestion(old_count_n, 1);
}
function showNextQuestion(old_count) {
  if(count <= data.length){
    actionsQuestions(old_count, 'd-none', 'active')
    actionsQuestions(old_count, 'active', 'd-block')
    actionsQuestions(count, 'active', 'd-none')
  }
}
function showAnswer(action_count, add_class, remove_class, add_class_answer) {
  addClassElement('#question-'+action_count, add_class);
  addClassElement('#answer-hidden-'+action_count, add_class);  
  removeClassElement('#answer-'+action_count, remove_class);
  addClassElement('#answer-'+action_count, add_class_answer);  
}
function updateQuestion(id_count, new_val) {
  if(id_count <= data.length) {  
    let id_element = getElement('#question-'+id_count).attr('data-id');
    updateLocal(id_element, new_val)
  }else{
    updateLocal(id_count, new_val)
  }
  // 
  let formData = new FormData();
      formData.append('id', id_count);
      formData.append('funcion', 'actualizandocachi');
  $.ajax({
    url: 'https://admino.fabricaapps.com/especialfive',
    method:"POST",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success:function(reply) {
      try {
        console.log(reply);
        // var json_info = JSON.parse(reply);
        // if (json_info.Status) {            
        // }else{
        //   // alertify.error(input.Message);
        // }
      } catch(e) {
        console.log("error: " + e);
        console.log("reply: " + reply);
      }
    }
  });	
}
function updateLocal(id, new_val) {
  const newTodo =  data.map(data => data.id === id ? {...data, estatus: new_val} : data );
  localStorage.setItem("Cachi_Ingles", JSON.stringify( newTodo )) 
  data = JSON.parse(localStorage?.getItem("Cachi_Ingles"));
  // console.log(JSON.parse(localStorage?.getItem("Cachi_Ingles")));
}
function comprobationDataLocal() {
  let data = null;
  if(JSON.parse(localStorage?.getItem("Cachi_Ingles")) == null) {
    localStorage.setItem("Cachi_Ingles", JSON.stringify( jsonData() )) 
    data = jsonData();
    console.log('vacio');
  }else{
    console.log('lleno');
    data = JSON.parse(localStorage?.getItem("Cachi_Ingles")) ; 
  }
  return data;
}
function actionsQuestions(action_count, add_class, remove_class) {
  addClassElement('#question-'+action_count, add_class)
  addClassElement('#answer-'+action_count, add_class)
  addClassElement('#answer-hidden-'+action_count, add_class)

  removeClassElement('#question-'+action_count, remove_class)
  removeClassElement('#answer-'+action_count, remove_class)
  removeClassElement('#answer-hidden-'+action_count, remove_class)
}
function getElement(element) {
  return $('body .content-game '+element);
}
function removeClassElement(element, classElement) {
  return $('body .content-game '+element).removeClass(classElement);
}
function addClassElement(element, classElement) {
  return $('body .content-game '+element).addClass(classElement);
}
function jsonData(){       
  var data = $.ajax({ 
      url: 'https://admino.fabricaapps.com/rest/cachi', 
      async: false
  });
  return data.responseJSON['Gato'];
}