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
document.addEventListener("DOMContentLoaded", function(event) {    
    sliderNoticiasPrincipales();
});