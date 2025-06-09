/**
* @description Funcion que obtiene un elemento html
*/   
const getQueryElement = (element) => ( document.querySelector(element) )
/**
 * @description Función agrega una clase varios elementos html
*/   
const getAllElement = (element) => ( document.querySelectorAll(element) )
/**
 * @description Función 
*/   
const setValueElement = (element, val) =>  ( element.value = val ) 
/**
 * @description Función 
*/   
const setValues = (element, val) => ( getQueryElement(element).value = val )
/**
 * @description Función 
*/   
const getValues = (element) => ( document.querySelector(element).value );
/**
 * @description Función agrega una clase a un elemento html
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
 * @description Función agrega un atributo a un elemento html
 */ 
const addAttrElement = (element, typeAttr, value) => {
    element.setAttribute(typeAttr, value);
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
 * @description Función que agrega una clase de un elementos html
 */ 
const addClassDnone = (elements) => {
    let type = typeof elements,
        element = ( type != 'string' ) ?  elements: getQueryElement(elements);
    addClassElement(element, 'd-none');
}
/**
 * @description Función que remueve una clase de un elementos html
 */ 
const removeClassDnone = (elements) => {
    let type = typeof elements,
        element = ( type != 'string' ) ?  elements: getQueryElement(elements);
    removeClass(element, 'd-none');
}
/**
 * @description Función que remueve una clase de un elementos html
 */ 
const appendStyleBody = (element) => {
    let wrapper = getQueryElement('#wrapper'),
        style = getQueryElement('#color_bar_title');
        style.innerHTML = element;
        wrapper.append(style);
}
/**
 * @description Función que escala al doble la fuente para la imagen final
 */ 
const multiplyFontSize = (value, increase) => {
    let font_size = parseInt(value) / 16
    return `${ ( parseFloat(font_size.toFixed(2) )  * increase )}rem`;
}
/**
 * @description Función que agrega una clase a varios elementos html
 */ 
const addAllClassDnone = (elements) => {
    let type = typeof elements,
        elements_ = elements = ( type != 'string' ) ?  elements : getAllElement(elements);
        elements_.forEach(div => {
            div.classList.add('d-none');
        });
}
/**
 * @description Función que elimina una clase de varios elementos html
 */ 
const removeAllClassDnone = (elements) => {
    let type = typeof elements,
        elements_ = elements = ( type != 'string' ) ?  elements : getAllElement(elements);
        elements_.forEach(div => {
            div.classList.remove('d-none');
        });
}
/**
 * @description Función que agrega una clase a varios elementos html
 */ 
const addTextElement = (elements, txt) => {
    let type = typeof elements,
        elements_ = elements = ( type != 'string' ) ?  elements : getQueryElement(elements);
        elements_.innerHTML = txt;
};
/**
 * @description Función que agrega una clase a varios elementos html
 */ 
const addTextAllElements = (elements, txt) => {
    let html = getAllElement(elements);
        html.forEach(ele => {
            ele.innerHTML = txt;
        });    
};