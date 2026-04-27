/*-------------------------------------------------------------
# FUNCIONALIDAD TRANSMISIÓN EN VIVO
-------------------------------------------------------------*/

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initLiveStream();
});

// Función principal de inicialización
function initLiveStream() {
    initVideoControls();
    initChatFunctionality();
    initInteractions();
    initViewerCount();
}

/*-------------------------------------------------------------
# Controles de Video
-------------------------------------------------------------*/
function initVideoControls() {
    const video = document.getElementById('liveVideo');
    const btnFullscreen = document.getElementById('btnFullscreen');
    const btnSettings = document.getElementById('btnSettings');

    // Pantalla completa
    if (btnFullscreen) {
        btnFullscreen.addEventListener('click', function() {
            const videoContainer = document.querySelector('.video-container');
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            }
        });
    }

    // Configuración
    if (btnSettings) {
        btnSettings.addEventListener('click', function() {
            showToast('Configuración', 'Opciones de calidad y volumen disponibles');
        });
    }
}

/*-------------------------------------------------------------
# Funcionalidad del Chat
-------------------------------------------------------------*/
function initChatFunctionality() {
    const chatInput = document.getElementById('chatInput');
    const btnSendChat = document.getElementById('btnSendChat');
    const chatMessages = document.getElementById('chatMessages');

    // Enviar mensaje con botón
    if (btnSendChat) {
        btnSendChat.addEventListener('click', function() {
            sendChatMessage();
        });
    }

    // Enviar mensaje con Enter
    if (chatInput) {
        chatInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendChatMessage();
            }
        });
    }

    function sendChatMessage() {
        const message = chatInput.value.trim();
        
        if (message === '') {
            return;
        }

        // Crear elemento de mensaje
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message mb-3';
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        messageElement.innerHTML = `
            <div class="d-flex gap-2">
                <img src="https://dummyimage.com/32x32/ccc/fff" alt="Mi avatar" class="rounded-circle" width="32" height="32">
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-baseline mb-1">
                        <strong class="small">Tú</strong>
                        <span class="text-muted small">${timeString}</span>
                    </div>
                    <p class="mb-0 small">${escapeHtml(message)}</p>
                </div>
            </div>
        `;

        // Agregar mensaje al chat
        chatMessages.appendChild(messageElement);

        // Scroll al final
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Limpiar input
        chatInput.value = '';
        chatInput.focus();

        // Simular respuesta de bot
        setTimeout(() => {
            addBotResponse(message);
        }, 1000);
    }

    function addBotResponse(userMessage) {
        const responses = [
            'Excelente observación, gracias por tu participación.',
            'Interesante punto de vista, lo tomaremos en cuenta.',
            'Gracias por tu comentario, seguiremos investigando sobre este tema.',
            'Muy buena pregunta, nuestros expertos lo abordarán más adelante.',
            'Apreciamos tu feedback, continuaremos con el programa.'
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message mb-3';
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        botMessage.innerHTML = `
            <div class="d-flex gap-2">
                <img src="https://dummyimage.com/32x32/ccc/fff" alt="Avatar" class="rounded-circle" width="32" height="32">
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-baseline mb-1">
                        <strong class="small text-danger">
                            <i class="fas fa-check-circle"></i> Moderador
                        </strong>
                        <span class="text-muted small">${timeString}</span>
                    </div>
                    <p class="mb-0 small">${randomResponse}</p>
                </div>
            </div>
        `;

        const chatMessages = document.getElementById('chatMessages');
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

/*-------------------------------------------------------------
# Interacciones
-------------------------------------------------------------*/
function initInteractions() {
    // Botón Seguir
    const btnSubscribe = document.getElementById('btnSubscribe');
    if (btnSubscribe) {
        btnSubscribe.addEventListener('click', function() {
            if (this.classList.contains('btn-danger')) {
                this.classList.remove('btn-danger');
                this.classList.add('btn-secondary');
                this.innerHTML = '<i class="fas fa-check me-1"></i> Siguiendo';
                showToast('Éxito', 'Te has suscrito al canal');
            } else {
                this.classList.remove('btn-secondary');
                this.classList.add('btn-danger');
                this.innerHTML = '<i class="fas fa-bell me-1"></i> Seguir';
                showToast('Información', 'Has dejado de seguir');
            }
        });
    }

    // Botón Compartir
    const btnShare = document.getElementById('btnShare');
    if (btnShare) {
        btnShare.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Transmisión en Vivo - Once Noticias',
                    text: 'Mira esta transmisión en vivo',
                    url: window.location.href
                });
            } else {
                copyToClipboard(window.location.href);
            }
        });
    }

    // Botón Reportar
    const btnReport = document.getElementById('btnReport');
    if (btnReport) {
        btnReport.addEventListener('click', function() {
            showModal('Reportar', '¿Cuál es el motivo del reporte?', [
                'Contenido inapropiado',
                'Spam',
                'Violencia',
                'Derechos de autor',
                'Otro'
            ]);
        });
    }

    // Expandir descripción
    const btnExpandDescription = document.getElementById('btnExpandDescription');
    if (btnExpandDescription) {
        btnExpandDescription.addEventListener('click', function() {
            const description = document.querySelector('.live-description p');
            if (description.classList.contains('text-elipsis-vertical')) {
                description.classList.remove('text-elipsis-vertical');
                this.innerHTML = 'Ver menos <i class="fas fa-chevron-up ms-1"></i>';
            } else {
                description.classList.add('text-elipsis-vertical');
                this.innerHTML = 'Ver más <i class="fas fa-chevron-down ms-1"></i>';
            }
        });
    }

    // Hacer tarjetas clicables
    const streamCards = document.querySelectorAll('.stream-card');
    streamCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            showToast('Redireccionando', 'Abriendo transmisión...');
        });
    });
}

