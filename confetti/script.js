// NOTE: This fix is no longer needed if you are using the latest version of animejs
// See this issue: https://github.com/juliangarnier/anime/issues/577
// https://confetti.js.org/more.html biblioteca

//parámetros de la animación
var anim = anime({
  targets: document.getElementById('shape'),
  scale: [1, 2],
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
    console.log('Hola');
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

// Uncomment to trigger animation on mouse events
// document.body.addEventListener('mousedown', toggle);
// document.body.addEventListener('mouseup', toggle);

// document.getElementById("shape").onmouseover = function() {toggle()};

function mouseOver() {
  console.log('Hola');
}
