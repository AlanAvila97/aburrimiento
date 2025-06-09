//parámetros de la animación
var anim = anime({
    targets: document.getElementById('shape'),
    scale: [1, 1.3],
    translateZ: 0,
    duration: 1600,
    easing: 'easeOutElastic',
    autoplay: false,
    opacity: [0, 1], // Fade effect from opacity 0 to 1
    translateY: .2,
    //rotate: '1turn'
});
  
//activa la animación
function accion(){
    toggle();
    
    setTimeout(() => {
      toggle();
    }, 2000);
}
//inicia y se hace reversa en la animación
function toggle() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      scalar: 1.3,
    });
  
    if (anim.began) {
      anim.reverse();
  
      if (anim.progress === 100 && anim.direction === 'reverse') {
        anim.completed = false;
      }
    }
  
    if (anim.paused) {
      anim.play();
    }
}