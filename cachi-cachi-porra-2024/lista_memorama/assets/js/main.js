/**
 * @description Funcion que obtiene los parametros de la url para determinar la señal
*/
const readUrl = () => {
    // let actual = window.location+'';
    // var split = actual.split("/");
    // var split = actual.split("?");
    // var split = actual.split("=");
    // var slug = split[split.length-1];
    // return slug;
    const urlObj = new URL(window.location.href);
    // Obtener el parámetro 'video'
    const bloque = urlObj.searchParams.get("bloque");

    console.log(bloque.length);
}
const getExercises = async(url) => {
    let bloque = readUrl('');

    // try {
    //   const res = await fetch(url);
    //   const val = await res.json();
    // //   let total = data.filter(data => data.estatus != 1 );
    //   console.log(data.filter(data => data.bloque == 1 ));  
    //   return val;
    // }
    // catch (error) {
    //     // alert(error)
    //     console.log(error)
    // }
}
const getElement = (element) => {
    return document.querySelector(element)
};
const getAllElement = (element) => {
    return document.querySelectorAll(element)
}
const setTextElement = (element, text) => {  
  element.innerHTML = text;
}
const setItemList = async() => {
  let html = '', 
      url = 'https://admino.fabricaapps.com/rest/memorama',      
      content_items = getElement('.section-list .container-list');
//   let info = await getExercises(url);
//       info.forEach((element, key) => {
//         let id = key + 1; 
//         html += '<div class="item-list d-flex" id="1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" '+
//                     'data-id="'+id+'" data-title="Titulo '+id+'" data-desc="">'+
//                     '<span>'+key+'.-</span>'+
//                     '<h1>Titulo</h1>'+
//                 '</div>';
//       });
    // for (let index = 1; index < 11; index++) {
    //     html += '<div class="item-list d-flex" id="1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" '+
    //             'data-id="'+index+'" data-title="Titulo '+index+'" data-desc="">'+
    //             '<span>'+index+'.-</span>'+
    //             '<h1>Titulo</h1>'+
    //         '</div>';
    // }
    content_items.innerHTML = html;
    clickItem();
}
const showInfoModal = (e) => {
    let id = e.target.dataset.id;
    let titulo = e.target.dataset.title;
    let desc = e.target.dataset.desc;
    const content_title = getElement('.title-item');
    const content_desc = getElement('.content-desct-item');
    //   
    setTextElement(content_title, titulo);
    setTextElement(content_desc, desc);
}
const clickItem = () => {
    const item_list = getAllElement('.item-list');
    // 
    item_list.forEach(item => {
        item.addEventListener("click", showInfoModal) 
    });  
}
// 
document.addEventListener("DOMContentLoaded", function(event) {   
    // 
    setItemList();
    readUrl();
});