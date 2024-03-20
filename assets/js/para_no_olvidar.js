/**
* @description Inicialización de Sliders para las galerias 
*/   
var optionsSliders = {

}
var PrimerSwiper = new Swiper(".slider-primera-capsula", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    rewind: true,
    mousewheel: true,
    keyboard: true,
    grabCursor: true,
    preloadImages: false,
    resizeObserver: true, 
    breakpoints: {
        300: {
            slidesPerView: "auto",
        },
        310: {
            slidesPerView: "auto",
        },
        320: {
            slidesPerView: "auto",
        },
        480: {
            slidesPerView: "auto",
        },
        500: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3,
        },
        2100: {
            slidesPerView: 3,
        },
    },
});
var SegundoSwiper = new Swiper(".slider-segunda-capsula", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    rewind: true,
    mousewheel: true,
    keyboard: true,
    grabCursor: true,
    preloadImages: false,
    resizeObserver: true, 
    breakpoints: {
        300: {
            slidesPerView: "auto",
        },
        310: {
            slidesPerView: "auto",
        },
        320: {
            slidesPerView: "auto",
        },
        480: {
            slidesPerView: "auto",
        },
        500: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3,
        },
        2100: {
            slidesPerView: 3,
        },
    },
});
var TercerSwiper = new Swiper(".slider-tercer-capsula", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    rewind: true,
    mousewheel: true,
    keyboard: true,
    grabCursor: true,
    preloadImages: false,
    resizeObserver: true, 
    breakpoints: {
        300: {
            slidesPerView: "auto",
        },
        310: {
            slidesPerView: "auto",
        },
        320: {
            slidesPerView: "auto",
        },
        480: {
            slidesPerView: "auto",
        },
        500: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3,
        },
        2100: {
            slidesPerView: 3,
        },
    },
});
/**
* @description Funcion que obtiene un elemento html
*/   
const getElement = (element) => {
    return document.querySelector(element);
}  
/**
 * @description Función agrega una clase varios elementos html
*/   
const getAllElement = (element) => {
    return document.querySelectorAll(element);
}
/**
 * @description Función 
*/ 
const addClassElement = (element, typeClass) => {
    element.classList.add(typeClass);
}
/**
 * @description Función que remueve una clase de varios elementos html
*/ 
const addAllClass = (elements, typeClass) => {
    elements.forEach(div => {
        div.classList.add(typeClass);
    });
}
/**
 * @description Función remueve una clase de un elemento html
*/ 
const removeClass = (element, typeClass) => {
    element.classList.remove(typeClass);
}
/**
 * @description Función que remueve una clase de varios elementos html
*/ 
const removeAllClass = (elements, typeClass) => {
    elements.forEach(div => {
        div.classList.remove(typeClass);
    });
}
/**
 * @description Función para hace un scroll a una seccion del index (Contacta, Experiencias)
*/ 
const scrollSection = (element, numTop) => {
    let scrollElement =  element.offsetTop;
    let posicionElement = String(scrollElement - numTop);
        window.scroll({
                        top: posicionElement,
                        behavior: 'smooth'
                        });
}
/**
 * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
 * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
 * @return {textParser} Retorna la cadena parseada
*/
const parseoTexto = (cadena) => {
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
const eliminarAcentos = (cadena) => {
    var chars={
        "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
        "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u",
        "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
        "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U"}
    var expr = /[áàéèíìóòúùñ]/ig;
    var res = cadena?.replace(expr,function(e){return chars[e]});
    return res; 
}
/**
 * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
 * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
 * @return {textParser} Retorna la cadena parseada
*/ 
const eliminarCaracteres = (cadena) => {
    var outString = cadena.replace(/[`~!¡´@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return outString;
}
/**
 * @description Función que activa la navegacion anterior en un slider en especifico
 * @param cadena Contiene la informacion del div el cual contiene la capsula del slider
*/ 
const navigationSlidersPrev = (e) => {
    let capsula = e.target.dataset.capsula;
    switch (capsula) {
        case '1':
            PrimerSwiper.slidePrev(500);    
            break;
        case '2':
            SegundoSwiper.slidePrev(500);                
            break;
        case '3':            
            TercerSwiper.slidePrev(500);    
            break;
    }
}
/**
 * @description Función que activa la navegacion siguiente en un slider en especifico
 * @param cadena Contiene la informacion del div el cual contiene la capsula del slider
*/ 
const navigationSlidersNext = (e) => {
    let capsula = e.target.dataset.capsula;
    switch (capsula) {
        case '1':
            PrimerSwiper.slideNext(500);    
            break;
        case '2':
            SegundoSwiper.slideNext(500);                
            break;
        case '3':            
            TercerSwiper.slideNext(500);    
            break;
    }
}
const $SlidePrev = getAllElement('.navigation-left');
const $SlideNext = getAllElement('.navigation-right');
$SlidePrev.forEach((btn) =>{
    btn.addEventListener('click', navigationSlidersPrev);
});
$SlideNext.forEach((btn) =>{
    btn.addEventListener('click', navigationSlidersNext);
});
document.addEventListener("DOMContentLoaded", function(event) {   
    console.log('ass');
});