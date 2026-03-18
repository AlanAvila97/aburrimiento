
const ITEM_MONTH = document.querySelectorAll('.item-months')
const sliderEfemerides = () => {
    var swiper_months = new Swiper(".slider-months", {
        slidesPerView: 3,
        spaceBetween: 10,
        autoHeight: true,
        slidesPerGroup: 1,
        rewind: true,
        navigation: {
            nextEl: "#slider_meses .navigation-next",
            prevEl: "#slider_meses .navigation-prev",
        },
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
                slidesPerView: 2,
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
}
/**
* @description Esta funcion hará posible el evento click para simular la funcion de un input file para cargar la boleta
*/
const handleShowImage = (e) => {
    const item = e.target.closest('.item-months');
    if(item){
        let image = item.dataset.image;
        let image_modal = document.querySelector('#modalEfemerides .modal-body .container-image img')
        if(image === '') return;
        image_modal.src = image;
    }
}

document.addEventListener('DOMContentLoaded', function(event) {   
    sliderEfemerides();
    initGallery();
});