document.addEventListener('DOMContentLoaded', contenedoresCategorias);
document.addEventListener('DOMContentLoaded', obtenerCanales);

const subti = "https://canaloncetv.s3.amazonaws.com/REST/data/mdb/carouselesapp.json?cache=6";
const canales = "https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json"
const titulos = document.querySelector("#root");
const titulos2 = document.querySelector("body");



function contenedoresCategorias() {
  fetch(subti)
    .then(response => response.json())   //datos obtenidos en json  
    .then(subtitulos => {
      subtitulos.forEach(element => {
        
        const categ = element[2].carousel.carousel
        
        /* console.table(categ) */

        categ.forEach(titcat => {// carrusel de categorias 

          const resttitulos = titcat.name // variable que almacena los nombres de las categorias 
          const idcat = titcat.id_cat// variable que almacena el id de cada categoria
          


          const div = document.createElement('div')
          div.setAttribute("class", "container")


          let titulo = resttitulos.replaceAll(' ', '-');
          div.innerHTML = `
            <div class="swiper-container ${titulo}">
            
              <h1>${resttitulos}</h1>
              <div id=${idcat} class="swiper-wrapper">                      
              </div>
            </div>            
             `;



          titulos.appendChild(div)// se 





        })// CIERRE DE TICAT
      });// CIERRE DE element
    })// CIERRE DE subtitulos
}//CIERRE DE FUNCION OBTENERSUBTITULOS


