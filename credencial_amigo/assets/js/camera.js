const tieneSoporteUserMedia = () =>
    !!(navigator.getUserMedia || (navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia) || navigator.webkitGetUserMedia || navigator.msGetUserMedia)
const expresiones = {
    Nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    Correo: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
}    
const getElement = (id, ele) => {
    return document.querySelector('#'+id+' '+ele);
}
const getValues = (element) => {
    return  document.querySelector('.'+element).value;
}
/**
* @description Funcion que obtiene un elemento html
*/   
const getQueryElement = (element) => {
    return document.querySelector(element);
  } 
/**
 * @description Función agrega una clase a un elemento html
 */ 
const addClassElement = (element, typeClass) => {
    element.classList.add(typeClass);
}
/**
 * @description Función remueve una clase de un elemento html
 */ 
const removeClass = (element, typeClass) => {
    element.classList.remove(typeClass);
}
let body = document.querySelector('html');      
const $video = document.querySelector("#video"),
      $boton = document.querySelector("#boton"),
      $btn_back_credential = document.querySelector("#btn_back_credential"),
      $canvas = document.querySelector("#canvas"),
      $form = document.querySelector("#form_diploma"),
      $boton_reload = document.querySelector("#reload_boton"),
      $boton_clean = document.querySelector("#boton-clean"),
      $boton_upload = document.querySelector("#upload_picture"),
      $input_foto_tomada = document.querySelector("#Foto_Tomada"),
      $foto_tomada = document.querySelector(".foto-tomada"),
      $input = document.querySelectorAll(".info-user-diploma"),
      $select = document.querySelector(".color-credencial"),
      $content_video = document.querySelector(".live-camera"),
      $preload = document.querySelector(".preloader"),
      $close = document.querySelector("#close-form"),
      $content_live_camera = document.querySelector(".section-picture .contentainer-diploma .bg-diploma .form-diploma .camera .live-camera"),
      $overlay = document.querySelector(".section-picture .contentainer-diploma .bg-diploma .form-diploma .camera .overlay-camera");
