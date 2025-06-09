const body = getQueryElement("body");
const preload = getQueryElement(".preloader-search");
const contentBtnReload = getQueryElement(".reload-form");
const btnReload = getQueryElement("#btnReload");
const btnAdd = getAllElement(".upload_image");
const btnClean = getQueryElement("#btnDeleteTableImage");
const btnCloseAlert = getQueryElement("#btn_close_alert");
const btnCloseFinalMask = getQueryElement("#close_final_mask");
const contentAlertImage = getQueryElement(".alert-image");
const contentTable = getQueryElement(".container-selection-img");
const form_label = getQueryElement("#formDesingLabel");
const form_mask = getQueryElement("#formGenerateImage");
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
 * @description Función que retrasa la activación de una función
 * @param func Contiene la función que se necesita activar
 * @param wait Tiempo que esperara la función para activarse
 * @param immediate Hace que la funcion se active de inmediatamente la primera vez y despues espere al debounce
 * 
*/ 
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
 * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
 * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
 * @return {textParser} Retorna la cadena parseada
 */
const eliminarCaracteres = (cadena) => {
    let outString = cadena.replace(/[`~!¡@#$%^&*()_|\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return outString;
}
/**
* @description Función que muestra y activa la animación del preloader
*/ 
const fadeInPreload = () => {
    addClassElement(body, 'body-overflow-hidden');
    preload.classList.remove('fade-out-search', 'd-none');
    addClassElement(preload, 'fade-in-search');
}
/**
* @description Función que oculta y desactiva la animación del preloader
* @param timer Tiempo que esperara la función para ocultarse
*/ 
const fadeOutPreload = (timer) => {
    setTimeout(() => {
        removeClass(body, 'body-overflow-hidden');
        removeClass(preload, 'fade-in-search');        
        preload.classList.add('fade-out-search', 'd-none');
    }, timer);
}
/**
* @description Función que valida la clase que asigna el font-weight del titulo o del body
* @param element Elemento html
*/ 
const validationClassFontWeight = (element) => {
    (element.classList.contains('font-weight-normal')) && removeClass(element, 'font-weight-normal');
    (element.classList.contains('font-weight-lighter')) && removeClass(element, 'font-weight-lighter');
    (element.classList.contains('font-weight-bold')) && removeClass(element, 'font-weight-bold');
}
/**
 * @description Función que cambia el font-weight del titulo o del body
*/ 
const changeFontWeight = (e) => {
    let element, element_h2;
    if(e.target.dataset.type === 'title'){
        element_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-mask h2')
        element = getQueryElement('.section-mask .container-mask .info-mask .title-mask .input-title-mask')
        validationClassFontWeight(element_h2);
        validationClassFontWeight(element);
        addClassElement(element_h2, `font-weight-${e.target.value}`);
        addClassElement(element, `font-weight-${e.target.value}`);
    }else{
        element_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-pgm h2')
        element = getQueryElement('.section-mask .container-mask .info-mask .title-pgm .text-mask')
        validationClassFontWeight(element_h2);
        validationClassFontWeight(element);
        addClassElement(element_h2, `font-weight-${e.target.value}`);
        addClassElement(element, `font-weight-${e.target.value}`);
    }
}
/**
 * @description Función que cambia el tamaño de la fuente, recibira el valor en px y lo parseara a rem
*/ 
const changeFontSize = (e) => {
    let rem = ( parseInt(e.target.value) / 16), element, elem_h2;
    if(e.target.dataset.type === 'title'){
      elem_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-mask h2')
      element = getQueryElement('.section-mask .container-mask .info-mask .title-mask .input-title-mask')
      elem_h2.style.fontSize = `${parseFloat(rem.toFixed(2))}rem`;
      element.style.fontSize = `${parseFloat(rem.toFixed(2))}rem`;
    }else{
      elem_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-pgm h2')
      element = getQueryElement('.section-mask .container-mask .info-mask .title-pgm .text-mask')
      elem_h2.style.fontSize = `${parseFloat(rem.toFixed(2))}rem`;
      element.style.fontSize = `${parseFloat(rem.toFixed(2))}rem`;
    }
}
/**
 * @description Función que cambia el color del titulo o del body
*/ 
const changeColorText = (e) => {
    let element, ele_h2;
    if(e.target.dataset.type === 'title'){
        ele_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-mask h2')
        element = getQueryElement('.section-mask .container-mask .info-mask .title-mask .input-title-mask')
        ele_h2.style.color = e.target.value;
        element.style.color = e.target.value;
    }else{
        ele_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-pgm h2')
        element = getQueryElement('.section-mask .container-mask .info-mask .title-pgm .text-mask')
        ele_h2.style.color = e.target.value;        
        element.style.color = e.target.value;        
    }
}
/**
 * @description Función asigna el texto del titulo a la imagen
*/ 
const setTitleText = (e) => {
    let text = e.target.value,
        elem_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-mask h2')
        elem_h2.innerHTML = text;
}
/**
 * @description Función asigna el texto del body a la imagen
*/ 
const setBodyText = (e) => {
    let text = e.target.value,
        elem_h2 = getQueryElement('.section-mask .container-mask .info-mask .title-pgm h2')
        elem_h2.innerHTML = text;
}
/**
 * @description Función que asigna un background-image a todos los elementos de la imagen, contentedor de titulo, contentedor de logo, contentedor de programa, contentedor de barra lateral del body
 * @param bg Contiene el background-image en formato base64 
*/ 
const setGeneralBackgrounds = (bg) => {
    let element_bg = [ 
            '.section-mask .container-mask .logo-mask',
            '.section-mask .container-mask .left-title-mask',
            '.section-mask .container-mask .info-mask .title-mask',
            '.section-mask .container-mask .info-mask .title-pgm .bar_lateral'
    ],
    attr_style = `background-image: url(${bg})!important; 
                    background-size: cover; 
                    background-repeat: no-repeat; 
                    background-position: center;`;
    //   
    element_bg.forEach(element => {
        let content = ( getQueryElement(element) != null ) ? true : false;
        (content) &&  addAttrElement(getQueryElement(element), 'style', attr_style);
    });
    setValues('#font_color_background', '#df7e01');
}
/**
* @description Función asigna un background sólido a todos los elementos de la imagen, contentedor de titulo, contentedor de logo, contentedor de programa, contentedor de barra lateral del body
* @param color Contiene el bg en hexadecimal del programa ¿
*/ 
const handleChangeBackground = (e, color) => {
    let element_bg = [ 
        '.section-mask .container-mask .logo-mask',
        '.section-mask .container-mask .left-title-mask',
        '.section-mask .container-mask .info-mask .title-mask',
        '.section-mask .container-mask .info-mask .title-pgm .bar_lateral'
    ],
    bg = (color === '') ? e.target.value : color;
    attr_style = `background:${bg}!important;`;
    // 
    element_bg.forEach(element => {
        let content = ( getQueryElement(element) != null ) ? true : false;
        (content) &&  addAttrElement(getQueryElement(element), 'style', attr_style);
    });
    
    (getQueryElement('.functions_backgrounds').classList.contains('d-none')) && 
        removeClassDnone(getQueryElement('.functions_backgrounds'));
    getQueryElement('.functions_backgrounds').dataset.bg = bg;
    getQueryElement('.functions_backgrounds').dataset.type_bg = '1';
    addAttrElement(getQueryElement('.actions-mask .configuration-mask .image_actions'), 'style', '');
    setValues('#bgElementsMask', '');
    setValues('#HidenBgElementsMask', '');
    removeClassDnone( '#text-background-image-logo');
    removeClassDnone('.btnAddBgElementsMask');
    addClassDnone('.btnEditBgElementsMask');
    addClassDnone('.btnDeleteBgElementsMask');
}
/**
 * @description Función que oculta o muestra el bg de los elementos de la imagen, contentedor de titulo, contentedor de logo, contentedor de programa, contentedor de barra lateral del body
* @param type Es el tipo de elemento al que se le retirara el bg 
*   1 -> Contenedor del Logo 
*   2 -> Contenedor del Programa izquierdo
*   3 -> Contentedor del titulo
*   4 -> Contentedor de barra lateral del body
* @param attr_style Estilos del bg que se habian asignado al inicio
* @param status Estatus del checkbox para ocultar o mostrar
*/ 
const visibilityBackgrounds = (type, attr_style, status) => {
    let style;
    switch (type) {
        case 1:
            style_hidden = (status)  ? '' : 'display: flex;';
            style = (status)  ? attr_style  : 'background: transparent; box-shadow: 6px 6px 4px 2px transparent;';
            style_input = (status)  ? '' : 'color: #000000;';
            // 
            addAttrElement(getQueryElement('.section-mask .container-mask .logo-mask'), 'style', style);
            addAttrElement(getQueryElement('.section-mask .container-mask .logo-mask i'), 'style', style_input);
            addAttrElement(getQueryElement('.bg_logo_hidden'), 'style', style_hidden);
            break;
        case 2:
            style = (status)  ? attr_style  : 'background: transparent;';
            style_input = (status)  ? '' : 'color: #000000;';
            // 
            addAttrElement(getQueryElement('.section-mask .container-mask .left-title-mask'), 'style', style);
            addAttrElement(getQueryElement('.section-mask .container-mask .left-title-mask i'), 'style', style_input);
            break;
        case 3:
            style = (status)  ? attr_style  : 'background: transparent;';
            style_input = (status)  ? '' : 'background: #000000;';
            // 
            addAttrElement(getQueryElement('.section-mask .container-mask .info-mask .title-mask'), 'style', style);
            addAttrElement(getQueryElement('.section-mask .container-mask .info-mask .title-mask .input-title-mask'), 'style', style_input);
            break;
        case 4:            
            style = (status)  ? attr_style  : 'background: transparent;';
            // 
            addAttrElement(getQueryElement('.section-mask .container-mask .info-mask .title-pgm .bar_lateral'), 'style', style);
            break;
        default:
            break;
    }
}
/**
 * @description Función que activa la visibilidad de los background de los elementos de la imagen
*/ 
const handleVisibilityBackgrounds = (e) => {
    let bg = getQueryElement('.functions_backgrounds').dataset.bg;
    let type_bg = getQueryElement('.functions_backgrounds').dataset.type_bg;    
    let attr_style = (type_bg == '0') ?
                        `background-image: url(${bg})!important; 
                         background-size: cover; 
                         background-repeat: no-repeat; 
                         background-position: center;`
                      : `background-color: ${bg};`
    if(!e.target.checked){
        visibilityBackgrounds(parseInt(e.target.value), '', e.target.checked);
    }else{
        visibilityBackgrounds(parseInt(e.target.value), attr_style, e.target.checked);
    }
}
/**
 * @description Función que oculta la imagen que alerta que hace falta una imagen de fondo inicial
*/ 
const handleHiddenAlert = () => {
    addClassDnone(contentAlertImage);
}
/**
 * @description Función recarga los formularios de generación de imagenes
*/ 
const handleReloadForm = () => {
  let status =  contentBtnReload.dataset.status;
  if(status == 1){
    removeClass(getQueryElement('.section-select-design'), 'wx-form');
    getQueryElement('#wrapper').classList.remove('pt-md-20', 'h-auto');
    removeClassDnone(form_label);
    addClassDnone(contentBtnReload);
    addClassDnone(form_mask);
    addAttrElement(contentTable, 'style', '');
    // 
    removeClassDnone('#text-table-image-logo');
    removeClassDnone('.btnAddTableImage');
    addClassDnone('.btnEditTableImage');
    addClassDnone('.btnDeleteTableImage');
    // 
    form_label.reset();
    form_mask.reset();
    contentBtnReload.dataset.status = 0;
    // 
    getQueryElement('#color_bar_title').innerHTML = '';
    $('#design-label').val('1').trigger('change');
  }else{
    removeClassDnone(contentBtnReload);
    addClassDnone(form_label);
    contentBtnReload.dataset.status = 1;
  }
  addAllClass( getAllElement('.section-mask'), 'd-none' );
}
/**
 * @description Función que subira un logo en formato base64, puede ser para el logo del programa o cambiar el logo del canal y la previsualiza en su respectivo contenedor
*/ 
const handleUploadLogo = (e) => {
    let id_element = e.target.dataset.type,     
        element = getQueryElement(`#${id_element}`),
        icon_logo = getQueryElement(`#${id_element}_cont i`),
        img_logo = getQueryElement(`#${id_element}_cont img`),
        element_hidden = getQueryElement(`#${id_element}_hidden`);
        // 
        element.addEventListener("change", function(){ 
            let portada = element.files[0];
            let reader = new FileReader();
                reader.readAsDataURL(portada);
                reader.onload = function (e) {
                    addAttrElement(img_logo, 'src', e.target.result);
                    removeClassDnone(img_logo);
                    setValueElement(element_hidden, e.target.result);
                    addClassDnone(icon_logo);
                }
        });
        element.click();
        if(id_element == 'imgLogoPrograms'){
            $('#logo_pgm_picker').val('0').trigger('change');
        }
};
/**
 * @description Función que subira un logo en formato base64 para la generación la mascara princinpal, previsualizandola en el div 
*/ 
const handleUploadImage = () => {
    let element = getQueryElement("#TableImage"); 
        element.addEventListener("change", function(){ 
            let portada = element.files[0];
            if(portada !=  undefined){
                fadeInPreload();
                let reader = new FileReader();
                    reader.readAsDataURL(portada);
                    reader.onload = function (e) {
                        addAttrElement(contentTable, 'style', 'background-image: url('+e.target.result+')!important; background-size: cover; background-repeat: no-repeat; background-position: center; height: 200px;');
                        setValues('#HidenTblImage', e.target.result);
                        fadeOutPreload(1000)
                    }
                    addClassDnone('#text-table-image-logo');
                    addClassDnone('.btnAddTableImage');
                    removeClassDnone('.btnEditTableImage');
                    removeClassDnone('.btnDeleteTableImage');
            }
        });
        element.click();
}
/**
 * @description Función que subira una imagen para el background en formato base64 para todos los elementos de la imagen
*/ 
const handleUploadBackground = () => {
    let element = getQueryElement("#bgElementsMask"),
        content_background = getQueryElement(".actions-mask .configuration-mask .image_actions"); 
        element.addEventListener("change", function(){ 
            let portada = element.files[0];
            let reader = new FileReader();
                reader.readAsDataURL(portada);
                reader.onload = function (e) {
                    addAttrElement(content_background, 'style', 'background-image: url('+e.target.result+')!important; background-size: cover; background-repeat: no-repeat; background-position: center;');
                    getQueryElement('.functions_backgrounds').dataset.bg = e.target.result;
                    getQueryElement('.functions_backgrounds').dataset.type_bg = '0';
                    setGeneralBackgrounds(e.target.result);
                    removeClassDnone('.functions_backgrounds');
                }
                addClassDnone( '#text-background-image-logo');
                addClassDnone('.btnAddBgElementsMask');
                removeClassDnone('.btnEditBgElementsMask');
                removeClassDnone('.btnDeleteBgElementsMask');
        });
        element.click();
}
/**
* @description Función 
*/ 
const handleCleanImage = (e) => {
    fadeInPreload();
    addAttrElement(contentTable, 'style', '');
    setValues('#TableImage', '');
    setValues('#HidenTblImage', '');
    removeClassDnone('#text-table-image-logo');
    removeClassDnone('.btnAddTableImage');
    addClassDnone('.btnEditTableImage');
    addClassDnone('.btnDeleteTableImage');
    fadeOutPreload(1000)
}
/**
* @description Función 
*/ 
const handleCleanBackground = (e) => {
    let element_bg = [ 
        '.actions-mask .configuration-mask .image_actions',
        '.section-mask .container-mask .logo-mask',
        '.section-mask .container-mask .left-title-mask',
        '.section-mask .container-mask .info-mask .title-mask',
        '.section-mask .container-mask .info-mask .title-pgm .bar_lateral'
    ];
    getQueryElement('#color_bar_title').innerHTML = '';
    //
    element_bg.forEach(element => {
        let content = ( getQueryElement(element) != null ) ? true : false;
        (content) &&  addAttrElement(getQueryElement(element), 'style', '');
    });
    setValues('#bgElementsMask', '');
    setValues('#HidenBgElementsMask', '');
    addClassDnone('.functions_backgrounds');
    removeClassDnone( '#text-background-image-logo');
    removeClassDnone('.btnAddBgElementsMask');
    addClassDnone('.btnEditBgElementsMask');
    addClassDnone('.btnDeleteBgElementsMask');
    setValues('#font_color_background', '#df7e01');
}
/**
* @description Función 
*/ 
const closeFinalMask = () => {
    let section_final_mask = getQueryElement('.selection-final-mask .container-final-mask .content-mask');
        section_final_mask.innerHTML = '';
    removeClassDnone('.section-mask .container-mask .info-mask .title-mask .input-title-mask');
    removeClassDnone('.section-mask .container-mask .info-mask .title-pgm .text-mask');
    addAllClassDnone('.section-mask .container-mask .info-mask .title-mask h2');
    addAllClassDnone('.section-mask .container-mask .info-mask .title-pgm h2');
    // 
    addTextAllElements('.section-mask .container-mask .info-mask .title-mask h2', '');
    addTextAllElements('.section-mask .container-mask .info-mask .title-pgm h2', '');
    // 
    addClassDnone('.selection-final-mask');  
    removeClassDnone('.section-select-design');
    removeClassDnone(form_mask);
    // 
    getQueryElement('.container-controls-mask').innerHTML = '';
}
/**
* @description Función 
*/
const convertirImagenABase64 = (url, callback) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const base64 = canvas.toDataURL('image/png');
        callback(base64);
    };
    img.onerror = function () {
        console.error("No se pudo cargar la imagen.");
        callback(null);
    };
    img.src = url;
}
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
const generatorSelectionLogos = async(element) => {
        data = await fetchData('./assets/json/pgm.json'),
        new_data =  data.map(ele => {
            let txt = ele.text.replaceAll(/-|_/gi, ' ')
            return {...ele, text: txt };
        });
    $(element).select2({
        data: new_data,
    });
    $('#logo_pgm_picker').on('select2:select', function (e) {        
        let data = e.params.data;
        if(data.id != 0){
            let baseUrl = `https://canalonce.mx/REST/data/images/caratulas/${data.id}.png`;
            handleChangeBackground('', data.bg);
            getQueryElement("#font_color_background").value = data.bg
            convertirImagenABase64(baseUrl, function (base64) {
                let icon = getQueryElement('.section-mask .container-mask .left-title-mask i'),
                    img_logo = getQueryElement(`.section-mask .container-mask .left-title-mask img`);
                    img_logo.src = base64;
                    // 
                    setValues('#imgLogoPrograms', '');
                    setValues('#imgLogoPrograms_hidden', '');
                    addClassDnone(icon);
                    removeClassDnone(img_logo);
            });
        }
    });
}   
/**
* @description Función 
* {list_label} Objeto que tiene la configuracion del layout a elegir 
*   [0] - Clase del diseño css del layout 
*   [1] - Muestra el contenedor izquierdo para el logo del programa 
*   [2] - Clase d-flex, si la tiene va a la derecha, si no la tiene va a la izquierda
*   [3] - Verifica si el input va a ser required o no
*   [4] - Verifica si tiene un titulo estatico o es editable 
*   [5] - Verifica si tiene una imagen de programa estatica
* @param type 
* @param img_label 
* @param logo 
*/ 
const generatorMaskImage = (type, img_label, logo, img_logo) => {    
    let list_label = {
        1 : ['diseño-sencillo', false, '', true, '', img_logo], 
        2 : ['diseño-sencillo-ovalo', false, '', true, '', img_logo], 
        3 : ['diseño-logo-izquierda', true, '', false, '', img_logo], 
        4 : ['diseño-logo-titulo-izquierdo', true, 'd-flex', true, '', img_logo],
        5 : ['diseño-sencillo diseño-matutino', false, '', true, 'MATUTINO', img_logo], 
        6 : ['diseño-sencillo diseño-meridiano', false, '', true, 'MERIDIANO', img_logo], 
        7 : ['diseño-sencillo diseño-nocturno', false, '', true, 'NOCTURNO', img_logo], 
        8 : ['diseño-sencillo diseño-dominical', false, '', true, 'DOMINICAL', img_logo], 
        9 : ['diseño-sencillo-ovalo diseño-mananera', false, '', true, 'MAÑANERAS DEL PUEBLO', img_logo], 
        10 : ['diseño-logo-titulo-izquierdo diseño-dialogos-salud', true, 'd-flex', true, 'SALUD', img_logo],
        11 : ['diseño-logo-titulo-izquierdo diseño-dialogos-familia', true, 'd-flex', true, 'FAMILIA', img_logo],
        12 : ['diseño-logo-titulo-izquierdo diseño-dialogos-saber-vivir', true, 'd-flex', true, 'SABER VIVIR', img_logo],
        13 : ['diseño-logo-titulo-izquierdo diseño-dialogos-sociedad', true, 'd-flex', true, 'SOCIEDAD', img_logo],
        14 : ['diseño-logo-titulo-izquierdo diseño-dialogos-pareja', true, 'd-flex', true, 'PAREJA', img_logo],
    }
    let container_label = ( list_label[type] != undefined ) ?  list_label[type] : 'diseño-sencillo';
    // 
    let html =  `<section class="section-mask ${container_label[0]}">
                    <article class="container-mask d-flex">
                        <div class="bg_logo_hidden">
                        </div>`;
                        if(container_label[1]){
        html +=           `<div id="imgLogoPrograms_cont" 
                                class="left-title-mask d-flex upload_image_logo automatic-background" 
                                data-type="imgLogoPrograms">
                                <i class="fa-solid fa-image ${ (container_label[5] != '') ? 'd-none' : '' }" 
                                   data-type="imgLogoPrograms"></i>
                                <img class="img-fluid lazy ${ (container_label[5] != '') ? '' : 'd-none'}" 
                                    src="${container_label[5]}" 
                                    alt="Logo de Programa" 
                                    width="139" height="30" data-type="imgLogoPrograms">
                                <input id="imgLogoPrograms" name="imgLogoPrograms" class="img-logo-mask" type="file" 
                                style="display: none; height:0" accept="image/*" data-type="imgLogoPrograms">
                                <input id="imgLogoPrograms_hidden" name="imgLogoPrograms_hidden" type="text" 
                                   style="display: none;" value="">
                           </div>`
                        }                        
        html +=         `<div id="imgLogoMask_cont"
                            class="logo-mask upload_image_logo automatic-background" data-type="imgLogoMask">
                            <i class="fa-solid fa-file-arrow-up d-none" data-type="imgLogoMask"></i>
                            <img class="img-fluid lazy " 
                                src="${logo}" 
                                alt="" 
                                width="139" height="30" data-type="imgLogoMask">
                            <input id="imgLogoMask" name="imgLogoMask" class="img-logo-mask" type="file" 
                                   style="display: none; height:0" accept="image/*" data-type="imgLogoMask">
                            <input id="imgLogoMask_hidden" name="imgLogoMask_hidden" type="text" 
                                   style="display: none;" value="">
                        </div>
                        <div class="info-mask ${container_label[2]}">
                            <div class="title-mask automatic-background">`;
        html +=                 `<h2 class="">
                                    ${ (container_label[4] === '') ?  'Titulo' : container_label[4] }
                                </h2>`;
        html +=             `</div>
                            <div class="title-pgm d-flex automatic-background">
                                <div class="bar_lateral"></div>
                                <h2></h2>
                            </div>
                        </div>
                    </article>
                    <article class="container-image-mask">
                        <picture>
                            <source class="lazy img-fluid" srcset="${img_label}" type="image/webp" >
                            <source class="lazy img-fluid" srcset="${img_label}" type="image/png" > 
                            <img class="img-fluid lazy" src="${img_label}" alt="" 
                                width="139" height="30">
                        </picture>
                        <input id="img_mask" name="img_mask" type="text" class="d-none">
                    </article>                    
                </section>
                <section class="actions-mask d-flex">
                    <div class="configuration-mask d-flex">
                        <article class="mb-3 position-relative txt-center">
                            <div class="content_upload_bg">
                                <div class="content-btn-actions d-flex">
                                    <button type="button" 
                                            class="btn btn-success btnAddBgElementsMask upload_background">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <button type="button" 
                                            class="btn btn-primary btnEditBgElementsMask d-none upload_background">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    <button id="btnDeleteElementsMask" type="button" 
                                            class="btn btn-danger btnDeleteBgElementsMask d-none">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>   
                                </div>
                                <div class="image_actions c-pointer d-flex justify-content-center 
                                        align-items-center upload_background">
                                        <h5 id="text-background-image-logo">
                                            Selecciona una imagen <br> para los backgrounds
                                        </h5>
                                        <input id="bgElementsMask" name="bgElementsMask" 
                                            class="bg-elements-mask" type="file" 
                                            style="display: none; height:0" accept="image/*">
                                        <input id="HidenBgElementsMask" name="HidenBgElementsMask" type="text" 
                                            style="display: none;" value="">
                                </div>
                            </div>
                            <div class="content-bg-picker d-flex">                                
                                <label for="font_color_background" 
                                    class="">O elige un background sólido</label>
                                <input type="color" class="form-control form-control-color input-color"
                                    data-type="title"
                                    id="font_color_background" value="#df7e01" title="Elige un color de background">
                            </div>
                        </article>
                        <article class="mb-3 functions_backgrounds d-flex d-none">
                            <h5 for="bgElementsMask" class="form-label">Habilita o deshabilita los fondos</h5>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="1" 
                                    id="bg_logo_izquierdo" name="bg_logo_izquierdo" checked>
                                <label class="form-check-label" for="bg_logo_izquierdo">
                                    Fondo del logo izquierdo
                                </label>
                            </div>`;
                            if(container_label[1]){
        html +=                 `<div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="2" 
                                    id="bg_logo_derecho" name="bg_logo_derecho" checked>
                                    <label class="form-check-label" for="bg_logo_derecho">
                                        Fondo del logo derecho
                                    </label>
                                </div>`;
                            }
                            if(container_label[3]){
        html +=                 `<div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="3" 
                                        id="bg_titulo" name="bg_titulo" checked>
                                    <label class="form-check-label" for="bg_titulo">
                                        Fondo del título
                                    </label>
                                </div>`;
                            }
        html +=             `<div class="form-check">
                                <input class="form-check-input" type="checkbox" value="4" 
                                    id="bg_barra_lateral" name="bg_barra_lateral" checked>
                                <label class="form-check-label" for="bg_barra_lateral">
                                    Fondo del barra lateral
                                </label>
                            </div>
                        </article>`;
                        if(container_label[1]){
        html +=             `<article class="mb-3 functions_images">
                                <h5 class="form-label">Selecciona la imagen del programa</h5>
                                <select id="logo_pgm_picker" class="form-select" 
                                    data-type="pgm"
                                    aria-label="Selector para cambiar la imagen del programa">
                                    <option value="0">Selecciona un programa</option>
                                </select>
                                <input id="HiddenLogoPicker" name="HiddenLogoPicker" type="text" 
                                   style="display: none;" value="">
                            </article>`;
                        }
        html +=         `<article class="mb-3 info-texts">
                            <h5 class="form-label ${ (!container_label[3]) ? 'd-none': '' }">Escribe el titulo</h5>`;
        html +=             `<textarea id="title_mask" name="title_mask" 
                                class="input-title-mask ${ (!container_label[3]) ? 'd-none': '' } form-control form-control-sm" 
                                ${(container_label[3]) ? 'required': ''}>${ (container_label[4] != '') ? container_label[4] : 'Titulo' }</textarea>`;
        html +=             `<h5 class="form-label">Escribe el texto del cuerpo</h5>`;                                
        html +=             `<textarea id="text_mask" name="text_mask" 
                                class="text-mask form-control form-control-sm" required ></textarea>`;
        html +=         `</article>`;
        html +=         `<article class="mb-3 functions_texts">
                            <h5 class="form-label">Configura el texto del título</h5>
                            <div class="config-title d-flex">
                                <label for="font_weight_title" 
                                    class="">Grosor del texto</label>
                                <select id="font_weight_title" class="form-select" 
                                    data-type="title"
                                    aria-label="Selector para cambiar el font weght del texto del titulo">
                                    <option value="normal" selected>Normal</option>
                                    <option value="lighter">Light</option>
                                    <option value="bold">Bold</option>
                                </select>
                            </div>
                            <div class="config-title d-flex">
                                <label for="font_size_title" 
                                    class="">Elige el tamaño de la letra en px</label>
                                <input type="number" 
                                    class="form-control form-control-sm font-size" 
                                    data-type="title"
                                    id="font_size_title" name="font_size_title" value="32">
                            </div>
                            <div class="config-title d-flex">
                                <label for="font_color_title" 
                                    class="">Elige el color del texto</label>
                                <input type="color" class="form-control form-control-color input-color-text"
                                    data-type="title"
                                    id="font_color_title" value="#f2f2f2" title="Elige un color">
                            </div>
                        </article>
                        <article class="mb-3 functions_texts">
                            <h5 class="form-label">Configura el texto del body</h5>
                            <div class="config-title d-flex">
                                <label for="font_weight_body" 
                                    class="">Grosor del texto</label>
                                <select id="font_weight_body" class="form-select" 
                                    data-type="body"
                                    aria-label="Selector para cambiar el font weght del texto del body">
                                    <option value="normal" selected>Normal</option>
                                    <option value="lighter">Light</option>
                                    <option value="bold">Bold</option>
                                </select>
                            </div>
                            <div class="config-title d-flex">
                                <label for="font_size_body" 
                                    class="">Elige el tamaño de la letra en px</label>
                                <input type="number" 
                                    class="form-control form-control-sm font-size" 
                                    data-type="body"
                                    id="font_size_body" name="font_size_body" value="57">
                            </div>
                            <div class="config-title d-flex">
                                <label for="font_color_body" 
                                    class="">Elige el color del texto</label>
                                <input type="color" class="form-control form-control-color input-color-text" 
                                    data-type="body"
                                    id="font_color_body" value="#f2f2f2" title="Elige un color">
                            </div>
                        </article>
                    </div>
                    <article class="container-actions-mask d-flex">
                        <div class="controls-download d-flex d-none">
                        </div>
                        <div class="controls-actions d-flex">                            
                            <button id="reset_all_mask" type="button" class="btn btn-secondary">Borrar</button>
                            <button type="submit" class="btn btn-primary">Generar</button>
                        </div>
                    </article>
                </section>
                <style id="color_bar_title"></style>`;
    form_mask.innerHTML = html;
    const btnAddLogo = getAllElement(".upload_image_logo");
    const btnCleanBg = getQueryElement("#btnDeleteElementsMask");
    const btnResetMask = getQueryElement("#reset_all_mask");
    const btnAddBackground = getAllElement(".upload_background");
    const inputSetTitle = getQueryElement("#title_mask");
    const inputSetBody = getQueryElement("#text_mask");
    const btnPickerBackground = getQueryElement("#font_color_background");
    const checkBackgrounds = getAllElement(".form-check-input");
    const selectFontWeight = getAllElement(".form-select");
    const inputFontSize = getAllElement(".font-size");
    const inputChangeColorText = getAllElement(".input-color-text");
    // 
    generatorSelectionLogos('#logo_pgm_picker');
    // 
    inputSetTitle.addEventListener('keyup', debounce(setTitleText, 500, false));
    inputSetBody.addEventListener('keyup', debounce(setBodyText, 500, false));
    btnAddLogo.forEach((btn) =>{
        btn.addEventListener("click", handleUploadLogo);
    });
    btnCleanBg.addEventListener("click", handleCleanBackground);
    btnResetMask.addEventListener("click", handleReloadForm);
    btnAddBackground.forEach((btn) =>{
        btn.addEventListener("click", handleUploadBackground);
    });
    btnPickerBackground.addEventListener("change", (e) => handleChangeBackground(e, ''));
    checkBackgrounds.forEach((checkbox) =>{
        checkbox.addEventListener("click", handleVisibilityBackgrounds);
    });
    selectFontWeight.forEach((select) =>{
        select.addEventListener('change', changeFontWeight);
    });
    inputFontSize.forEach((inout) =>{
        inout.addEventListener('keyup', debounce(changeFontSize, 500, false));
    });
    inputChangeColorText.forEach((input) =>{
        input.addEventListener('change', changeColorText);
    });
    // inputSetTitle.addEventListener('keyup', debounce(setTextTitle, 500, false));
}
/**
* @description Función 
*/ 
const showLabel = (label, img_label, logo, img_logo) => {
    contentBtnReload.dataset.status = 1;
    // 
    addClassElement(getQueryElement('.section-select-design'), 'wx-form');
    getQueryElement('#wrapper').classList.add('pt-md-20', 'h-auto', 'pb-md-20');
    addClassDnone(form_label);
    removeClassDnone(contentBtnReload);    
    removeClassDnone(form_mask);
    addAllClass( getAllElement('.section-mask'), 'd-none' );
    generatorMaskImage(label, img_label, logo, img_logo);
    fadeOutPreload(1000)
}
// 
btnCloseAlert.addEventListener("click", handleHiddenAlert);
btnReload.addEventListener("click", handleReloadForm);
btnClean.addEventListener("click", handleCleanImage);
// 
btnAdd.forEach((btn) =>{
    btn.addEventListener("click", handleUploadImage);
});
btnCloseFinalMask.addEventListener("click", closeFinalMask);
// 
// 
form_label.addEventListener('submit', async(e) => {
    e.preventDefault();        
    if(form_label.elements.HidenTblImage.value != ''){
        fadeInPreload()
        let type_label = parseInt(form_label.elements.design_label.value);
        let foto = form_label.elements.HidenTblImage.value;
        let logo =          
        await convertirImagenABase64_1(
            'https://canalonce.mx/REST/data/images/caratulas/canal_once_logo2025_horizontal_blanco_sm-(2).png'
        )          
        let img_logo = (type_label >= 10 &&  type_label <= 14) 
            ?   await convertirImagenABase64_1(
                    'https://canalonce.mx/REST/data/images/caratulas/dialogos_confianza.png'
                )   
            : '';
        //          
        showLabel(type_label, foto, logo, img_logo);
        // 
        (!contentAlertImage.classList.contains('d-none')) && addClassDnone(contentAlertImage);
    }else{
        removeClassDnone(contentAlertImage);
    }
})
form_mask.addEventListener('submit', (e) => {
    e.preventDefault();    
    // 
    getQueryElement('.container-actions-mask .controls-download').innerHTML= '';
    getQueryElement('#test').setAttribute('style', '');
    getQueryElement('#test').innerHTML = '';
    // 
    let text_title = (form_mask.elements.title_mask.value) ? form_mask.elements.title_mask.value : ' ',
        text_body = form_mask.elements.text_mask.value,
        font_size_title = multiplyFontSize(form_mask.elements.font_size_title.value, 1),
        font_size_body = multiplyFontSize(form_mask.elements.font_size_body.value, 1),
        image_mask = getQueryElement('.section-mask .container-image-mask img').src;        
    // 
    addTextElement('#formGenerateImage .section-mask .container-mask .info-mask .title-mask h2', text_title);
    addTextElement('#formGenerateImage .section-mask .container-mask .info-mask .title-pgm h2', text_body);
    // 
    removeClassDnone('.container-actions-mask .controls-download');
    // 
    let mask = getQueryElement('#formGenerateImage .section-mask')
    html2canvas(mask, {
        width: 984,
        height: 576,
        windowWidth: mask.scrollWidth,
        windowHeight: mask.scrollHeight,
        onclone: function (clonedDoc) { 
            clonedDoc.querySelector('.section-mask').setAttribute('style', `width: 984px; height: 576px; max-width: 100%;`);
            clonedDoc.querySelector('.section-mask .container-mask').setAttribute('style', `width: 984px; height: 576px `);
            clonedDoc.querySelector('.section-mask .container-image-mask').setAttribute('style', `width: 984px; height: 576px; background-image: url(${image_mask}); background-size: cover; background-origin: padding-box;`);
            clonedDoc.querySelector('.section-mask .container-image-mask img').setAttribute('style', `width: 984px; height: 576px; object-fit: cover; display: none;`);

            if(clonedDoc.querySelector('.section-mask .container-mask .left-title-mask') != null) {
                clonedDoc.querySelector('.section-mask .container-mask .left-title-mask').style.minWidth= '20rem';
                clonedDoc.querySelector('.section-mask .container-mask .left-title-mask').style.minHeight = '8rem';                
                clonedDoc.querySelector('.section-mask .container-mask .left-title-mask img').setAttribute('style', `max-width: 250px; max-height: 150px;`);    
            }
            clonedDoc.querySelector('.section-mask .container-mask .logo-mask').style.width = '17rem';
            clonedDoc.querySelector('.section-mask .container-mask .logo-mask').style.height = '5rem';
            clonedDoc.querySelector('.section-mask .container-mask .logo-mask').style.top = '2rem';

            clonedDoc.querySelector('.section-mask .container-mask .logo-mask img').setAttribute('style', `max-height: 4rem;`);    
            if(clonedDoc.querySelector('.section-mask .container-mask .left-title-mask') != null) {
                clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask').style.padding = '1rem 0rem 1rem 2rem';
            }else{
                clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask').style.padding = '1rem 1rem 1rem';
            }
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask').style.height = 'auto';
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask').style.height = 'auto';
    // 
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask h2').setAttribute('style', `width: 100%; height: 100%; display: flex!important; align-items: center; font-size: ${font_size_title};`); 
            
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm').setAttribute('style', `    align-items: self-start;`);

            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm .bar_lateral').style.width = '0.7rem';   
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm .bar_lateral').style.height = '11rem';   
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm h2').setAttribute('style', `height: 100%; font-size: ${font_size_body}; display: flex!important;`); 
            getQueryElement('#test').appendChild( clonedDoc.querySelector('.section-mask') );
        }
    }).then(canvas => {
        let btn_download = `<a id="donload_image" type="button" 
                                href="${canvas.toDataURL()}"
                                download="visual.jpg"
                                class="btn text-white btn-md bg-success btnCloseFinalMask" >
                                <i class="fa-solid fa-download"></i>
                            </a>`
        getQueryElement('.container-actions-mask .controls-download').innerHTML= btn_download;
    });
})
$('#design-label').select2({});