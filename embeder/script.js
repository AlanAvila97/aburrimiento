// Setup

var panZoom = svgPanZoom("#svg", {
  zoomEnabled: true,
  controlIconsEnabled: false,
  preventMouseEventsDefault: false,
  mouseWheelZoomEnabled: true,
  dblClickZoomEnabled: false,
  fit: 1,
  center: 1
});

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
console.log(mobileCheck());
// PanBy Helper by the plugin

function customPanBy(amount){ // {x: 1, y: 2}
    var animationTime = 300 // ms
    , animationStepTime = 15 // one frame per 30 ms
    , animationSteps = animationTime / animationStepTime
    , animationStep = 0
    , intervalID = null
    , destX = (window.innerWidth/4) - amount.x
    , destY = (window.innerHeight/4) - amount.y
    , stepX = destX / animationSteps
    , stepY = destY / animationSteps
    

    intervalID = setInterval(function(){
      if (animationStep++ < animationSteps) {
          panZoom.panBy({x: stepX, y: stepY})
      } else {
          // Cancel interval
          clearInterval(intervalID)
      }
    }, animationStepTime)
}

// On Click Move Category to Center of Viewport



var button1 = document.getElementById("MX-BCN")
button1.addEventListener("click", function() {
  let mob = mobileCheck();
if(!mob){
  console.log(mob);
  const { left, width, top, height } = button1.getBoundingClientRect();
  customPanBy({x: left + width/2, y: top + height/2});
}

playRadio('https://s2.mexside.net/8220/stream');
});

var button2 = document.getElementById("MX-BCS")
button2.addEventListener("click", function() {
  let mob = mobileCheck();
if(!mob){
  const { left, width, top, height } = button2.getBoundingClientRect();
  customPanBy({x: left + width/2, y: top + height/2});

}
playRadio('https://s2.mexside.net/8160/stream');
});

var button3 = document.getElementById("MX-CAM")
button3.addEventListener("click", function() {
  let mob = mobileCheck();
if(!mob){
  
  const { left, width, top, height } = button3.getBoundingClientRect();
  customPanBy({x: left + width/2, y: top + height/2});
}
});

var button4 = document.getElementById("MX-CHP")
button4.addEventListener("click", function() {
  let mob = mobileCheck();
if(!mob){
  
  const { left, width, top, height } = button4.getBoundingClientRect();
  customPanBy({x: left + width/2, y: top + height/2});
}

playRadio('https://s2.mexside.net/8220/stream');
});

var button5 = document.getElementById("MX-CHH")
button5.addEventListener("click", function() {
  let mob = mobileCheck();
if(!mob){
  
  const { left, width, top, height } = button5.getBoundingClientRect();
  customPanBy({x: left + width/2, y: top + height/2});
}
});
let i = 0;
function playRadio(x) {

i++;
  // Variable global para controlar el estado del audio y la estación
  if (!window.audio) {
    window.audio = new Audio();
    window.audio.type = "audio/aac";
    window.audio.addEventListener('ended', function() {
      console.log('La estación ha terminado de reproducirse');
    });
  }

  // Verificar si la estación ha cambiado (x diferente de la estación actual)
  if (window.currentStation !== x) {
    window.currentStation = x; // Actualizamos la estación
    window.audio.pause();
    window.audio.src = x;
    setTimeout(() => {
      window.audio.play().catch(function(error) {
        console.log('Error al intentar reproducir:', error);
      }); // Intentamos reproducir la nueva estación
    }, 1000);      // Asignamos la nueva fuente de audio
   
    console.log('Reproduciendo nueva estación:', x);
  } else {
    console.log('Continúa reproduciendo la misma estación');
  }

  if(i > 1){
    if (window.audio.paused) {
      window.audio.play().catch(function(error) {
        console.log('Error al intentar reproducir:', error);
      });
      console.log('Reproduciendo');
    } else {
      window.audio.pause();
      console.log('Pausado');
    }
  }
  // Pausar o reanudar la reproducción con el botón de play/pause


}




// Control Buttons

// Función que recibe un ID y un tipo de evento y asigna un addEventListener al elemento con ese ID.

function agregarEventoPorId(id, tipoEvento, funcion) {
  var elemento = document.getElementById(id);
  if (elemento) {
      // Agregar el evento
      elemento.addEventListener(tipoEvento, funcion);
  } else {
      console.log("Elemento no encontrado con el ID:", id);
  }
}

// Función para manejar el zoom-in.
function zoomInHandler(ev) {
  ev.preventDefault(); // Prevenir comportamiento por defecto.
  panZoom.zoomIn();    // Llamar al método zoomIn de panZoom.
}

// Función para manejar el zoom-out.
function zoomOutHandler(ev) {
  ev.preventDefault(); // Prevenir comportamiento por defecto.
  panZoom.zoomOut();   // Llamar al método zoomOut de panZoom.
}

// Agregar los eventos para los botones de zoom.
agregarEventoPorId("zoom-in", "click", zoomInHandler);
agregarEventoPorId("zoom-out", "click", zoomOutHandler);

/*
document.getElementById("zoom-in").addEventListener("click", function (ev) {
  ev.preventDefault();
  panZoom.zoomIn();
});

document.getElementById("zoom-out").addEventListener("click", function (ev) {
  ev.preventDefault();
  panZoom.zoomOut();
});
*/
document.getElementById("reset").addEventListener("click", function (ev) {
  ev.preventDefault();
  panZoom.resetZoom();
  panZoom.center();
});

  // Get all elements with the 'hoverable' class
  const hoverableElements = document.querySelectorAll('.hoverable');

  hoverableElements.forEach(element => {
      // Fix color on click
      element.addEventListener('click', () => {

        console.log('Hola');
        
        //console.log(element.id);

        hoverableElements.forEach(elemento => {

          if(element.id === elemento.id){
            elemento.setAttribute('style', 'fill:white;fill-opacity:0.1;stroke-width:0.35408;stroke:white;'); // Change fill color on hover
            
          }
          if(element.id != elemento.id){
            elemento.setAttribute('style', 'fill:#000;fill-opacity:0.8;stroke-width:0.35408;stroke: rgba(255, 255, 255, 0.273);'); // Change fill color on hover
          }

          
          

          });
  
        });
    });
        /*
//console.log(hoverableElements);
let isColorChanged = false; // Track whether the color has been changed

  // Iterate over each element and add event listeners
  hoverableElements.forEach(element => {
    // Save the original color

    const originalColor = element.getAttribute('style') || element.getAttribute('stroke') || 'black';

    // Change color on mouseenter
    element.addEventListener('mouseenter', () => {
      if (element.getAttribute('style')) {
        //console.log(element.getAttribute('style'));
        element.setAttribute('style', 'fill:#fff;fill-opacity:0.1;stroke-width:0.35408;stroke:white;'); // Change fill color on hover
      } else if (element.getAttribute('stroke')) {
        element.setAttribute('stroke', 'red'); // Change stroke color on hover
      }
    });



    // Revert color on mouseleave
    element.addEventListener('mouseleave', () => {
      if (!isColorChanged) {
        // Revert to original color on mouseleave if it's not fixed
        if (element.getAttribute('style')) {
          element.setAttribute('style', 'fill:#000;fill-opacity:0.1;stroke-width:0.35408;stroke:black;'); // Change fill color on hover
        } else if (element.getAttribute('stroke')) {
          element.setAttribute('stroke', originalColor);
        }
      }
    });

    
  });
  */