// 
const constraints = {
    video: { facingMode: 'user', width: 420, height: 340 },
    audio: false,
};
const getVideo = async () => {
    if (!tieneSoporteUserMedia()) {
        alert("Lo siento. Tu navegador no soporta esta característica");
        return;
    }
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSucces(stream);
    } catch (error) {
        console.log(error);
    }
};
const handleSucces = (stream) => {
    video.srcObject = stream;
    video.play();
};
const takePicture = () => {
    let contexto = $canvas.getContext("2d");
    $canvas.width = $video.videoWidth;
    $canvas.height = $video.videoHeight;
    contexto.drawImage($video, 0, 0, $canvas.width, $canvas.height);
    // 
    let foto = $canvas.toDataURL(); //Esta es la foto, en base 64
    showPicture(foto)
    $boton.disabled = true;
    $boton_clean.disabled = false;
}
const showPicture = (picture ) => {
    addClassElement($overlay, 'd-none');
    actionFoto(1);
    $foto_tomada.dataset.foto = picture;
}
const cleanFoto = () => {
    actionFoto(2);    
    $foto_tomada.dataset.foto = '';
}
const actionFoto = (type) => {
    // 
    if(type === 1) {
        addClassElement($video, 'd-none')
        removeClass($canvas, 'd-none');
    }else{
        addClassElement($canvas, 'd-none')        
        removeClass($video, 'd-none')
    }    
} 
const validarCaracteresInput = (expresion, input, campo) => {
    if(expresion.test(input.value)){
    getElement(campo, '').classList.remove('input-value-incorrect');
    getElement(campo, '').classList.add('input-value-correct');
    } else {
    getElement(campo, '').classList.add('input-value-incorrect');
        getElement(campo, '').classList.remove('input-value-correct');
    }
}
const validarCaracteres = (e) =>{
    switch (e.target.name) {
        case 'NameUser':
            validarCaracteresInput(expresiones.Nombre, e.target, 'NameUser');			
            break;									
        case 'EmailUser':
            validarCaracteresInput(expresiones.Correo, e.target, 'EmailUser');			
            break;		
    }
}
const closeForm = () => {  
    let content = document.querySelector('.section-credential-user');
    let live_camera = document.querySelector('.section-picture .contentainer-diploma .bg-diploma .form-diploma .camera .live-camera');
        live_camera.style.backgroundImage = "url()";
    let content_credentials = getQueryElement('.content-credential')
    let content_selection = getQueryElement('.container-selection');
    let content_selection_child = getQueryElement('.container-selection .alert-selection');
    // 
    resetVideo();
    // addClassElement(counter_download, 'd-none');
    // counter_download.setAttribute('style', '')
    addClassElement(content, 'd-none');
    removeClass($overlay, 'd-none');
    setTimeout(() => {
        removeClass(content_credentials, 'animate__bounceOut')        
        content_selection_child.classList.add('animate__animated', 'animate__tada');
        content_credentials.classList.add('animate__animated', 'animate__backInDown');
    }, 300);    
    setTimeout(() => {      
        removeClass(content_selection, 'd-none');
        removeClass(content_credentials, 'd-none')
    }, 600); 
    getCountDownLoad();
}
const changeColorCredential = (e) => {
    let credencial = document.querySelector('.section-credential-user .container-credential-user .credential');
        credencial.setAttribute('style', 'background-image: url(assets/image/'+e.target.value+'.jpg)!important;')
}
const alertImage = () => {
    let content = document.querySelector('.section-alert');
    removeClass(content, 'd-none');
    setTimeout(function(){
        addClassElement(content, 'd-none');
    }, 3000);
}
$boton.addEventListener("click", takePicture );
$close.addEventListener("click", closeForm );
$select.addEventListener("change", changeColorCredential );
$boton_clean.addEventListener("click", function() {
    let contexto = $canvas.getContext("2d");
    $canvas.width = $video.videoWidth;
    $canvas.height = $video.videoHeight;                    
    contexto.clearRect(0, 0, $canvas.width, $canvas.height);
    // 
    cleanFoto();          
    removeClass($overlay, 'd-none');
    $boton.disabled = false;
    $boton_clean.disabled = true;
    // 
    $video.play();
});
$boton_upload.addEventListener("click", function(){ 
    var element = document.getElementById("TableImage"); 
        element.addEventListener("change", function(){ 
            console.log(this);
            cleanFoto()
            addClassElement($boton, 'd-none');
            addClassElement($video, 'd-none');
            addClassElement($overlay, 'd-none');
            addClassElement($canvas, 'd-none');
            removeClass($boton_reload, 'd-none')
            var portada = document.getElementById("TableImage").files[0];
            var reader = new FileReader();
                reader.readAsDataURL(portada);
                reader.onload = function (e) {
                    $video.pause();
                    $content_live_camera.setAttribute('style', 'background-image: url('+e.target.result+')!important; background-size: contain; background-repeat: no-repeat; background-position: center; width: 100%; height: 200px;');       
                    $foto_tomada.dataset.foto = e.target.result;
                }
        });
        element.click();
});
$boton_reload.addEventListener("click", function(){ 
    cleanFoto();
    removeClass($boton, 'd-none');
    removeClass($video, 'd-none');
    removeClass($overlay, 'd-none');
    addClassElement($boton_reload, 'd-none')
    $boton.disabled = false;
    $boton_clean.disabled = true;
    $video.play();
    $content_live_camera.setAttribute('style', '');
    var element = document.getElementById("TableImage"); 
    var elementHidden = document.getElementById("HidenTblImage"); 
        element.value = '';
        elementHidden.value = '';
});
$input.forEach((input) =>{
    input.addEventListener('keyup', validarCaracteres);
});   
$form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = getElement('NameUser', '').value;
    let color = document.querySelector('#Color_Credencial').value;
    let foto = $foto_tomada.dataset.foto;
    // 
    filterNameCredential(color);
    let content_form = getQueryElement('.bg-diploma');
    // 
    if(foto != ''){
        addClassElement(content_form, 'd-none')
        downloadDiploma(nombre, foto, color);
    }else{
        alertImage();
    }
});
$btn_back_credential.addEventListener("click", function(){
    let content = document.querySelector('.bg-diploma');
    let content_credentials = getQueryElement('.content-credential');
    let content_selection = getQueryElement('.container-selection');
    // 
    addClassElement(content, 'd-none');
    
    setTimeout(() => {
        removeClass(content_selection, 'd-none')
        removeClass(content_credentials, 'animate__bounceOut')
        content_credentials.classList.add('animate__animated', 'animate__backInDown');
    }, 300);    
    setTimeout(() => {            
        removeClass(content_credentials, 'd-none')
    }, 600); 
});
function filterNameCredential(name) {
    let credencial_name = document.querySelector('.section-credential-user .container-credential-user .credential #logo_type_credential');
    switch (name) {
        case 'credencial_edi_nino':
            credencial_name.setAttribute('src', 'assets/image/logo_AMIGON.png')
            break;
        case 'credencial_edi_nina':
            credencial_name.setAttribute('src', 'assets/image/logo_AMIGONA.png')            
            break;    
        default:
            break;
    }
}
function downloadDiploma(name, picture, color) {
    let ContainerDiploma =  document.querySelector('.section-credential-user');
    let Credencial =  document.querySelector('.container-credential-user .credential');
    let foto =  document.querySelector('.section-credential-user .credential .foto');
    let nombre =  document.querySelector('.section-credential-user .credential .name');
        removeClass(ContainerDiploma, 'd-none');
        foto.innerHTML = `<img src="${picture}" alt="Credencial" class="" srcset="" >`;
        nombre.innerHTML = `<h2>${name}</h2>`;
        html2canvas(Credencial, {
            width: 600,
            height: 1000, 
            windowWidth: 600,
            windowHeight: 1000,
            onclone: function (clonedDoc) { 
                // 
                clonedDoc.querySelector('.container-credential-user .credential').setAttribute('style', 'width: 600px!important; height: 1000px!important; max-height:1400px!important; padding-top: 100px!important; gap: 2rem!important; display: flex!important; flex-direction: column!important; align-items: center!important;');
                // 
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .logos-onn .logo_onn').style.height = "100px";
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .logos-onn .logo_onn').style.maxHeight = "100%";

                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .logos-onn .logo_SOMOS_FAMILIA').style.height = "100px";
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .logos-onn .logo_SOMOS_FAMILIA').style.maxHeight = "100%";
                // 
                clonedDoc.querySelector('.section-credential-user .credential .foto').style.width = "220px";
                clonedDoc.querySelector('.section-credential-user .credential .foto').style.height = "250px";
                // 
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .content-name').setAttribute('style', 'gap: 1rem!important;');
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .content-name .txt-mi-nombre').style.maxHeight = "30px";
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .content-name .name h2').style.fontSize = "1.6rem";                
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .content-name .txt-parte').style.maxHeight = "40px";
                // 
                clonedDoc.querySelector('.section-credential-user .container-credential-user .credential .type-credential .txt-onn').style.maxHeight = "70px";
            }
        }).then(canvas => {
          var a = document.createElement('a');
          let btn_download = getQueryElement('#btn-download-form');
          btn_download.href = canvas.toDataURL();
          btn_download.download = `credencial_${parseoTexto(name)}_.jpg`;
          a.href = canvas.toDataURL();
          a.download = `credencial_${parseoTexto(name)}_.jpg`;
          a.click();
          updateCountDownLoad();
        });
}
/**
  * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
  * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
  * @return {textParser} Retorna la cadena parseada
*/
function parseoTexto(cadena) {
	let txt = String(cadena);
	let textParser = txt.replaceAll(' ', '-');
		  textParser = textParser.toLowerCase();
		  textParser = eliminarAcentos(textParser);
	return eliminarCaracteres(textParser);
}
/**
  * @description Función que parsea una cadena eliminando acentos
  * @param cadena Contiene la cadena con caracteres acentos
  * @return {res} Retorna la cadena parseada
*/
function eliminarAcentos(cadena) {
	var chars={
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
		"À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"};
	var expr=/[áàéèíìóòúùñ]/ig;
	var res=cadena.replace(expr,function(e){return chars[e]});
	return res;
}
/**
  * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
  * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
  * @return {textParser} Retorna la cadena parseada
*/
function eliminarCaracteres(cadena){
	var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
	return outString;
}
function resetVideo() {
    cleanFoto()
    $video.play();
    $boton.disabled = false;
    $boton_clean.disabled = true;
}
function completeSelectCredential(value) {
    let input_credential = getQueryElement('#Color_Credencial');
    let options = ( value == "Amigon" ) 
                                        ? '<option value="credencial_edi_nino" selected>Amigon</option>'+
                                          '<option value="credencial_edi_nina">Amigona</option>' 
                                        : '<option value="credencial_edi_nino">Amigon</option>'+
                                          '<option value="credencial_edi_nina" selected>Amigona</option>';
        input_credential.innerHTML = options;
}
function updateCountDownLoad() {
    // 
    $.getJSON('https://admino.fabricaapps.com/prodes/show?parametro=39', function(data){
        // $('#counter_download').html(`SOMOS: <span>${data[0].contador} </span>`)
        $('#counter_download_movile').html(`SOMOS: <span>${data[0].contador} </span>`)
        // console.log(data);
    });    
}
function getCountDownLoad() {
    $.getJSON('https://admino.fabricaapps.com/rest/descargas', function(data){
        // $('#counter_download').html(`SOMOS: <span> ${data[0].contador} </span>`)
        $('#counter_download_movile').html(`SOMOS: <span> ${data[0].contador} </span>`)
    });    
}
$("body").on("click", "#btn-download-form", function(){
    updateCountDownLoad();
});
$("body").on("click", ".credential", function(){
    addClassElement(body, 'body-overflow')
    let value_credential = $(this).attr('data-credencial');    
    let content_credentials = getQueryElement('.content-credential')
        content_credentials.classList.add('animate__animated', 'animate__bounceOut');
    let content_form = getQueryElement('.bg-diploma');
    let content_selection = getQueryElement('.container-selection');
        // 
        completeSelectCredential(value_credential);
        addClassElement(content_selection, 'd-none')
        // 
        setTimeout(() => {
            addClassElement(content_credentials, 'd-none')
        }, 500);    
        setTimeout(() => {            
            content_form.classList.add('animate__animated', 'animate__backInDown');
            removeClass(content_form, 'd-none')
        }, 800);    
        addClassElement(body, 'body-overflow');    

});
window.onload = function() {
    $preload.classList.add('d-none');
    getVideo();
    getCountDownLoad();
};