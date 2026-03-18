/**
 * @description Funcion que obtiene el json que contiene la informacion de los sliders del Home
*/
async function fetchData(url) {
  try {
      const res = await fetch(url)
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
 * @description Función agrega una clase a un elemento html
 */ 
const addClassElement = (element, typeClass) => element.classList.add(typeClass);
/**
 * @description 
 */ 
const addAllClass = (elements, typeClass) => {
    elements.forEach(div => {
        div.classList.add(typeClass);
    });
}
/**
 * @description Funcion que otorga un atributo a un elemento html
*/
const setElementAttribute = ( element , typeAttr, attr) => element.setAttribute(typeAttr, attr);     
const addAllElementElement = (elements, typeAttr, attr) => {
    elements.forEach(div => {
        div.setAttribute(typeAttr, attr);
    });
}
/**
* @description Funcion que agrega un texto a un elemento html
*/   
const setTextElement = (element, text) =>  element.innerText = text;
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