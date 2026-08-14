const ITEMS_MODAL = document.querySelectorAll('.item-interview');
const CONTENT_MODAL = document.querySelector('#interviewModal');
// 
let modalInterview = null;
// 
function initialitationModal(element) {
    const modalElement = document.querySelector(element);
    if (!modalElement) {
        console.error(`Modal element ${element} not found`);
        return null;
    }
    //
    if (modalElement._bsModal) {
        modalElement._bsModal.dispose();
    }
    return new bootstrap.Modal(modalElement, {
        keyboard: false,
        focus: true,
    })
}
/**
 * @description Configura las acciones de los modales
 * @param {HTMLElement} modal - Modal inicializado
*/
function actionsModal(modal){
    if (!modal || !modal._element) return;
    //
    modal._element.addEventListener('show.bs.modal', function () {
        if (modal._element.contains(document.activeElement)) {
            document.activeElement.blur();
        }
        document.querySelector('html').style.overflow = 'hidden';
    });
    modal._element.addEventListener('shown.bs.modal', function () {
        document.querySelector('html').style.overflow = 'hidden';
    });
    modal._element.addEventListener('hide.bs.modal', function () {
        if (modal._element.contains(document.activeElement)) {
            document.activeElement.blur();
        }
        document.querySelector('html').style.overflow = 'auto';
    });
    modal._element.addEventListener('hidden.bs.modal', function () {
        document.querySelector('html').style.overflow = 'auto';
    });
}
function parserLinkVideo(video) {
    let link = video.split('v=');    
    return link[1];
}
const sliderNoticiasPrincipales = () => {
    var swiper_principal_notices = new Swiper(".slider-principal-notices", {
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
            nextEl: ".section-slider-notice .container-navigation-next img",
            prevEl: ".section-slider-notice .container-navigation-prev img",
        },
        effect: "slide",
        coverflowEffect: {
            rotate: 0,
            stretch: 12,
            depth: 0,
            modifier: 1,
            slideShadows: false, // Desactivado en móvil
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 1,
            },
            580: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            840: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: "coverflow", 
                coverflowEffect: {
                    rotate: 0,
                    stretch: -39,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true, 
                },
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    stretch: -29,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 50,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    stretch: -29,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            2100: {
                slidesPerView: 3,
                spaceBetween: 50,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 0,
                    stretch: -29,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
            },
        },
        on: {
            init: function () {
                console.log("Swiper inicializado");
            },
            resize: function () {
                this.update(); // Forzar actualización al cambiar tamaño
            }
        }
    });
}
const viewInterviewVideo = (e) => {
    let element =  e.target.closest('.item-interview');
    if(!element) return;
    //
    let textTitle = element.dataset.title;
    let linkVideo = parserLinkVideo(element.dataset.link);
    // 
    let elemetTitle  =  CONTENT_MODAL.querySelector('.modal-title');
        elemetTitle.textContent = textTitle;
    // 
    let elementContet = CONTENT_MODAL.querySelector('.modal-body');
        // elementContet.innerHTML = `<lite-youtube videoid="${linkVideo}" autoload> </lite-youtube>`
        
}
// 
ITEMS_MODAL.forEach(item => {
    item.addEventListener('click', viewInterviewVideo);
});
document.addEventListener("DOMContentLoaded", function(event) {    
    sliderNoticiasPrincipales();
    modalInterview = initialitationModal('#interviewModal');
    actionsModal(modalInterview);
});