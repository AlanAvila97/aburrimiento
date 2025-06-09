document.addEventListener('DOMContentLoaded', contenedoresCategorias);
document.addEventListener('DOMContentLoaded', obtenerCanales);

const subti = "https://canaloncetv.s3.amazonaws.com/REST/data/mdb/carouselesapp.json?cache=6";
const canales = "https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json"
const root = document.querySelector("#root");
const body = document.querySelector("body");

var a = [];
a.push(JSON.parse(localStorage.getItem('session')));
/* localStorage.clear(); */
console.log(a);
let enFuncionPrincipal = false;





/* document.getElementById('preloader').style.display = 'block'; */
function contenedoresCategorias() {
  /* let enFuncionPrincipal = true; */
  fetch(subti)
    .then(response => response.json()) //datos obtenidos en json  
    .then(subtitulos => {
      /* console.log(subtitulos); */

      subtitulos.forEach(element => {

        const categ = element[2].carousel.carousel

        /* console.table(categ) */

        categ.forEach(titcat => { // carrusel de categorias 

          const resttitulos = titcat.name // variable que almacena los nombres de las categorias 
          const idcat = titcat.id_cat // variable que almacena el id de cada categoria

          const div = document.createElement('div')
          div.setAttribute("class", "container")

          let titulo = resttitulos.replaceAll(' ', '-');
          let tituloespecial = eliminarAcentos(titulo);

          div.innerHTML = `
          <h1>${resttitulos}</h1>
            <div class="swiper-container ${tituloespecial}">
                <div id=${idcat} class="swiper-wrapper" data-categoria=${tituloespecial}></div>
            </div>
                    
             `;
          root.appendChild(div)


          //Menu HEADER
          var headnav = document.createElement("button");
              headnav.setAttribute("class","menu-item")
              headnav.setAttribute("id",titcat.id_cat)
          var menu = document.querySelector(".menu");
          /* console.log(menu); */
          /* headnav.innerHTML = `
          
          <div class="submenu" data-id=${titcat.id_cat}></div>
          `; */
          
          headnav.innerHTML = `
          ${titcat.name}
          `;

          //FIN DE MENU NAV
          
          var cat_id = titcat.id
          headnav.setAttribute("tabindex", "-1")
          menu.appendChild(headnav)

        }) // CIERRE DE TICAT/CARRUSEL DE CATEGORIAS


      }); // CIERRE DE element ForEach
     
      
    }) // CIERRE DE subtitulos
} //CIERRE DE FUNCION OBTENERSUBTITULOS

