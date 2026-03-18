const elementosHover = getAllElement('.ele_svg');
const svg_path = getAllElement('svg path');
const overlay_body = getQueryElement('.overlay-body');
elementosHover.forEach(elemento => {
    /**
    * @description Función que 
    */ 
    elemento.addEventListener('click', function(e) {
        let url = e.target.dataset.url;
        if(url != ''){
            window.location.href = `./${url}`;
        }
    });
    /**
    * @description Función que 
    */ 
    elemento.addEventListener('mouseenter', function(e) {
        let dataText = e.target.dataset.text,
            element_hover = getQueryElement(`.text_element_${dataText}`);
        addClassElement(overlay_body,'overlay-body-active');
        addAllClass(svg_path, 'inactive-path');
        addClassElement(e.target,'active-path');
        if(element_hover){
            addClassElement(element_hover, 'active-text')
            setElementAttribute(element_hover, 'visibility', 'visible')
        }
    });
    /**
    * @description Función que 
    */ 
    elemento.addEventListener('mouseleave', function(e) {
        let elementsText = getAllElement('.text_element');
        removeClass(overlay_body,'overlay-body-active');
        removeAllClass(svg_path, 'inactive-path');
        removeAllClass(svg_path, 'active-path');
        removeAllClass(elementsText, 'active-text')
        addAllElementElement(elementsText, 'visibility', 'hidden')
    });
});