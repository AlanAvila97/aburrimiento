/**
  * @description Funcion que identifica la medida de la pantalla de donde se esta visualizando el sitio
  * Cierra el menu desplegable del desktop o cierra el menu de hamburguesa de movile
*/
const HamburguerMenu = getQueryElement('#openSidebarMenu')
function toggleElementOnResize(HamburguerMenu, breakpoint) {

    function checkWidth() {
        if (window.innerWidth <= breakpoint) {    
            HamburguerMenu.checked = false;
        }else{
            HamburguerMenu.checked = false;
        }
    }
    // 
    window.addEventListener('resize', checkWidth);
    checkWidth();
}
// 
const initGallery = (params) => {
     try {
        Fancybox.bind("[data-fancybox]", {
            // tu configuración
        });
    } catch (error) {
        console.log('Fancybox no pudo inicializarse:', error.message);
    }
}
/**
  * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
  * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
  * @return {textParser} Retorna la cadena parseada
*/
function parseoTexto(cadena) {
	let txt = String(cadena);
        txt = txt.toLowerCase();
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
	var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\-=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
	return outString;
}
//
document.addEventListener('DOMContentLoaded', function(event) {    
    toggleElementOnResize(HamburguerMenu, 991);
    initGallery();
});