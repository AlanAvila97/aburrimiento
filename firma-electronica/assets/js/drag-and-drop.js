const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const errorMessage = document.getElementById('errorMessage');
const uploadBtn = document.getElementById('uploadBtn');

let selectedFiles = [];

// Prevenir comportamiento por defecto del navegador
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Efectos visuales al arrastrar
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
        dropZone.classList.add('drag-over');
    });
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
        dropZone.classList.remove('drag-over');
    });
});

// Manejar el drop
dropZone.addEventListener('drop', handleDrop);

// Prevenir doble apertura del selector
const browseBtn = document.querySelector('.browse-btn');
browseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Manejar clic en cualquier parte del dropZone
dropZone.addEventListener('click', () => {
    fileInput.click();
});

// Manejar selección de archivos mediante input
fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}
const setItemsUploads = (data, type) => {
      // Agregar archivos PDF a la lista
    if (data.length > 0) {
        
        data.forEach(file => {
            let name_document = file.name;
            let id_name = name_document.replace('.pdf', '');
            file.id = parseoTexto(id_name);
            // 
            if (!selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
                selectedFiles.push(file);
                console.log(selectedFiles)
            }
        });
        displayFiles(type);
    }
}

function handleFiles(files) {
    const filesArray = Array.from(files);
    const pdfFiles = filesArray.filter(file => file.type === 'application/pdf');
    const documentsError = filesArray.filter(file => (file.type != 'application/pdf') );
    // Validar si hay archivos que no son PDF
    if (pdfFiles.length !== filesArray.length) {
        showError('Solo se permiten archivos PDF. Algunos archivos fueron omitidos.');
        dropZone.classList.add('error');
        setTimeout(() => {
            dropZone.classList.remove('error');
        }, 2000);
    } else {
        hideError();
    }
  
    // setItemsUploads(documentsError, false);
    setItemsUploads(pdfFiles, true);
}

function displayFiles(type) {    
    let items_old = fileList.querySelectorAll('.file-item');
    if(items_old.length != 0){
        let ids_items = Array.from(items_old).map(element => element.id);
        selectedFiles = selectedFiles.filter(file => !ids_items.includes(file.id));
    }
    if (selectedFiles.length === 0) {
        uploadBtn.classList.remove('show');
        return;
    }
    uploadBtn.classList.add('show');

    selectedFiles.forEach((file, index) => {
        let name_document = file.name;
        let id_name = name_document.replace('.pdf', '');

        const fileItem = document.createElement('div');
              fileItem.id = parseoTexto(id_name);
        // 
        let class_alert = (type) ? 'alert alert-success' : 'alert alert-danger'
        fileItem.className = `file-item ${class_alert}`;        
        const fileSize = formatFileSize(file.size);
        
        fileItem.innerHTML = `
            <div class="file-info">
                <div class="file-icon">
                    <i class="fa-solid fa-file"></i>
                </div>
                <div class="file-details">
                    <h4>${name_document}</h4>
                    <p>${fileSize}</p>
                </div>
            </div>
            <button class="view-btn btn btn-primary" onclick="">
                <i class="fa-solid fa-eye"></i>
                Visualizar
            </button>
            <button class="remove-btn btn btn-danger" onclick="removeFile(${index})">
                <i class="fa-solid fa-trash"></i>
                Eliminar
            </button>
        `;        
        fileList.appendChild(fileItem);
    });
    if(type){
        let items = fileList.querySelectorAll('.file-item');
        setTimeout(() => {
            removeAllClass(items, ['alert', 'alert-success']);
        }, 1500);
    }
}

function removeFile(index) {
    selectedFiles.splice(index, 1);
    displayFiles();
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    setTimeout(() => {
        hideError();
    }, 4000);
}

function hideError() {
    errorMessage.classList.remove('show');
}

// Manejar el botón de subir
uploadBtn.addEventListener('click', () => {
    if (selectedFiles.length === 0) {
        showError('No hay archivos seleccionados');
        return;
    }

    // Aquí irías tu lógica de subida
    console.log('Archivos a subir:', selectedFiles);
    
    // Ejemplo de cómo subirías los archivos con FormData
    const formData = new FormData();
    selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file);
    });

    // Simulación de subida (descomenta para usar con tu API)
    /*
    fetch('/tu-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
        selectedFiles = [];
        displayFiles();
    })
    .catch(error => {
        console.error('Error:', error);
        showError('Error al subir los archivos');
    });
    */

    alert(`${selectedFiles.length} archivo(s) listo(s) para subir!`);
});