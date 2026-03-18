/**
 * @description Funcion que obtiene la informacion de un controlador que esta comunicado con un modelo que 
 * usa un query selects *
 * @param url Contiene el url del controlador que se desee enviar la informacion u obtenerla 
 * @param token Contiene el token del meta 
*/
async function fetchData(url, token) {
  try {
      const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
        })
      const data = await res.json()
      return data;
  } catch (error) {
    console.log(error);
  }
}
/**
* @description Funcion que obtiene un elemento html
*/   
const getQueryElement = (element) =>  document.querySelector(element);  
/**
 * @description Función agrega una clase varios elementos html
*/   
const getAllElement = (element) => document.querySelectorAll(element);
/**
  * @description Funcion que añade texto a un elemento html
*/
const appendHtmltoElement = ( element , text) => element.innerHTML = text;     
/**
  * @description Funcion que otorga un atributo a un elemento html
*/
const setElementAttribute = ( element , typeAttr, attr) => document.querySelector(element).setAttribute(typeAttr, attr);     
/**
 * @description Función agrega una clase a un elemento html
 */ 
const addClassElement = (element, typeClass) => element.classList.add(typeClass);
/**
 * @description Función agrega un atributo a un elemento html
 */ 
const addAttrElement = (element, typeAttr, value) => element.setAttribute(typeAttr, value);
const addAllClass = (elements, typeClass) => {
    elements.forEach(div => {
        div.classList.add(typeClass);
    });
}
/**
 * @description Función remueve una clase de un elemento html
 */ 
const removeClass = (element, typeClass) =>  element.classList.remove(typeClass);
/**
 * @description Función que remueve una clase de varios elementos html
 */ 
const removeAllClass = (elements, typeClass) => {
    elements.forEach(div => {
      div.classList.remove(typeClass);
    });
}
/**
 * @description Función 
*/
const alertConfirmDelete = (element) => {
    alertify.confirm()
        .setting({
            'autoReset': true,
            'pinnable': false, 
            'modal': true,
            'closable': true,
            'overflow': false,
            'title': '',
            'message': '<h2 class="h4 text-center">¿Seguro que quieres eliminar el registro?</h2>',
            'labels': { ok: 'Aceptar', cancel: 'Cancelar' },
            'onshow': function(){ 
                this.elements.dialog.style.maxWidth = '500px';
                this.elements.header.style.display = 'none';
            },
            'onok': function(){ 
                element.remove()
                alertify.success('Registro eliminado');                    
            },
            'oncancel': function(){
                // 
                alertify.warning('El registro no se elimino');
            },
        }).show();
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
/**
  * @description Función que parseara una imagen a un base64
  * @param url Contiene el url de la imagen 
  * @return {Promise} Retorna una promesa con la imagen en base64
*/
const convertirImagenABase64_1 = (url) => {
    return fetch(url)
        .then(response => response.blob()) 
        .then(blob => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob); 
            });
        });
}