let html = '<h2>sasa</h2>';
function obtenerCanales() {
  fetch(canales)
    .then(resp => resp.json())
    .then(chanel => {


      //document.getElementById('preloader').style.display = 'none';

      var preloader = document.querySelector(".preloader");
      preloader.classList.add("fade-out");
      setTimeout(function () {
        preloader.style.display = "none";
      }, 500);
      //TITULOS PARA SUBMENU DE NAV


      var subnav2 = document.querySelectorAll("nav .menu button"); //VARIABLE DE ELEMENTOS DEL SUBMENU DE HEADER
      
      
      
      var id_contenedores = document.querySelectorAll(".container .swiper-container .swiper-wrapper")
      /* console.log(id_contenedores); */

      chanel.forEach(chan => {

        /* console.log(subnav2); */
        //SWIPER AUTOPLAY
        var slideauto = document.createElement("div");
        var swiperautoplay = document.querySelector(".swiperSup .swiper-wrapper");

        slideauto.setAttribute("class", "swiper-slide");
        slideauto.setAttribute("tabindex", "-1")
        slideauto.setAttribute("data-slugc", chan.slugc)
        slideauto.setAttribute("data-name", chan.name)
        slideauto.setAttribute("data-imageN", chan.imageN)
        slideauto.setAttribute("data-description", chan.description)
        slideauto.innerHTML = `
      
        <img  data-slugc=${chan.slugc} data-name="${chan.name}" data-imageN="${chan.imageN}" src="https://canalonce.mx/REST/data/miniaturas/${chan.imageCH}">
        
        `;
        swiperautoplay.appendChild(slideauto); // FIN DE SWIPER AUTOPLAY

        const idcategorias = chan.category //VARIABLE DE ID DE CATEGORIAS 

        

        id_contenedores.forEach(id_cont => {
          var id_container = id_cont.id

          if (id_container == idcategorias) { //CONDICION PARA SELECCIONAR ID DEL CARRUSEL E INSERTAR SUS RESPECTIVOS CANALES

            var class_swiper = id_cont.dataset.categoria;
            const div_cont = document.createElement("div");
            div_cont.setAttribute("class", "swiper-slide");
            div_cont.setAttribute("tabindex", "-1");
            div_cont.setAttribute("data-slugc", chan.slugc);
            div_cont.setAttribute("data-name", chan.name);
            div_cont.setAttribute("data-imageN", chan.imageN);
            div_cont.setAttribute("data-description", chan.description);

            div_cont.innerHTML = `
       <img  data-slugc=${chan.slugc} data-name="${chan.name}" data-imageN="${chan.imageN}" src="https://canalonce.mx/REST/data/miniaturas/${chan.imageCH}">
       <h3>${chan.name}</h3>
       
       `
            /* sliderPrograms('swiper-container') */
            id_cont.appendChild(div_cont)
            sliderPrograms(class_swiper)
          }
         
        }) //CIERRE DE forEach DE id_cont

        console.log();
        subnav2.forEach(eventonav => {//ELEMENTOS DE MENU DE NAVEGACION
          /* console.log(eventonav); */
          
            var Id_navel = eventonav.id //ID DE ELEMENTOS DEL MENU DE NAVEGACION
            /* console.log(Id_navel); */
            var b_nav=document.getElementById(Id_navel)
            /* console.log(b_nav); */
            b_nav.addEventListener('keyup', (e) => { //BOTON DE NAVEGACION
              
              if (e.keyCode === 13) {
                /* root.innerHTML=""; */
                // Código a ejecutar cuando se presiona la tecla Enter
                if(Id_navel == idcategorias){
          //         root.innerHTML="";
          //       var caratulas=document.createElement("div")
                
                
          //       caratulas.className = "tarjeta";
          //       caratulas.setAttribute("tabindex", "-1");
          //       caratulas.setAttribute("data-slugc", chan.slugc);
          //       caratulas.setAttribute("data-name", chan.name);
          //       caratulas.setAttribute("data-imageN", chan.imageN);
          //       caratulas.setAttribute("data-description", chan.description);
          //       caratulas.innerHTML = `
          //       <img src="https://canalonce.mx/REST/data/miniaturas/${chan.imageCH}" alt="${chan.name}">
          //       <h3>${chan.name}</h3>
           
          //  `
          //  console.log(chan.name);
                
          //       root.appendChild(caratulas) 
                
                }
                var cards= document.querySelectorAll(".tarjeta")
            /* console.log(cards); */
            cards.forEach(card => {

              //AGREGAR EVENTO "ENTER" A LOS BOTONES DE HEADER
              card.addEventListener('keyup', (e) => {
                let idec = card.getAttribute('data-id')
                let nombre = card.getAttribute('data-name')
                let imagen = card.getAttribute('data-imageN')
                let slugc = card.getAttribute('data-slugc')
                let descrip = card.getAttribute('data-description')
      
      
                if (e.keyCode === 13) {
                  // Código a ejecutar cuando se presiona la tecla Enter
                  obtenerEpisodios(idec, nombre, imagen, slugc, descrip);
      
                }
              });
            })
              }
            });
            
            
            
          })//ELEMENTOS DE MENU DE NAVEGACION

      }) //cierre de chan
      
      let buttons_nav =  document.querySelectorAll('.menu-item');

      buttons_nav.forEach(btn => {
        btn.addEventListener('keyup', (e) => setProgramsButtons(chanel, e) );
      });
      

      var entereventSlide = document.querySelectorAll(".swiper-slide") //VARIABLE QUE SELECCIONA Y ALMACENA TODOS LOS SLIDE
      entereventSlide.forEach(evecli => {

        //AGREGAR EVENTO "ENTER" A LOS SLIDE 
        evecli.addEventListener('keyup', (e) => {
          let idec = evecli.getAttribute('data-id')
          let nombre = evecli.getAttribute('data-name')
          let imagen = evecli.getAttribute('data-imageN')
          let slugc = evecli.getAttribute('data-slugc')
          let descrip = evecli.getAttribute('data-description')


          if (e.keyCode === 13) {
            // Código a ejecutar cuando se presiona la tecla Enter
            obtenerEpisodios(idec, nombre, imagen, slugc, descrip);

          }
        });
      })            
      //EVENTO AL SELECCIONAR Y DAR ENTER EN UN CANAL DEL SUBMENU SE ACCEDA A LOS EPISODIOS
      var subitem_nav=document.querySelectorAll(".submenu li")
      /* console.log(item_nav); */
      subitem_nav.forEach(subitem=>{
        /* console.log(subitem); */
        subitem.addEventListener('keyup', (e) => {
          let idec = subitem.getAttribute('data-id')
          let nombre = subitem.getAttribute('data-name')
          let imagen = subitem.getAttribute('data-imageN')
          let slugc = subitem.getAttribute('data-slugc')
          let descrip = subitem.getAttribute('data-description')


          if (e.keyCode === 13) {
            // Código a ejecutar cuando se presiona la tecla Enter
            obtenerEpisodios(idec, nombre, imagen, slugc, descrip);

          }
        });
        
      })//FIN EVENTO AL SELECCIONAR Y DAR ENTER EN UN CANAL DEL SUBMENU SE ACCEDA A LOS EPISODIOS
    }) //cierre chanel

}
function setProgramsButtons(data, e) {
  if(e.keyCode === 13){
    root.innerHTML="";              
    data.forEach((chan, index, i) => {
      if(e.target.id === chan.category){
        console.log(e.target.id);
        var caratulas = document.createElement("div");
            caratulas.className = "tarjeta";
            caratulas.innerHTML = '<img src="https://canalonce.mx/REST/data/miniaturas/'+chan.imageCH+'" alt="'+chan.name+'">'+
                                  '<h3>'+chan.name+'</h3>';
        console.log(caratulas);
        root.appendChild(caratulas);
      }
    });
    //     console.log(caratulas);    
    // setProgramsButtons()
  }
}
//cierre de funcion obtenerCanales
let contenidoplus = document.querySelector("div") //variable que almacena los carruseles del home