/*-------------------------------------------------------------
# Contador de Espectadores
-------------------------------------------------------------*/
function initViewerCount() {
    const viewerCount = document.getElementById('viewerCount');
    
    // Simular cambios en cantidad de espectadores
    setInterval(() => {
        if (viewerCount) {
            let currentCount = parseInt(viewerCount.textContent.replace(/,/g, ''));
            const change = Math.floor(Math.random() * 100) - 30;
            currentCount = Math.max(1000, currentCount + change);
            viewerCount.textContent = formatNumber(currentCount);
        }
    }, 5000);
}

/*-------------------------------------------------------------
# Funciones Auxiliares
-------------------------------------------------------------*/

// Mostrar notificación tipo toast
function showToast(title, message) {
    // Crear contenedor si no existe
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 300px;
        `;
        document.body.appendChild(toastContainer);
    }

    const toastElement = document.createElement('div');
    toastElement.className = 'alert alert-info alert-dismissible fade show';
    toastElement.style.cssText = `
        margin-bottom: 10px;
        animation: slideIn 0.3s ease;
    `;
    toastElement.innerHTML = `
        <strong>${title}</strong><br>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    toastContainer.appendChild(toastElement);

    // Auto remover después de 5 segundos
    setTimeout(() => {
        toastElement.remove();
    }, 5000);
}

// Mostrar modal
function showModal(title, message, options = []) {
    const modalHTML = `
        <div class="modal fade" id="customModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        ${message}
                        ${options.length > 0 ? `
                            <div class="mt-3">
                                ${options.map(option => `
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="option" value="${option}" id="option_${option}">
                                        <label class="form-check-label" for="option_${option}">
                                            ${option}
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-danger" id="btnConfirm">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    const modal = new bootstrap.Modal(document.getElementById('customModal'));
    
    document.getElementById('btnConfirm').addEventListener('click', () => {
        const selected = document.querySelector('input[name="option"]:checked');
        if (selected) {
            showToast('Gracias', `Tu reporte por "${selected.value}" ha sido enviado`);
        } else {
            showToast('Información', 'Tu mensaje ha sido enviado');
        }
        modal.hide();
        setTimeout(() => modalContainer.remove(), 300);
    });

    modal.show();
}

// Copiar al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Éxito', 'Enlace copiado al portapapeles');
    }).catch(err => {
        showToast('Error', 'No se pudo copiar el enlace');
    });
}

// Escapar HTML para seguridad
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Formatear números con comas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Permitir que se cargue HLS si está disponible
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('liveVideo');
    if (video && typeof Hls !== 'undefined') {
        if (Hls.isSupported()) {
            const hls = new Hls();
            // Cambiar esta URL a tu stream real
            hls.loadSource('https://test-streams.mux.dev/x36xhzz/x3SegmentedFile.m3u8');
            hls.attachMedia(video);
        }
    }
});
