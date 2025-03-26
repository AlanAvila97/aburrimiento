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
 * @description Función 
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
 * @description Función 
*/ 
const fadeInPreload = () => {
    addClassElement(body, 'body-overflow-hidden');
    removeClass(preload, ('fade-out-search', 'd-none'))
    addClassElement(preload, 'fade-in-search');
}
/**
 * @description Función 
*/ 
const fadeOutPreload = (timer) => {
    setTimeout(() => {
        removeClass(body, 'body-overflow-hidden');
        removeClass(preload, 'fade-in-search');
        addClassElement(preload, ('fade-out-search', 'd-none'))
    }, timer);
}
/**
 * @description Función 
*/ 
const validationClassFontWeight = (element) => {
    (element.classList.contains('font-weight-normal')) && removeClass(element, 'font-weight-normal');
    (element.classList.contains('font-weight-lighter')) && removeClass(element, 'font-weight-lighter');
    (element.classList.contains('font-weight-bold')) && removeClass(element, 'font-weight-bold');
}
/**
 * @description Función 
*/ 
const changeFontWeight = (e) => {
    let element;
    if(e.target.dataset.type === 'title'){
        element = getQueryElement('.section-mask .container-mask .info-mask .title-mask .input-title-mask')
        validationClassFontWeight(element);
        addClassElement(element, `font-weight-${e.target.value}`);
    }else{
        element = getQueryElement('.section-mask .container-mask .info-mask .title-pgm .text-mask')
        validationClassFontWeight(element);
        addClassElement(element, `font-weight-${e.target.value}`);
    }
}
/**
 * @description Función 
*/ 
const changeFontSize = (e) => {
  let rem = ( parseInt(e.target.value) / 16), element;
  if(e.target.dataset.type === 'title'){
    element = getQueryElement('.section-mask .container-mask .info-mask .title-mask .input-title-mask')
    element.style.fontSize = `${parseFloat(rem.toFixed(2))}rem`;
  }else{
    element = getQueryElement('.section-mask .container-mask .info-mask .title-pgm .text-mask')
    element.style.fontSize = `${parseFloat(rem.toFixed(2))}rem`;
  }
}
/**
 * @description Función 
*/ 
const changeColorText = (e) => {
    let element;
    if(e.target.dataset.type === 'title'){
        element = getQueryElement('.section-mask .container-mask .info-mask .title-mask .input-title-mask')
        element.style.color = e.target.value;
    }else{
        element = getQueryElement('.section-mask .container-mask .info-mask .title-pgm .text-mask')
        element.style.color = e.target.value;        
    }
}
/**
 * @description Función 
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
}
/**
 * @description Función 
*/ 
const visibilityBackgrounds = (type, attr_style, status) => {
    let style;
    switch (type) {
        case 1:
            style = (status)  ? attr_style  : 'background: transparent; box-shadow: 6px 6px 4px 2px transparent;';
            style_input = (status)  ? '' : 'color: #000000;';
            // 
            addAttrElement(getQueryElement('.section-mask .container-mask .logo-mask'), 'style', style);
            addAttrElement(getQueryElement('.section-mask .container-mask .logo-mask i'), 'style', style_input);
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
 * @description Función 
*/ 
const handleVisibilityBackgrounds = (e) => {
    let bg = getQueryElement('.functions_backgrounds').dataset.bg;
    let attr_style = `background-image: url(${bg})!important; 
                      background-size: cover; 
                      background-repeat: no-repeat; 
                      background-position: center;`
    if(!e.target.checked){
        visibilityBackgrounds(parseInt(e.target.value), '', e.target.checked);
    }else{
        visibilityBackgrounds(parseInt(e.target.value), attr_style, e.target.checked);
    }
}
/**
 * @description Función 
*/ 
const handleHiddenAlert = () => {
    addClassDnone(contentAlertImage);
}
/**
 * @description Función 
*/ 
const handleReloadForm = () => {
  let status =  contentBtnReload.dataset.status;
  if(status == 1){
    removeClass(getQueryElement('.section-select-design'), 'wx-form');
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
  }else{
    removeClassDnone(contentBtnReload);
    addClassDnone(form_label);
    contentBtnReload.dataset.status = 1;
  }
  addAllClass( getAllElement('.section-mask'), 'd-none' );
}
/**
 * @description Función 
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
};
/**
 * @description Función 
*/ 
const handleUploadImage = () => {
    let element = getQueryElement("#TableImage"); 
        element.addEventListener("change", function(){ 
            fadeInPreload();
            let portada = element.files[0];
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
        });
        element.click();
}
/**
 * @description Función 
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
const generatorMaskImage = (type, img_label) => {
    let list_label = {
        1 : ['diseño-sencillo', false, '', true], 
        2 : ['diseño-sencillo-ovalo', false, '', true], 
        3 : ['diseño-logo-izquierda', true, '', false], 
        4 : ['diseño-logo-titulo-izquierdo', true, 'd-flex', true]
    }
    let container_label = ( list_label[type] != undefined ) ?  list_label[type] : 'diseño-sencillo';
    // 
    let html =  `<section class="section-mask ${container_label[0]}">
                    <article class="container-mask d-flex">`;
                        if(container_label[1]){
        html +=           `<div id="imgLogoPrograms_cont" 
                                class="left-title-mask d-flex upload_image_logo automatic-background" 
                                data-type="imgLogoPrograms">
                                <i class="fa-solid fa-image" data-type="imgLogoPrograms"></i>
                                <img class="img-fluid lazy d-none" 
                                    src="" 
                                    alt="" 
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
                              src="https://canalonce.mx/REST/data/images/canal_once_logo2025_horizontal_blanco_sm.webp" 
                              alt="" 
                              width="139" height="30" data-type="imgLogoMask">
                            <input id="imgLogoMask" name="imgLogoMask" class="img-logo-mask" type="file" 
                                   style="display: none; height:0" accept="image/*" data-type="imgLogoMask">
                            <input id="imgLogoMask_hidden" name="imgLogoMask_hidden" type="text" 
                                   style="display: none;" value="">
                        </div>
                        <div class="info-mask ${container_label[2]}">
                            <div class="title-mask automatic-background">
                                <h2 class="d-none"></h2>
                                <input id="title_mask" name="title_mask" type="text" class="input-title-mask"
                                ${(container_label[3]) ? 'required': ''}>
                            </div>
                            <div class="title-pgm d-flex automatic-background">
                                <div class="bar_lateral"></div>
                                <h2 class="d-none"></h2>
                                <textarea id="text_mask" name="text_mask" class="text-mask" required ></textarea>
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
                        <input id="img_mask" name="img_mask" type="text" class="d-none"  >
                    </article>                    
                </section>
                <section class="actions-mask d-flex">
                    <div class="configuration-mask d-flex scroll-menu">
                        <article class="mb-3">
                            <div class="image_actions c-pointer d-flex justify-content-center 
                                    align-items-center ">
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
                                    <h5 id="text-background-image-logo">
                                        Selecciona una imagen <br> para los backgrounds
                                    </h5>
                                    <input id="bgElementsMask" name="bgElementsMask" 
                                        class="bg-elements-mask" type="file" 
                                        style="display: none; height:0" accept="image/*">
                                    <input id="HidenBgElementsMask" name="HidenBgElementsMask" type="text" 
                                        style="display: none;" value="">
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
                        </article>
                        <article class="mb-3 functions_texts">
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
                                    id="font_size_title" name="font_size_title" value="19.2">
                            </div>
                            <div class="config-title d-flex">
                                <label for="font_color_title" 
                                    class="">Elige el color del texto</label>
                                <input type="color" class="form-control form-control-color input-color"
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
                                    id="font_size_body" name="font_size_body" value="32">
                            </div>
                            <div class="config-title d-flex">
                                <label for="font_color_body" 
                                    class="">Elige el color del texto</label>
                                <input type="color" class="form-control form-control-color input-color" 
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
    const checkBackgrounds = getAllElement(".form-check-input");
    const selectFontWeight = getAllElement(".form-select");
    const inputFontSize = getAllElement(".font-size");
    const inputChangeColorText = getAllElement(".input-color");
    // 
    btnAddLogo.forEach((btn) =>{
        btn.addEventListener("click", handleUploadLogo);
    });
    btnCleanBg.addEventListener("click", handleCleanBackground);
    btnResetMask.addEventListener("click", handleReloadForm);
    btnAddBackground.forEach((btn) =>{
        btn.addEventListener("click", handleUploadBackground);
    });
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
}
/**
* @description Función 
*/ 
const showLabel = (label, img_label) => {
    contentBtnReload.dataset.status = 1;
    // 
    addClassElement(getQueryElement('.section-select-design'), 'wx-form');
    addClassDnone(form_label);
    removeClassDnone(contentBtnReload);    
    removeClassDnone(form_mask);
    addAllClass( getAllElement('.section-mask'), 'd-none' );
    generatorMaskImage(label, img_label);
    getQueryElement('#formGenerateImage').scrollIntoView({
        behavior: 'smooth'
    });
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
form_label.addEventListener('submit', (e) => {
    e.preventDefault();    
    if(e.srcElement[4].value != ''){
        fadeInPreload()
        let type_label = parseInt(e.srcElement[0].value);
        let foto = e.srcElement[5].value;
        showLabel(type_label, foto);
        // 
        (!contentAlertImage.classList.contains('d-none')) && addClassDnone(contentAlertImage);
    }else{
        removeClassDnone(contentAlertImage);
    }
})
form_mask.addEventListener('submit', (e) => {
    e.preventDefault();    
    // 
    let text_title = (form_mask.elements.title_mask.value) ? form_mask.elements.title_mask.value : ' ', 
        text_body = form_mask.elements.text_mask.value,
        font_size_title = multiplyFontSize(form_mask.elements.font_size_title.value, 2),
        font_size_body = multiplyFontSize(form_mask.elements.font_size_body.value, 2),
        image_mask = getQueryElement('.section-mask .container-image-mask img').src,
        mask = getQueryElement('#formGenerateImage .section-mask');
    // 
    addTextAllElements('.section-mask .container-mask .info-mask .title-mask h2', text_title);
    addTextAllElements('.section-mask .container-mask .info-mask .title-pgm h2', text_body);
    // 
    html2canvas(mask, {
        allowTaint: true,
        width: 1600,
        height: 1067,
        windowWidth: 1600,
        windowHeight: 1067,
        onclone: function (clonedDoc) { 
            clonedDoc.querySelector('.section-mask').setAttribute('style', `width: 100rem; height: 1067px; max-width: 100%;`);
            clonedDoc.querySelector('.section-mask .container-mask').setAttribute('style', `width: 100rem; height: 1067px `);
            clonedDoc.querySelector('.section-mask .container-image-mask').setAttribute('style', `width: 100rem; height: 1067px; background-image: url(${image_mask}); background-origin: padding-box;`);
            clonedDoc.querySelector('.section-mask .container-image-mask img').setAttribute('style', `width: 100rem; height: 1067px; object-fit: cover; display: none;`);

            if(clonedDoc.querySelector('.section-mask.diseño-logo-izquierda .container-mask .left-title-mask') != null) {

                clonedDoc.querySelector('.section-mask.diseño-logo-izquierda .container-mask .left-title-mask').style.minWidth= '30rem';
                clonedDoc.querySelector('.section-mask.diseño-logo-izquierda .container-mask .left-title-mask').style.minHeight = '13rem';
            }
            
            clonedDoc.querySelector('.section-mask .container-mask .logo-mask').style.width = '24rem';
            clonedDoc.querySelector('.section-mask .container-mask .logo-mask').style.height = '7rem';
            clonedDoc.querySelector('.section-mask .container-mask .logo-mask').style.top = '2rem';

            clonedDoc.querySelector('.section-mask .container-mask .logo-mask img').setAttribute('style', `max-height: 5rem;`);    
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask').style.padding = '1.5rem 1rem';
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask').style.height = 'auto';
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask').style.height = 'auto';
    // 
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-mask h2').setAttribute('style', `width: 100%; height: 100%; display: flex!important; align-items: center; font-size: ${font_size_title};`); 
            
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm').setAttribute('style', `    align-items: self-start;`);

            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm .bar_lateral').style.width = '0.5rem';   
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm .bar_lateral').style.height = '15rem';   
            clonedDoc.querySelector('.section-mask .container-mask .info-mask .title-pgm h2').setAttribute('style', `height: 100%; font-size: ${font_size_body};`); 
        }
    }).then(canvas => {

        let content_download = getQueryElement('.controls-download');
        removeClassDnone(content_download);
        
        // let btn_download = `<a id="donload_image" type="button" 
        //                         href="${canvas.toDataURL()}"
        //                         download="visual.jpg"
        //                         class="btn text-white btn-md bg-success btnCloseFinalMask" >
        //                         <i class="fa-solid fa-download"></i>
        //                     </a>`
        // console.log(canvas)        
        console.log(content_download)
        console.log(canvas.toDataURL())
        // content_download.innerHTML= btn_download;        
    });
    // addClassDnone('.section-select-design');
    // addClassDnone(form_mask);
    // removeClassDnone('.selection-final-mask');  
})