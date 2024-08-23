window.addEventListener('load', function () {
    // Initialize
    SpatialNavigation.init();

    // Define navigable elements (anchors and elements with "focusable" class).
    SpatialNavigation.add({
        selector: '.swiper-slide,img,li,button' /* selectores que va a tener control de desplazamiento  */
        
    });

    // Make the *currently existing* navigable elements focusable.
    SpatialNavigation.makeFocusable();

    // Focus the first navigable element.
    SpatialNavigation.focus();
});