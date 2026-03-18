moment.locale('es-mx');
// 
import { firebaseSetting } from './settings-firebase.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
// 
const url_list = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/catchup.json'
const url_onCatchup = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/catch.json'
const url_chanels = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/channels.json';
const url_cartelera = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/ec2/cartelera_mes_pruebas.json';
const url_video = 'https://canaloncetv.s3.amazonaws.com/REST/data/mdb/radioonn.json?=cache';
const URL_IMG_ONCATCHUP = "https://canalonce.mx/REST/data/catch/";
const CONTAINER_ONCATCHUP = getQueryElement('#texto_series .grid-oncatchup')
const CONTAINER_CARTELERA = getQueryElement('#texto_programacion .grid-programation')
const CONTAINER_FULL_CARTELERA = getQueryElement('#texto_programacion .grid-full-programation')
// 
/**
  * @description 
  * @param data 
  * @param type 
*/
const configFirebase = (video, CONTAINER_IFRAME) => {
    // 
    const firebaseConfig = firebaseSetting();
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const estadoRef = ref(db, 'live/activo');
    onValue(estadoRef, (snapshot) => {
        
        let content_video = getQueryElement('#content_video'),
            iframe = content_video.querySelector('#video_youtube');
        const valor = snapshot.val();
        if (valor === 'si') {
            removeClass(content_video, 'd-none');  
            CONTAINER_IFRAME.innerHTML = video     
        } else {
            addClassElement(content_video, 'd-none');            
            (iframe) && iframe.remove();
        }
    });
}
function removeDuplicates(arr, key) {
  const seen = new Map();
  arr.forEach(item => {
    if (!seen.has(item[key])) {
      seen.set(item[key], item);
    }
  });
  return Array.from(seen.values());
}
const obtenerSrcDesdeTexto = (textoIframe) => {
    // 
    const parser = new DOMParser();
    const doc = parser.parseFromString(textoIframe, 'text/html');    
    // 
    const iframe = doc.querySelector('iframe');
    // // 
    if (iframe && iframe.src) {
        return iframe.src;
    } else {
        return null;
    }
}
const filterImageByName = (topname, info) => {
    let src = "-";
    // 
    info.forEach(element => {
        let nameProgram = parseoTexto(element.name);
        if(nameProgram.search(topname) > -1){
            src = 'https://canalonce.mx/REST/data/miniaturas/'+element.imageCH;      
        }
    });
    return src;
} 
function comprobationImage(container = document) {
    const genericImage = 'https://canalonce.mx/_programacion_/fotos/generica_oncetvmexico.jpg'; 
    const images = container.querySelectorAll('img');
    images.forEach(img => {
        // 
        if (!img.hasAttribute('data-error-handled')) {
            // 
            img.onerror = function() {
                console.log(this.src)
                this.src = genericImage;
                this.onerror = null; 
                this.setAttribute('data-error-handled', 'true');
            };
            //
            if (img.complete && img.naturalHeight === 0) {
                img.src = genericImage;
                img.setAttribute('data-error-handled', 'true');
            }
        }
    });
}    
// 
const parserData = async(url) => {        
    let new_array = [],
        info = await fetchData(url),
        i = 0, r = 0;
    //
    let currentDay = moment().format('YYYY-MM-DD'),
        currentTime = moment().format('HH:mm:ss');
    // 
    info.forEach((element, index) => {        
        if(element.n_tipo_senal == 3){            
            let jsonDay = moment(element.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD');
            let inow = false;
            let start = moment(element.h_inicio, 'h:mm:ss').format('HH:mm:ss');
            let end = moment(element.h_termino, 'h:mm:ss').format('HH:mm:ss');
            if ( currentDay == jsonDay ) {
                if(currentTime <= start  || currentTime <= end) {
                    inow = (r <= 2) && true;
                    r++;
                }
                new_array.push({
                    'index' : i,
                    'barra' : element.barra,
                    'cve_programa' : element.cve_programa,
                    'fecha' : element.fecha,
                    'h_inicio' : element.h_inicio,
                    'h_termino' : element.h_termino,
                    'sinopsis' : element.sinopsis,
                    'titulo' : element.titulo,
                    'STNOMBRE_RTC_DOF' : element.STNOMBRE_RTC_DOF,
                    'now': inow
                });
                i++;
            }
        }
    });
    return new_array;
}
const parserData_11_1 = async(url) => {        
    let new_array = [],
        info = await fetchData(url),
        i = 0, r = 0;
    //
    let num = moment().day();    
        num = parseInt(num);
    // 
    let currentDay = moment().format('YYYY-MM-DD'),
        currentTime = moment().format('HH:mm:ss');
    // 
    let starTime, endTime;
    // 
    info.forEach((element, index) => {        
        if(element.n_tipo_senal == 1){            
            let jsonDay = moment(element.fecha, 'YYYY-MM-DD').format('YYYY-MM-DD');
            if(num == 1 || num == 2 || num == 3 || num == 4 || num == 5){
                let inow = false;
                starTime = moment('14:30:00', 'H:mm:ss').format('HH:mm:ss');
                endTime = moment('18:00:00', 'H:mm:ss').format('HH:mm:ss');
                let jsonStarTime = moment(element.h_inicio, 'H:mm:ss').format('HH:mm:ss');
                let start = moment(element.h_inicio, 'h:mm:ss').format('HH:mm:ss');
                let end = moment(element.h_termino, 'h:mm:ss').format('HH:mm:ss');
                if(jsonStarTime >= starTime && jsonStarTime <= endTime){            
                    if ( currentDay == jsonDay ) {
                        if(currentTime <= start  || currentTime <= end) {
                            inow = (r <= 2) && true;
                            r++;
                        }
                        new_array.push({
                            'index' : i,
                            'barra' : element.barra,
                            'cve_programa' : element.cve_programa,
                            'fecha' : element.fecha,
                            'h_inicio' : element.h_inicio,
                            'h_termino' : element.h_termino,
                            'sinopsis' : element.sinopsis,
                            'titulo' : element.titulo,
                            'STNOMBRE_RTC_DOF' : element.STNOMBRE_RTC_DOF,
                            'now': inow
                        });
                        i++;
                    }                          
                }
            }
        }
    });
    return new_array;
}
// 
const parseDataListNinos = async(url) => {
    let new_array = [],
        info = await fetchData(url),
        currentDay = moment().format('DD/MM/YYYY')
    // 
    info['arrayProgramas'].forEach(element => {
        let date = moment(element.FecCalendario, 'DD/MM/YYYY').format('DD/MM/YYYY')
        if(date === currentDay){
            new_array.push(element.CvePrograma);
        }
    });
    return new_array;
}
// 
const getDataCartelera = async() => {
    let html = '';
    let info = await parserData(url_cartelera)
    let r = 0;
    // 
    info.forEach((element, index) => {                
        if(element.now === true){
            let clasification = (element.STNOMBRE_RTC_DOF != "" && element.STNOMBRE_RTC_DOF != null) 
                                ? '- (Clasificación '+element.STNOMBRE_RTC_DOF+')'
                                : element.sinopsis;
            let time = moment(element.h_inicio, 'h:mm:ss').format('HH:mm');
            html += `<a class="items-grid item-programation">
                        <h2 class="text-light font-lilitaone h1 fs-1 text-schedule">
                           ${time}
                        </h2>
                        <p class="text-light h2 fs-3 text-title-pgm">
                           ${element.barra}
                        </p>
                        <p class="text-light h2 fs-4 text-clasitifation">
                            ${clasification}
                        </p>
                    </a>`
            r++;
        }
    });
    console.log(CONTAINER_CARTELERA)
    CONTAINER_CARTELERA.innerHTML = html;
    getDataFullCartelera(info);
}
const getDataFullCartelera = async(info) => {
    let html = '', new_array = [];
    let channels = await fetchData(url_chanels);
    info.forEach((element, index) => {    
        let NameProgram = parseoTexto(element.barra);
        console.log(NameProgram)
        let src = filterImageByName(NameProgram, channels);          
        let image = (src == '-') ? 'https://canalonce.mx/REST/data/miniaturas/'+NameProgram+'.jpg' : src;
        new_array.push({
            'barra' : element.barra,
            'nombre' : NameProgram,
            'image' : image,
            'time_i': element.h_inicio,
            'time_f': element.h_termino,
            'time_i': element.h_inicio,
            'time_f': element.h_termino
        })
    });
    new_array.forEach(element => {
        html += `<div class="items-grid">
                    <img src="${element.image}" alt="${element.barra}">
                    <div class="data">
                        <a >
                            <h2 class="title text-light h4">${element.barra}</h2>
                            <p class="text-light">${element.time_i}</p>
                            <p class="text-light">${element.time_i}</p>
                        </a>
                    </div>
                </div>`;
    });
    CONTAINER_FULL_CARTELERA.innerHTML = html;
    comprobationImage(CONTAINER_FULL_CARTELERA);
}
// 
const getItemsCatchup = async() => {
    let html = '',
        info_list = await parseDataListNinos(url_list),
        info_oncatchup = await fetchData(url_onCatchup),
        data_items = [];
    // 
    info_list.forEach(element => {
        info_oncatchup.forEach(items => {
            if(parseInt(items.cve_pgm) == parseInt(element)){
                data_items.push(items);
            }
        });
    });
    // 
    let data = removeDuplicates(data_items, 'nombre_serie')
    data.forEach(element => {
        html += `<div class="items-grid">
                    <a href="https://onceninasyninos.tv/veo-online-detalles/?episode=${element.cve_pgm}" class="text-decoration-none" href="">
                        <h2 class="text-light font-lilitaone h1 fs-4 font-comfortaa">
                           ${element.nombre_serie}
                        </h2>
                        <picture >
                            <source class="lazy img-fluid" 
                                srcset="${URL_IMG_ONCATCHUP}${element.normalH}" type="image/webp">
                            <source class="lazy img-fluid" 
                                srcset="${URL_IMG_ONCATCHUP}${element.normalH}" 
                                type="image/png"> 
                            <img class="img-fluid lazy img-fluid-responsive" 
                                src="${URL_IMG_ONCATCHUP}${element.normalH}" alt="Logo plataforma" width="139" height="45">
                        </picture>
                    </a>
                </div>`
    });
    CONTAINER_ONCATCHUP.innerHTML = html;
}
const setVideoOnn = async() => {
    const CONTAINER_IFRAME = getQueryElement('#content_video .container-iframe')
    // let info = await fetchData(url_video);
    // let data_iframe = obtenerSrcDesdeTexto(info.iframe);
    // let parse_src = data_iframe.split('embed/')
    // 
    if(CONTAINER_IFRAME != null) {
        // let video = `<lite-youtube id="video_youtube" videoid="${parse_src[1]}"></lite-youtube>`
        let video = `<lite-youtube id="video_youtube" videoid="erQ0PQ1t-Z0"></lite-youtube>`
        // CONTAINER_IFRAME.innerHTML = video;  
        configFirebase(video, CONTAINER_IFRAME);
    }
}
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            comprobationImage();
        }
    });
});
observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener('DOMContentLoaded', function(event) {    
    if(getQueryElement('.bg-sintoniza')){
        getDataCartelera();
        
        console.log('sintoniza')
    }
    if(getQueryElement('.bg-veo-online')){
        console.log('veo')
        getItemsCatchup();
        setVideoOnn();
    }
});