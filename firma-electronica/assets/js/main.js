const debounce = (func, wait, immediate = false) => {
    let timeout;
    return function (...args) {
      const context = this;

      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
}
/**
* @description Funcion que obtiene un elemento html
*/   
const getElement = (element) =>  document.querySelector(element);  
/**
 * @description Función agrega una clase varios elementos html
*/   
const getAllElement = (element) => document.querySelectorAll(element);
const addAllClass = (elements, typeClass) => {
    elements.forEach(div => {
        div.classList.add(typeClass);
    });
}
const addAllAttributes = (elements, typeAttr, attr) => {
  elements.forEach(div => {
    div.setAttribute(typeAttr, attr);
  });
}
/**
 * @description Función remueve una clase de un elemento html
 */ 
const removeClass = (element, ...typeClass) =>  element.classList.remove(...typeClass);
/**
 * @description Función que remueve múltiples clases de varios elementos html
 * @param {NodeList|Array} elements - Elementos HTML
 * @param {string|string[]} classes - Clase única o array de clases
 */
const removeAllClass = (elements, classes) => {
    const classArray = Array.isArray(classes) ? classes : [classes];
    
    elements.forEach(element => {
        element.classList.remove(...classArray);
    });
};
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