function obtenerCanales() {
  fetch(canales)
    .then(resp => resp.json())
    .then(chanel => {
      chanel.forEach(chan => {

        const idcategorias = chan.category
/* console.log(chan);
 */
        switch (idcategorias) {

          case '15':// CATEGORIA COCINA
            const catCocina = [chan];
            catCocina.forEach(cocina => {
              let caratula = cocina.imageCH
              let imgN = cocina.imageN
              let slugc = cocina.slugc
              let idcaratula = cocina.id
              let namecaratula = cocina.name
              


              const container = document.getElementById(15);

              const div = document.createElement("div")
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              

              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  /* console.log(descrip); */
                  
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })


              div.innerHTML = `
      
       <img  data-slugc=${slugc} data-id=${idcaratula} id="${idcaratula}" data-name="${namecaratula}" data-imageN="${imgN}" src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
       <h3>${namecaratula}</h3>
       
       `
              sliderPrograms('Conversación')  

              // var swipercoci = new Swiper(".Cocina", {
              //   slidesPerView: 3.7,
              //   spaceBetween: 10,
              //   slidesPerGroup: 1,
              //   loop: false,
              //   loopFillGroupWithBlank: true,
              //   keyboard: {
              //     enabled: true
              //   },
              //   navigation: {
              //     nextEl: '.Cocina .swiper-button-next',
              //     prevEl: '.Cocina .swiper-button-prev ',
              //      },

              // });


              container.appendChild(div)

            })//cierre de foreach cocina
            break;

          case '11':// CATEGORIA CONVERSACION
            const catConversacion = [chan]
            catConversacion.forEach(conversacion => {

              let caratula = conversacion.imageCH
              let imgN = conversacion.imageN
              let slugc = conversacion.slugc
              let idcaratula = conversacion.id
              let namecaratula = conversacion.name
              


              const container = document.getElementById(11);

              const div = document.createElement("div")
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              

              var im = document.querySelectorAll(".swiper-slide")
              im.forEach(evecli => {
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })
              div.innerHTML = `
       
       <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
       <h3>${conversacion.name}</h3>
       `
              // var swiperconver = new Swiper(".swiper-container", {
              //   slidesPerView: 3,
              //   spaceBetween: 10,
              //   slidesPerGroup: 1,
              //   loop: false,
              //   loopFillGroupWithBlank: true,

              //   keyboard: {
              //     enabled: true
              //   },
              //   navigation: {
              //     nextEl: '.Conversación .swiper-button-next',
              //     prevEl: '.Conversación .swiper-button-prev ',
              //      },

              // })
              sliderPrograms('Cocina')  

              container.appendChild(div)

            })//cierre de foreach Conversacion
            break;

          case '13':// CATEGORIA CULTURA
            const catCultura = [chan]
            catCultura.forEach(cultura => {
              /* console.log(cultura) */
              let caratula = cultura.imageCH
              let imgN = cultura.imageN
              let slugc = cultura.slugc
              let idcaratula = cultura.id
              let namecaratula = cultura.name
              

              //
              const container = document.getElementById(13);

              const div = document.createElement("div")
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })
              div.innerHTML = `
       
       <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
       <h3 id="${idcaratula}">${namecaratula}</h3>
       
       `
              var swipercultu = new Swiper(".Cultura", {
                slidesPerView: 3.7,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                navigation: {
                  nextEl: '.Cultura .swiper-button-next',
                  prevEl: '.Cultura .swiper-button-prev ',
                   },

              });
              
              container.appendChild(div)
            })//cierre de foreach cultura
            break;

          case '14':// CATEGORIA DEPORTE
            const catDeporte = [chan]
            /* console.log(chan) */
            catDeporte.forEach(deporte => {
              let caratula = deporte.imageCH
              let imgN = deporte.imageN
              let slugc = deporte.slugc
              let idcaratula = deporte.id
              let namecaratula = deporte.name
              let description=deporte.description

              /* console.log(deporte.name) */
              const container = document.getElementById(14);
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              div.setAttribute("description",description)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })


              div.innerHTML = `
       
       <a href="#"><img src="https://canalonce.mx/REST/data/miniaturas/${caratula}"></a>
       <h3>${namecaratula}</h3>
       
       `
              var swiperdepo = new Swiper(".Deporte", {
                slidesPerView: 3.7,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Deporte .swiper-button-next',
                  prevEl: '.Deporte .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })//cierre de foreach deporte
            break;

          case '23':// CATEGORIA DIGITAL
            const catDigital = [chan]
            catDigital.forEach(digital => {

              /* console.log(catDigital) */
              const container = document.getElementById(23);
              let caratula = digital.imageCH
              let imgN = digital.imageN
              let slugc = digital.slugc
              let idcaratula = digital.id
              let namecaratula = digital.name

              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
       <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
       <h3>${namecaratula}</h3>
       `
              var swiperdigi = new Swiper(".Digital", {
                slidesPerView: 3.7,
                spaceBetween: 29,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Digital .swiper-button-next',
                  prevEl: '.Digital .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })//cierre de foreach digital
            break;

          case '2':// CATEGORIA ENTRETENIMIENTO
            const catEntretenimiento = [chan]
            catEntretenimiento.forEach(entretenimiento => {
              /* console.log(catDigital) */
              const container = document.getElementById(2);
              let caratula = entretenimiento.imageCH
              let imgN = entretenimiento.imageN
              let slugc = entretenimiento.slugc
              let idcaratula = entretenimiento.id
              let namecaratula = entretenimiento.name
              

              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              

              
              
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
       <a href="#"><img src="https://canalonce.mx/REST/data/miniaturas/${caratula}"></a>
       <h3>${namecaratula}</h3>
       `
              var swiperentre = new Swiper(".Entretenimiento", {
                slidesPerView: 3.7,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Entretenimiento .swiper-button-next',
                  prevEl: '.Entretenimiento .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })//cierre de foreach entretenimiento
            break;


          case '6':// CATEGORIA HISTORIA
            const catHistoria = [chan]
            /* console.log(catHistoria) */
            catHistoria.forEach(hist => {
              
              /* console.log(hist) */

              const container = document.getElementById(6);
              let caratula = hist.imageCH
              let imgN = hist.imageN
              let slugc = hist.slugc
              let idcaratula = hist.id
              let namecaratula = hist.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)

              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })
              div.innerHTML = `
         <a href="#"><img src="https://canalonce.mx/REST/data/miniaturas/${caratula}"></a>
         <h3>${namecaratula}</h3>
         `
              var swiperhist = new Swiper(".Historia", {
                slidesPerView: 3.7,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Historia .swiper-button-next',
                  prevEl: '.Historia .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })//cierre de foreach historia
            break;

          case '17':// CATEGORIA INFORMACION E INVESTIGACION
            const catInformacionI = [chan]
            /* console.log(catInformacionI) */
            catInformacionI.forEach(informacioni => {
              
              /* console.log(informacioni.name) */
              const container = document.getElementById(17);
              let caratula = informacioni.imageCH
              let imgN = informacioni.imageN
              let slugc = informacioni.slugc
              let idcaratula = informacioni.id
              let namecaratula = informacioni.name

              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
               <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
               <h3>${namecaratula}</h3>
               `

            /*     var swiperinfo = new Swiper(".swiper-container", {
                 slidesPerView: 3.7,
                 spaceBetween: 10,
                 slidesPerGroup: 1,
                 loop: false,
                 loopFillGroupWithBlank: true,
                 keyboard: {
                   enabled: true
                 },
         
               }); */
              // container.appendChild(div)
            })//cierre de foreach INFORMACION E INVESTIGACION
            break;


          case '10':// CATEGORIA MUSICA
            const catMusica = [chan]
            /* console.log(catMusica) */
            catMusica.forEach(musica => {
              
              /* console.log(musica) */
              const container = document.getElementById(10);

              let caratula = musica.imageCH
              let imgN = musica.imageN
              let slugc = musica.slugc
              let idcaratula = ''
              let namecaratula = musica.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
         <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
         <h3>${namecaratula}</h3>
         `
              var swipermus = new Swiper(".Música", {
                slidesPerView: 3.7,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Música .swiper-button-next',
                  prevEl: '.Música .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })//cierre de foreach musica
            break;

          case '12':// CATEGORIA NATURALEZA
            const catNaturaleza = [chan]

            catNaturaleza.forEach(naturaleza => {
              /* console.log(naturaleza) */
              const container = document.getElementById(12);
              let caratula = naturaleza.imageCH
              let imgN = naturaleza.imageN
              let slugc = naturaleza.slugc
              let idcaratula = naturaleza.id
              let namecaratula = naturaleza.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })
              div.innerHTML = `
              <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
              <h3>${namecaratula}</h3>
              `
              var swipernatu = new Swiper(".Naturaleza", {
                slidesPerView: 3.7,
                spaceBetween: 29,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Naturaleza .swiper-button-next',
                  prevEl: '.Naturaleza .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })//cierre de foreach naturaleza
            break;

          case '9': //CATEGORIA NIÑAS Y NIÑOS
            const catNinasninos = [chan]
            /* console.log(catNinasninos) */
            catNinasninos.forEach(ninasninos => {
              const container = document.getElementById(9);
              let caratula = ninasninos.imageCH
              let imgN = ninasninos.imageN
              let slugc = ninasninos.slugc
              let idcaratula = ''
              let namecaratula = ninasninos.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
                 <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
                 <h3>${namecaratula}</h3>
                 `
                 sliderPrograms('Niñas-y-Niños')
                 
              container.appendChild(div)
            })//cierre de foreach niñas y niños
            break;
          
            case '5':// CATEGORIA OPINION
            const catOpinion = [chan]
            /* console.log(catOpinion) */
            catOpinion.forEach(opinion => {
              const container = document.getElementById(5);
              let caratula = opinion.imageCH
              let imgN = opinion.imageN
              let slugc = opinion.slugc
              let idcaratula = opinion.id
              let namecaratula = opinion.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
                 
                 <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
                 <h3>${namecaratula}</h3>
                 
                 `
              var swiperopi = new Swiper(".Opinión", {
                slidesPerView: 3.7,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Opinión .swiper-button-next',
                  prevEl: '.Opinión .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })//cierre de foreach opinion
            break;

          case '7':// CATEGORIA PROGRAMAS POLITECNICOS
            const catProgpoli = [chan]
            /* console.log(caProgpoli) */
            catProgpoli.forEach(programaspoli => {
              const container = document.getElementById(7);
              let caratula = programaspoli.imageCH
              let imgN = programaspoli.imageN
              let slugc = programaspoli.slugc
              let idcaratula = programaspoli.id
              let namecaratula = programaspoli.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
                 <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
                 <h3>${namecaratula}</h3>
                 `
                 sliderPrograms('PROGRAMAS-POLITÉCNICOS')
                //  PROGRAMAS-POLITÉCNICOS
              /*    var swiprog = new Swiper(".swiper-container", {
                  slidesPerView: 3.7,
                  spaceBetween: 10,
                  slidesPerGroup: 1,
                  loop: false,
                  loopFillGroupWithBlank: true,
                  keyboard: {
                    enabled: true
                  },
  
                }); */
              container.appendChild(div)
            })//cierre de foreach programas politecnicos
            break;

          case '22':// CATEGORIA SERIES
            const catSeries = [chan]
            
            catSeries.forEach(series => {
              /* console.log(series); */
              
              const container = document.getElementById(22);
              let caratula = series.imageCH
              let imgN = series.imageN
              let slugc = series.slugc
              let idcaratula = ''
              let namecaratula = series.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })


              div.innerHTML = `
                 <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
                 <h3>${namecaratula}</h3>
                 `
              var swiperser = new Swiper(".SERIES", {
                slidesPerView: 3.2,
                spaceBetween: 29,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.SERIES .swiper-button-next',
                  prevEl: '.SERIES .swiper-button-prev ',
                   },

              });
              container.appendChild(div)
            })
            break;

          case '3':// CATEGORIA SOCIEDAD
            const catSociedad = [chan]

            catSociedad.forEach(sociedad => {

              const container = document.getElementById(3);
              let caratula = sociedad.imageCH
              let imgN = sociedad.imageN
              let slugc = sociedad.slugc
              let idcaratula = sociedad.id
              let namecaratula = sociedad.name
              const div = document.createElement("div")
              // SE AGREGA LOS ATRIBUTOS AL ELMENTO DIV QUE SE CREA EN EL CONTENEDOR
              div.setAttribute("class", "swiper-slide")
              div.setAttribute("tabindex", "-1")
              div.setAttribute("data-id", idcaratula)
              div.setAttribute("data-slugc", slugc)
              div.setAttribute("data-name", namecaratula)
              div.setAttribute("data-imageN", imgN)
              div.setAttribute("id", idcaratula)
              //SELECCIONA LA CLASE DE SWIPER-SLIDE PARA AGREGAR EVENTO
              var enterevent = document.querySelectorAll(".swiper-slide")
              enterevent.forEach(evecli => {

                //AGREGAR EVENTO "ENTER" A LOS SLIDE 
                evecli.addEventListener('keyup', (e) => {
                  let idec = evecli.getAttribute('data-id')
                  let nombre = evecli.getAttribute('data-name')
                  let imagen = evecli.getAttribute('data-imageN')
                  let slugc = evecli.getAttribute('data-slugc')
                  if (e.keyCode === 13) {

                    obtenerEpisodios(idec, nombre, imagen, slugc);
                    // Código a ejecutar cuando se presiona la tecla Enter
                  }
                });
              })

              div.innerHTML = `
                 <img src="https://canalonce.mx/REST/data/miniaturas/${caratula}">
                 <h3>${namecaratula}</h3>
                 `
              var swipersoci = new Swiper(".Sociedad", {
                slidesPerView: 3.7,
                spaceBetween: 10,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                keyboard: {
                  enabled: true
                },
                navigation: {
                  nextEl: '.Sociedad .swiper-button-next',
                  prevEl: '.Sociedad .swiper-button-prev ',
                   },

              });
              // container.appendChild(div)
            })//cierre de foreach sociedad
            break;

        }//cierre de switch

      })//cierre de chan
    })//cierre chanel


}//cierre de funcion obtenerCanales
let contenidoplus = document.querySelector("div")//variable que almacena los carruseles del home

/* console.log(cont) */

function obtenerEpisodios(idec, nombre, imagen, slugc) {//OBTENER EPISODIOS

  /* console.log(idec) */
  let jsonepi = slugc + ".json"
  let urepisodio = "https://canaloncetv.s3.amazonaws.com/REST/data/mdb/episodes/desktop/" + jsonepi
  let epcont = document.querySelector("body")
  let clean = document.querySelector("div").remove(this)
  let div = document.createElement("div")
  div.setAttribute("class","contenedor-episodios")




  div.innerHTML = `
    <button id="reload"><h1>ATRAS</h1></button>
      <h1>${nombre}</h1>
      
      <img  src="https://canalonce.mx/REST/data/normal/${imagen}" style="width: 55%; height: 60%; float:left;">
            <h2>EPISODIOS</h2>
            <div class="video-container">
              
           </div>

      `


  epcont.append(div);

  //contenedor de episodios 
  fetch(urepisodio)
    /* console.log(urepisodio) */
    .then(response => response.json())
    .then(episodio => {
      /* console.log(episodio) */
      episodio.forEach(epiCanal => {//INICIO DE CONTENEDOR DE EPISODIOS

        let contVideo = document.querySelector(".video-container")
        let temporada = epiCanal.seasonn
        let season = epiCanal.season
        let titlechanel = epiCanal.title
        let linkfile = epiCanal.file
        let linkYout = epiCanal.vda
        let idCanal = epiCanal.id
        let div = document.createElement("li")
        div.setAttribute("tabindex", "0")
        div.setAttribute("file", linkfile)
        div.setAttribute("vda", linkYout)
        div.setAttribute("id",idCanal)
        div.textContent = titlechanel

        contVideo.appendChild(div)
        
        
        
        //SELECCIONA EL DIV QUE SE ENCUENTRA EN EL VIDEO-CONTAINER PARA AGREGAR EVENTO
        //prueb event
        var eveclic2 = document.getElementById(idCanal)
        eveclic2.addEventListener('keyup', (e) => {
          if (e.keyCode === 13) {

            let mediafile = eveclic2.getAttribute('file')
            let mediaYout = eveclic2.getAttribute('vda')
            let episelect =eveclic2.getAttribute("id")
            playerMedia(mediafile, mediaYout);

            // Código a ejecutar cuando se presiona la tecla Enter
          }
        });

        function playerMedia(mediafile, mediaYout) {
          let contplay = document.querySelector("body")
          var video = document.createElement('contplayer')
            /* console.log(mediafile); */
            


          //VIDEO FILE
/*           video.innerHTML = `
            <video id="my-video" class="video-js"
            controls
            preload="auto"
            width="640"
            height="264"
            autoPlay="true">
            <source src="${mediafile}" type="application/x-mpegURL">
            </video>
            `;
          contplay.appendChild(video);
          var player = videojs('my-video');
          player.play(); // Play the video
          player.pause(); // Pause the video

          console.log(urepisodio); */
          //IFRAME YOUTUBE
                    const videoData = {
                      "link": mediaYout
                    };
          
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.youtube.com/embed/${getVideoIdFromLink(videoData.link)}`;
                    iframe.setAttribute("allowFullScreen", "true")
                    iframe.setAttribute("allowScriptAccess", "false")
                    iframe.setAttribute("autoplay", "true")
                    iframe.setAttribute("muted", "true")

                    var bt=document.createElement('button')
                    bt.setAttribute("id","reloadindice")
                    bt.textContent="episodios"
                    contplay.innerHTML = "";
                    contplay.appendChild(iframe);
                    contplay.appendChild(bt);
                    
                    iframe.addEventListener('scroll', function (event) {
                      // Your event handler code here
                    }, { passive: true });
          
                    function getVideoIdFromLink(link) {
                      var regex = /^https?:\/\/(?:www\.)?youtu(?:be\.com\/(?:watch\?v=|embed\/)|\.be)\/([^&\s]+)/;
                      var match = link.match(regex);
                      return match && match[1];
                    }
                    var btonepiso=document.getElementById("reloadindice")
                        btonepiso.addEventListener('keyup', (e) => {
                          if (e.keyCode === 13)
                          reloadepisodios();
                        });
                         

        }//CIERRE DE PLAYER 

        


        //AGREGAR AL BOTON  EL EVENTO ENTER
        var botreload = document.getElementById("reload")
        botreload.setAttribute("tabindex", "0")
        botreload.addEventListener('keyup', (e) => {
          if (e.keyCode === 13)
          reloadContent();
        });



      })//cierre de epiCanal
    })//cierre de episodio

  //FUNCION PARA REGRESAR CON EL BOTON AL MENU DE EPISODIOS
  var menuepisodios = document.querySelector(".contenedor-episodios")//VARIABLE QUE ALMACENA EL MENU DE EPISODIOS
    function reloadepisodios(){
      titulos2.innerHTML=""
      titulos2.appendChild(menuepisodios)
    }
    
}//cierre de funcion obtenerEpisodios



function reloadContent() {//FUNCION PARA REGRESAR AL HOME
  let clean = document.querySelector("div").remove(this)
  titulos2.append(contenidoplus)
}

function sliderPrograms(slider) {
  const swiper_pgm = new Swiper("."+slider, {
    // var swiperdigi = new Swiper(".Digital", {
      slidesPerView: 3.7,
      spaceBetween: 29,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: true,
      keyboard: {
        enabled: true
      },
      navigation: {
        nextEl: '.'+slider+' .swiper-button-next',
        prevEl: '.'+slider+' .swiper-button-prev ',
         },

    });
}
/**
  * @description Función que parsea una cadena eliminando acentos
  * @param cadena Contiene la cadena con caracteres acentos
  * @return {res} Retorna la cadena parseada
*/
function eliminarAcentos(cadena) {
	var chars={
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
		"À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"};
	var expr=/[áàéèíìóòúùñ]/ig;
	var res=cadena.replace(expr,function(e){return chars[e]});
	return res;
}
/**
  * @description Función que parsea una cadena a minusculas, elimina caracteres especiales, espacios, acentos
  * @param cadena Contiene la cadena con caracteres especiales, mayusculas, espacios, acentos
  * @return {textParser} Retorna la cadena parseada
*/
function eliminarCaracteres(cadena){
	var outString = cadena.replace(/[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
	return outString;
}


    














