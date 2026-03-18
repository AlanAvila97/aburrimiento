// Ejemplo de uso
const items_menu = getAllElement('#main-nav-menu .menu-item-hover');
const items_menu_mañanera = getAllElement('#main-nav-menu .menu-item-hover');
// 
function setupHoverDelegation(containerSelector, elementClass, callbacks) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Contenedor "${containerSelector}" no encontrado`);
    return () => {};
  }

  const handlers = {
    mouseenter: (e) => {
      if (e.target.classList.contains(elementClass)) {        
        // setDataMenu(containerSelector,  e.target.dataset.id, e.target.dataset.type);
      }
    },
    mouseleave: (e) => {
      if (e.target.classList.contains(elementClass)) {
        // let container = getQueryElement(`${containerSelector} .mega-ajax-content`)
        //     container.innerHTML= '';        
      }
    },
  };
  // Agregar event listeners
  Object.entries(handlers).forEach(([event, handler]) => {
    if (handler) container.addEventListener(event, handler, true);
  });
  // Función de limpieza
  return () => {
    Object.entries(handlers).forEach(([event, handler]) => {
      if (handler) container.removeEventListener(event, handler, true);
    });
  };
}
// Uso:
// const cleanup = setupHoverDelegation('#main-nav-menu', 'menu-item-hover', {
//   mouseenter: (e) => e.target.classList.add('hovered'),
//   mouseleave: (e) => e.target.classList.add('hovered'),
// });
const initializationBarNotice = () => {
  let swiper_header = new Swiper(".slide-bar-notice", {
        slidesPerView: 1,
        rewind: true,
        autoplay: {
          delay: 7700,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        on: {
          init: function () {
            const activeSlide = this.slides[this.activeIndex];
            const childElement = activeSlide.querySelector('.ticker-notice .cursor');
                  childElement.classList.add('active-notice-animation');
          },
          slideChange: function () {
            this.slides.forEach(slide => {
              const child = slide.querySelector('.ticker-notice .cursor');
                    child.classList.remove('active-notice-animation');
            });          
            // 
            const activeSlide = this.slides[this.activeIndex];
            const activeChild = activeSlide.querySelector('.ticker-notice .cursor');
                  activeChild.classList.add('active-notice-animation');
          },
        },
        navigation: {
          nextEl: "#top-nav .jnt-next",
          prevEl: "#top-nav .jnt-prev",
        },
    });
}
document.addEventListener("DOMContentLoaded", function(event) {   
    initializationBarNotice();
});