function obtenerEpisodios(idec, nombre, imagen, slugc, descrip) { //OBTENER EPISODIOS
  window.addEventListener("keydown", function (inEvent) { //SE AGREGA EVENTO AL BOTON DE BACK PARA REGRESAR AL HOME
    if (window.event) {
      keycode = inEvent.keyCode;
    } else if (e.which) {
      keycode = inEvent.which;
    }
    switch (keycode) {
      case 461:
        reloadContent();
        console.log("HOME");

        break;

    }
  });

  let jsonepi = slugc + ".json"
  let urepisodio = "https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodes/desktop/" + jsonepi

  let epcont = document.querySelector("body")
  let div = document.createElement("div")
  div.setAttribute("class", "contenedor-episodios")
  div.setAttribute("id", "contenedor-episodios")


  div.innerHTML = `
  <div id="contmenu-episodios">
  <div id="overlay-container" style="display: none;">
        <button id="boton-1">Continuar</button>
        <button id="boton-2">Reproducir</button>
  </div>
      <h1>${nombre}</h1>
      
      <div class="desc">
      <img  src="https://canalonce.mx/REST/data/normal/${imagen}" style="width: 55%; height: 60%; float:left;">
      <div class="texto">${descrip}</div>

     
            <h2>EPISODIOS</h2>
      
         <div class="video-container"></div>
    <div class="preloader">
				<div class="loader"></div>
			  </div>
      </div
  </div>
      `
  epcont.innerHTML = "";

  epcont.append(div);


  /* console.log(urepisodio); */

  //contenedor de episodios 
  fetch(urepisodio)
    .then(response => response.json())
    .then(episodio => {
      //ARRAY DE EPISODIOS DE MENU
      let vdaArray = []; //array donde se almacena los VIDEO_ID de los episodios que se encuentran en el menu del canal seleccionado

      /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
      //PRELOADER
      var preloader = document.querySelector(".preloader");
      preloader.classList.add("fade-out");
      setTimeout(function () {
        preloader.style.display = "none";
      }, 500);
      // FIN DE PRELOADER
      /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


      episodio.forEach(epiCanal => { //INICIO DE CONTENEDOR DE EPISODIOS
        let contVideo = document.querySelector(".video-container")
        let titlechanel = epiCanal.title
        let linkfile = epiCanal.file
        let linkYout = epiCanal.vda
        let idCanal = epiCanal.id
        let div = document.createElement("li")
        div.setAttribute("tabindex", "0")
        div.setAttribute("vda", linkYout)
        div.setAttribute("id", idCanal)
        div.setAttribute("file", linkfile)
        div.textContent = titlechanel


        contVideo.appendChild(div)




        //SELECCIONA EL DIV QUE SE ENCUENTRA EN EL VIDEO-CONTAINER PARA AGREGAR EVENTO
        var eveclic2 = document.getElementById(idCanal)
        eveclic2.addEventListener('keyup', (e) => {
          if (e.keyCode === 13) {

            let mediaYout = eveclic2.getAttribute('vda')
            let mediafile = eveclic2.getAttribute("file")
            let episelect = eveclic2.getAttribute("id")
            /* console.log(episelect); */


            const overlayContainer = document.getElementById('overlay-container');
            overlayContainer.style.display = 'block';
            var contin = document.getElementById("boton-1");
            var repro = document.getElementById("boton-2");


            repro.addEventListener('keyup', (e) => { //BOTON REPRO MANDA A LLAMAR LA FUNCION DE REPRODUCIR EPISODIO DESDE EL INICIO
              if (e.keyCode === 13) {
                // Código a ejecutar cuando se presiona la tecla Enter
                playerMedia(mediafile, mediaYout, vdaArray);
              }
            });
            contin.addEventListener('keyup', (e) => { //BOTTON CONIN MANDA A LLAMAR LA FUNCION DE CONTINUAR VIENDO EPISODIO DESDE SU ULTIMA REPRODCUCION
              if (e.keyCode === 13) {
                // Código a ejecutar cuando se presiona la tecla Enter
                playerMediacontinuacion(mediafile, mediaYout, episelect);
              }
            });




          } //Cierre de eventto de enter 13
        }); //Cierre de eveclic2


        //FUNCION PLAYERMEDIA
        function playerMedia(mediafile, mediaYout, episelectf) {
          let contplay = document.querySelector("body")
          var url_especial = eliminarDominioUrl(mediaYout);
          let url_especial_of = url_especial + "?enablejsapi=1&rel=0&modestbranding=1&showinfo=0"
          let url_of = "https://www.youtube.com/embed/" + url_especial_of;
          console.log(mediaYout);
          console.log(url_of);

          // Variables para controlar el estado
          /* let enFuncionPrincipal = false; */
          // COMPROBAR LA URL
          if (startURL(mediaYout)) { //REPRODUCTOR M3U8

            // Verificar si el elemento de video ya existe en el body
            const existingVideo = document.getElementById('my-video');

            if (!existingVideo) {
              console.log("La URL comienza con 'https://d'");
              /* console.log(mediaYout); */

              // Crear un elemento de video
              const video = document.createElement('video');
              video.id = 'my-video';
              video.classList.add('video-js');



              contplay.innerHTML = "";
              contplay.innerHTML = `
              <div class="preloader">
				          <div class="loader"></div>
			        </div>
              `;
              contplay.appendChild(video);
              var preloader = document.querySelector(".preloader");
              preloader.classList.add("fade-out");
              setTimeout(function () {
                preloader.style.display = "none";
              }, 500);

              //SE ALMACENAN LOS EPISODIOS DEL CANAL
              console.log(Id_episodios);
              Id_episodios.forEach(epiVda => {
                const url = epiVda.getAttribute('vda'); //SE ALMACENA EL ATRIBUTO DE LA URL DE LOS EPISODIOS DEL MENU
                /* var urlVda = eliminarDominioUrl(url); // SE ELIMINA EL DOMINIO DE LA URL DEL EPISODIO Y SOLO SE GUARDA EL ID_VIDEO */

                vdaArray.push(url); //SE ALMACENA LOS ID_VIDEO EN EL ARRAY "vdaArray"
              });
              //CIERRE DE ALMACENAR LOS EPISODIOS DEL CANL

              const player = videojs('my-video', {
                controls: true,
                autoplay: 'any',
                keyboard: true,
                sources: [{
                  src: mediaYout,
                  type: 'application/x-mpegURL'
                }]

              });
              /* console.log(vdaArray); */


              var currentEpisodeIndex = 0;
              // Iniciar en pantalla completa
              player.on('ready', function () {
                video.requestFullscreen();


              });
              // Evento que se dispara cuando el video termina
              player.on('ended', function () {
                currentEpisodeIndex++;
                if (currentEpisodeIndex < vdaArray.length) {
                  player.src({
                    type: 'application/x-mpegURL',
                    src: vdaArray[currentEpisodeIndex]
                  });
                  player.play();
                } else {
                  console.log('No hay más episodios para reproducir.');
                  /* player.dispose(); */
                }
              });

              window.addEventListener("keydown", function (inEvent) { //EVENTOS DE BOTONES DEL CONTROL EN LA VISTA DEL REPRODCUTOR
                switch (keycode) {
                  case 461: //BOTON BACK DESDE VISTA DE PLAYER
                    console.log("BOTON BACK videojs");
                    player.dispose();
                    reloadepisodios();
                    const overlayContainer = document.getElementById('overlay-container');
                    overlayContainer.style.display = 'none';
                    break;
                  case 13:
                    if (player.paused()) {
                      player.play();
                    } else {
                      player.pause();
                    }
                    break;
                  case 37: //Left
                    console.log("Rebobinar video");
                    var playertimel = player.currentTime();
                    player.currentTime(playertimel - 10);
                    break;

                  case 39: //Right
                    console.log("Adelantar video");
                    var playertimer = player.currentTime();
                    player.currentTime(playertimer + 10);
                    break;

                    // BOTONES DE MEDIOS DE REPRODUCCION
                  case 415: //BOTON PLAY
                    player.play();
                    console.log("PLAY");
                    break;

                  case 19: //PAUSA
                    player.pause();
                    console.log("PAUSE");
                    break;

                  case 412: //REBOBINAR
                    console.log("Rebobinar video");
                    var playertimel = player.currentTime();
                    player.currentTime(playertimel - 10);
                    break;

                  case 417: //ADELANTAR
                    console.log("Adelantar video");
                    var playertimer = player.currentTime();
                    player.currentTime(playertimer + 10);
                    break;
                }
              });

            } //CIERRE DE  Verificar si el elemento de video ya existe en el body

          } else { //REPRODUCTOR YOUTUBE


            const vidyou = document.createElement('div');

            vidyou.innerHTML = `
                  <iframe 
                  id="video-iframe" 
                  src=""
                  frameborder="0"
                  allowFullScreen>
                  allow="seekto">
                  </iframe>
                  `
            contplay.innerHTML = " ";
            contplay.innerHTML = `
                    <div class="preloader">
                        <div class="loader"></div>
                    </div>
                    `;
            contplay.appendChild(vidyou);

            var iframe = document.getElementById('video-iframe');
            iframe.src = url_of //url del episodio

            const buttons = document.getElementById('buttons');
            onYouTubeIframeAPIReady(url_of) //SE MANDA A LLAMAR LA FUNCION QUE INICIALIZA EL PLAYER IFRAME

            //CODIGO PARA DESAPARECER EL PRELOADER CUANDO CARGUE COMPLETAMENTE EL DOM
            var preloader = document.querySelector(".preloader");
            preloader.classList.add("fade-out");
            setTimeout(function () {
              preloader.style.display = "none";
            }, 500);
            //FIN DE CODIGO PARA DESAPARECER EL PRELOADER CUANDO CARGUE COMPLETAMENTE EL DOM
            //
            // Variables para controlar el estado

            //EVENTO DE BOTON BACK EN VENTANA DE PLAYER
            window.addEventListener("keydown", function (inEvent) {
              if (window.event) {
                keycode = inEvent.keyCode;
              } else if (e.which) {
                keycode = inEvent.which;
              }
              let buttonPressed = 0;
              switch (keycode) {
                case 461: //BOTON BACK DESDE VISTA DE PLAYER
                  console.log("BOTON BACK");
                  reloadContent();
                  /* enFuncionPrincipal = false; */
                  const overlayContainer = document.getElementById('overlay-container');
                  overlayContainer.style.display = 'none';


                  break;

                case 13: //BOTON OK
                  console.log("HOLA 13");
                  playpauseVi()
                  break;

                case 37: //Left
                  console.log("Rebobinar video");
                  player.seekTo(player.getCurrentTime() - 10);
                  break;

                case 39: //Right
                  console.log("Adelantar video");
                  player.seekTo(player.getCurrentTime() + 10);
                  break;

                  // BOTONES DE MEDIOS DE REPRODUCCION
                case 415: //BOTON PLAY
                  player.playVideo();
                  console.log("PLAY");
                  break;

                case 19: //PAUSA
                  player.pauseVideo();
                  console.log("PAUSE");
                  break;

                case 412: //REBOBINAR
                  console.log("Rebobinar video");
                  player.seekTo(player.getCurrentTime() - 10);
                  break;

                case 417: //ADELANTAR
                  console.log("Adelantar video");
                  player.seekTo(player.getCurrentTime() + 10);
                  break;
              }
            });
          }
          //
          // Get the YouTube iframe element

          //FUNCION PARA INICIALIAR IFRAME 

          var currentIndex = 0;
          let idvideo2 = eliminarDominioUrl(mediaYout);
          let posicion = vdaArray.indexOf(idvideo2);

          function onYouTubeIframeAPIReady(videoId, url_of) {
            player = new YT.Player('video-iframe', {
              videoId: vdaArray[currentIndex],
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }


          function onPlayerReady(event) { //activar video PLAY VIDEO
            player.playVideo();

          }

          function SaveDataToLocalStorage(data) {
            var a = [];
            // Parse the serialized data back into an aray of objects
            a = JSON.parse(localStorage.getItem('session')) || [];
            // Push the new data (whether it be an object or anything else) onto the array
            a.push(data);
            localStorage.setItem('session', JSON.stringify(a));
          }

          function onPlayerStateChange(event) {

            /* if (event.data === 2) { // playing */
            if (event.data === YT.PlayerState.PAUSED) {
              // Crear un objeto JSON para almacenar el estado de cada iframe
              lastPosition = player.getCurrentTime(); //se obtenie el valor del player

              //

              let idvideo = eliminarDominioUrl(mediaYout);
              const storedState2 = localStorage.getItem('session'); //se obtenie el array almacenado en localstorage
              if (storedState2 !== null) {

                const state2 = JSON.parse(storedState2);
                const selectedObject2 = state2.filter(valor => valor.videoId === idvideo); //SE FILTRA EL JSON Y BUSCA EL ID ESPECIFICO ENTRE TODOS LOS OBJETOS DEL ARRAY
                console.log("update");

                if (selectedObject2.length > 0) {

                  console.log(`El objeto con ID:${idvideo} existe`);

                } else {
                  console.log(`No se encontro un objeto con ID ${idvideo}`);
                  SaveDataToLocalStorage({
                    "videoId": idvideo,
                    "currentTime": lastPosition
                  });
                }

                /* console.log(selectedObject2); */
              } else {
                SaveDataToLocalStorage({
                  "videoId": url_especial,
                  "currentTime": lastPosition
                });
                console.log("save local");
              }
              //
            }


            // Función para cargar el reproductor de video
            if (event.data === 0) { //AL FINALIZAR REPRODUCE EL PRROXIMO EPISODIO AUTOMATICAMENTE
              console.log(vdaArray);

              // Reproducir el próximo video_id del iframe
              currentIndex++;
              posicion++;

              if (currentIndex < vdaArray.length) {

                console.log(posicion);
                player.loadVideoById(vdaArray[posicion]);
              } else {

                reloadepisodios()
              }

            }

          }




          function playpauseVi() { //FUNCION PARA PAUSAR Y DAR PLAY 
            if (player.getPlayerState() === 1) {
              player.pauseVideo(); //PAUSAR VIDEO
            } else {
              player.playVideo(); //REPRRODUCIR VIDEO
            }
          }

          function playpauseVideojs() { //FUNCION PARA PAUSAR Y DAR PLAY 
            if (player.getPlayerState() === 1) {
              player.pause(); //PAUSAR VIDEO
            } else {
              player.play(); //REPRRODUCIR VIDEO
            }
          }


        } //CIERRE DE PLAYER 

        //PLAYER CONTINUAR
        function playerMediacontinuacion(mediafile, mediaYout, episelect) {
          let contplay = document.querySelector("body")
          // COMPROBAR LA URL
          if (startURL(mediaYout)) { //REPRODUCTOR M3U8

            // Verificar si el elemento de video ya existe en el body
            const existingVideo = document.getElementById('my-video');

            if (!existingVideo) {
              console.log("La URL comienza con 'https://d'");
              console.log(mediaYout);

              // Crear un elemento de video
              const video = document.createElement('video');
              video.id = 'my-video';
              video.classList.add('video-js');



              contplay.innerHTML = "";
              contplay.innerHTML = `
              <div class="preloader">
				          <div class="loader"></div>
			        </div>
              `;
              contplay.appendChild(video);
              var preloader = document.querySelector(".preloader");
              preloader.classList.add("fade-out");
              setTimeout(function () {
                preloader.style.display = "none";
              }, 500);

              const player = videojs('my-video', {
                controls: true,
                autoplay: 'any',
                keyboard: true,
                sources: [{
                  src: mediaYout,
                  type: 'application/x-mpegURL'
                }]

              });
              // Iniciar en pantalla completa
              player.on('ready', function () {
                video.requestFullscreen();
              });
              //BOTON BACK EN PLAYER M3U8
              window.addEventListener("keydown", function (inEvent) {
                switch (keycode) {
                  case 461: //BOTON BACK DESDE VISTA DE PLAYER
                    console.log("BOTON BACK videojs");
                    /* var removevideojs=this.document.getElementById("my-video").remove(this) */
                    player.dispose();
                    /* const overlayContainer = document.getElementById('overlay-container');
                    overlayContainer.style.display = 'none'; */
                    break;
                }
              });

            } //CIERRE DE  Verificar si el elemento de video ya existe en el body

          } else { //REPRODUCTOR YOUTUBE

            //IFRAME YOUTUBE
            let url_especial = eliminarDominioUrl(mediaYout);
            let url_especial_of = url_especial + "?enablejsapi=1&rel=0&modestbranding=1&showinfo=0"
            let url_of = "https://www.youtube.com/embed/" + url_especial_of;

            const vidyou = document.createElement('div');


            vidyou.innerHTML = `
                  <iframe 
                  id="video-iframe" 
                  src=""
                  frameborder="0"
                  allowFullScreen>
                  allow="seekto">
                  </iframe>
                  `
            contplay.innerHTML = " ";
            contplay.innerHTML = `
                    <div class="preloader">
                        <div class="loader"></div>
                    </div>
                    `;
            contplay.appendChild(vidyou);
            var iframe = document.getElementById('video-iframe');
            iframe.src = url_of //url del episodio

            onYouTubeIframeAPIReady(url_especial) //SE MANDA A LLAMAR LA FUNCION QUE INICIALIZA EL PLAYER IFRAME

            //CODIGO PARA DESAPARECER EL PRELOADER CUANDO CARGUE COMPLETAMENTE EL DOM
            var preloader = document.querySelector(".preloader");
            preloader.classList.add("fade-out");
            setTimeout(function () {
              preloader.style.display = "none";
            }, 500);
            //FIN DE CODIGO PARA DESAPARECER EL PRELOADER CUANDO CARGUE COMPLETAMENTE EL DOM

            //EVENTO DE BOTON BACK EN VENTANA DE PLAYER
            window.addEventListener("keydown", function (inEvent) {
              if (window.event) {
                keycode = inEvent.keyCode;
              } else if (e.which) {
                keycode = inEvent.which;
              }
              let buttonPressed = 0;
              switch (keycode) {
                case 461: //BOTON BACK DESDE VISTA DE PLAYER
                  console.log("BOTON BACK");
                  reloadepisodios();
                  const overlayContainer = document.getElementById('overlay-container');
                  overlayContainer.style.display = 'none';
                  break;

                case 13: //BOTON OK
                  console.log("HOLA 13");
                  playpauseVi()
                  break;

                case 37: //Left
                  console.log("Rebobinar video");
                  player.seekTo(player.getCurrentTime() - 10);
                  break;

                case 39: //Right
                  console.log("Adelantar video");
                  player.seekTo(player.getCurrentTime() + 10);
                  break;

                  // BOTONES DE MEDIOS DE REPRODUCCION
                case 415: //BOTON PLAY
                  player.playVideo();
                  console.log("PLAY");
                  break;

                case 19: //PAUSA
                  player.pauseVideo();
                  console.log("PAUSE");
                  break;

                case 412: //REBOBINAR
                  console.log("Rebobinar video");
                  player.seekTo(player.getCurrentTime() - 10);
                  break;

                case 417: //ADELANTAR
                  console.log("Adelantar video");
                  player.seekTo(player.getCurrentTime() + 10);
                  break;
              }
            });

          }
          //
          // Get the YouTube iframe element

          //FUNCION PARA INICIALIAR IFRAME 
          var lastPosition = 0;

          function onYouTubeIframeAPIReady(url_especial, url_of) {
            player = new YT.Player('video-iframe', {
              videoId: url_of,
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }


          function onPlayerReady(event) { //activar video PLAY VIDEO
            let idvideo = eliminarDominioUrl(mediaYout);
            const storedState = localStorage.getItem('session'); //se obtenie el array almacenado en localstorage
            const state = JSON.parse(storedState);
            const selectedObject = state.filter(obj => obj.videoId === idvideo); //SE FILTRA EL JSON Y BUSCA EL ID ESPECIFICO ENTRE TODOS LOS OBJETOS DEL ARRAY
            console.log(selectedObject);

            if (selectedObject.length > 0) {
              console.log(`El ojeto seleccionado su ID es: ${idvideo} - tiempo almacenado: ${selectedObject[0].currentTime}`);

              const time_save = selectedObject[0].currentTime // VARIABLE QUE SE LE ASIGNA EL VALOR DEL TIEMPO GUARDADO DEL EPISODIO 

              player.seekTo(time_save); //SE ACTIVA EL PLAYER DEL IFRAME HACIENDO USO DEL TIEMPO QUE SE TIENE ALMACENADO EN LOCALSTORAGE
            } else {
              console.log(`No se encontró un objeto con ID ${idvideo}`);
            }



          }

          function SaveDataToLocalStorage(data) {
            var a = [];
            // Parse the serialized data back into an aray of objects
            a = JSON.parse(localStorage.getItem('session')) || [];
            // Push the new data (whether it be an object or anything else) onto the array
            a.push(data);
            localStorage.setItem('session', JSON.stringify(a));
          }

          function onPlayerStateChange(event) {
            if (event.data === 2) { // paused
              let url_especial = eliminarDominioUrl(mediaYout);
              lastPosition = player.getCurrentTime();
              SaveDataToLocalStorage({
                "videoId": url_especial,
                "currentTime": lastPosition
              });

            }
          }
          //fin funcion continuar video




          function playpauseVi() { //FUNCION PARA PAUSAR Y DAR PLAY 
            if (player.getPlayerState() === 1) {
              player.pauseVideo(); //PAUSAR VIDEO
            } else {
              player.playVideo(); //REPRRODUCIR VIDEO
            }
          }



        }
        //FIN PLAYER CONTINUAR
      }) //cierre de epiCanal

      var Id_episodios = document.querySelectorAll(".video-container li") //SE ALMACENA LOS TITULOS DEL MENU DE EPISODIOS EN LA VARIABLE

      Id_episodios.forEach(epiVda => {
        const url = epiVda.getAttribute('vda'); //SE ALMACENA EL ATRIBUTO DE LA URL DE LOS EPISODIOS DEL MENU
        var urlVda = eliminarDominioUrl(url); // SE ELIMINA EL DOMINIO DE LA URL DEL EPISODIO Y SOLO SE GUARDA EL ID_VIDEO

        vdaArray.push(urlVda); //SE ALMACENA LOS ID_VIDEO EN EL ARRAY "vdaArray"
      });

    }) //cierre de episodio
  function mostrarBotones(playerMedia) {
    const overlayContainer = document.getElementById('overlay-container');
    overlayContainer.style.display = 'block';

    var contin = document.getElementById("boton-1") /* .style.display = "block" */ ;
    var repro = document.getElementById("boton-2") /* .style.display = "block" */ ;


  }
  //FUNCION PARA REGRESAR CON EL BOTON AL MENU DE EPISODIOS
  var menuepisodios = document.querySelector(".contenedor-episodios") //VARIABLE QUE ALMACENA EL MENU DE EPISODIOS

  function reloadepisodios() {

    const lim = document.querySelector("div").remove(this)
    body.appendChild(menuepisodios);

  }

} //cierre de funcion obtenerEpisodios


//FUNCION PARA REGRESAR AL HOME
function reloadContent() {
  body.innerHTML = ""
  body.append(contenidoplus)
}
//



//FUNCION PARA INICIALIZAR SWIPER DE CARRUSELES
function sliderPrograms(slider) {
  const swiper_pgm = new Swiper("." + slider, {
    // var swiperdigi = new Swiper(".Digital", {
    slidesPerView: 3.7,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,

    },
    navigation: {
      nextEl: '.' + slider + ' .swiper-button-next',
      prevEl: '.' + slider + ' .swiper-button-prev ',
    },

    /*    pagination: {
         el: '.' + slider + '.swiper-pagination',
       }, */

  });
}
//

/**
 * @description Función que parsea una cadena eliminando acentos
 * @param cadena Contiene la cadena con caracteres acentos
 * @return {res} Retorna la cadena parseada
 */
function eliminarAcentos(cadena) {
  var chars = {
    "á": "a",
    "é": "e",
    "í": "i",
    "ó": "o",
    "ú": "u",
    "à": "a",
    "è": "e",
    "ì": "i",
    "ò": "o",
    "ù": "u",
    "ñ": "n",
    "Á": "A",
    "É": "E",
    "Í": "I",
    "Ó": "O",
    "Ú": "U",
    "À": "A",
    "È": "E",
    "Ì": "I",
    "Ò": "O",
    "Ù": "U",
    "Ñ": "N"
  };
  var expr = /[áàéèíìóòúùñ]/ig;
  var res = cadena.replace(expr, function (e) {
    return chars[e]
  });
  return res;
}
/**
 * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
 * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
 * @return {textParser} Retorna la cadena parseada
 */
/* function eliminarCaracteres(cadena){
  var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
  return outString;
} */

//FUNCION PARA eliminar el dominio de youtube del url del episodio
function eliminarDominioUrl(url) {
  const urlRelativa = url.replace(/^https?:\/\/youtu\.be\//, '');
  return urlRelativa;
}
//FUNCION PARA VERIFICAR QUE TIPO DE URL ES
function startURL(url) {
  return url.startsWith("https://d");

}

function startURLwatch(url) {
  return url.startsWith("https://youtu.be/watch?v=");

}

function eliminarDominioUrlwathc(url) {
  /* const urlwatch = url.replace(/^https?:\/\/youtu\.be\/watch/, ''); */
  const urlwatch = url.replace("https://youtu.be/watch?v=", '');
  return urlwatch;

}