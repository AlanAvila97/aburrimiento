document.getElementById('load-pdf').addEventListener('click', async () => {
    const pdfUrl = document.getElementById('pdf-url').value;
    try {
        // 
        const response = await fetch(pdfUrl);
        const existingPdfBytes = await response.arrayBuffer();
        // 
        const { PDFDocument } = PDFLib;
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        // 
        // 
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const { width, height } = firstPage.getSize();
        // 
        firstPage.drawText('Visualizado con pdf-lib', {
            x: 50,
            y: 50,
            size: 20,
            color: PDFLib.rgb(0.95, 0.1, 0.1),
            opacity: 0.5
        });
        // 
        const pdfBytes = await pdfDoc.save();
        //
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        // 
        document.getElementById('pdf-viewer').src = url;
    } catch (error) {
        console.error('Error al cargar el PDF:', error);
        alert('No se pudo cargar el PDF. Verifica la URL y los permisos CORS.');
    }
});
document.addEventListener("DOMContentLoaded", function(event) {       
    generatorPDF(); 
});