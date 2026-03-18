const BTN_GENERAR_CV = getQueryElement('#btn_generar_cv')
console.log(BTN_GENERAR_CV)

/**
* @description 
*/
BTN_GENERAR_CV.addEventListener('click', function(e) {
    // generatorCV
    const width = window.screen.width;
    const height = window.screen.height;
    const nuevaVentana = window.open('', '_blank', `width=${width},height=${height},left=0,top=0,scrollbars=yes`);

    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Contenido en iframe</title>
        </head>
        <body>
            <iframe src="https://ejemplo.com" width="100%" height="100%" frameborder="0"></iframe>
        </body>
        </html>
    `);
    nuevaVentana.document.close();
});