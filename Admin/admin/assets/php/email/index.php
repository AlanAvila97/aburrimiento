<?php
// $para = "fidelavila21@gmail.com";
// $CorreoIcsem = $_POST['CorreoIcsem'];
$para = $_POST['CorreoIcsem'];
$correo = $_POST['Correo'];
$nombre = $_POST['Nombre'];
$celular = $_POST['Phone'];
$estado = $_POST['Estate'];
$compania= $_POST['Company'];
$asunto = $_POST['Asunto'];
$mensajeUsuario= $_POST['Mensaje'];
// 
$mensaje = '<section class="section-mail">';
$mensaje .= '<div class="container-mail" style="width: auto; height: 100%; display: flex; flex-direction: column; border: 1px solid #000; padding: 1rem; align-items: flex-start;">';
$mensaje .=    '<div class="info" style="border: 1px solid; width: 100%; padding: 1rem; border-radius: 0 0 0.5rem 0.5rem;">';
$mensaje .=        '<a href="https://icsem.mx/">';
$mensaje .=            '<img src="https://icsem.mx/images/logo_icsem.png" alt="Logo Icsem" style="width: 250px">';
$mensaje .=        '</a>';
$mensaje .=        '<h1><strong>Nombre:</strong> '.$nombre.' </h1>';
$mensaje .=        '<p><strong>Compañia:</strong> '.$compania.' </p>';
$mensaje .=        '<p><strong>Celular:</strong> '.$celular.' </p>';
$mensaje .=        '<p><strong>Correo:</strong> '.$correo.'</p>';
$mensaje .=        '<p><strong>Estado:</strong> '.$estado.' </p>';
$mensaje .=        '<p><strong>Asunto:</strong> '.$asunto.' </p>';
$mensaje .=        '<p><strong>para:</strong> '.$para.' </p>';
$mensaje .=        '<p><strong>Mensaje:</strong> '.$mensajeUsuario.' </p>';
$mensaje .=    '</div>';
$mensaje .= '</div>';
$mensaje .='</section>';
// Cabeceras del correo electrónico 
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: info@icsem.mx' . "\r\n" .
            'Reply-To: info@icsem.mx' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

// Enviar el correo electrónico
if (mail($para, $asunto, $mensaje, $headers)) {
    $information["status"] = true;
    $information["type"] = "alert-success";
    $information["title"] = "¡Gracias por contactarnos!";
    $information["message"] = "Hemos recibido tu mensaje con exito.";

} else {
    $information = array(
        "status" => false,
        "type"   => "alert-danger",
        "title"  => "Lo sentimos, hubo un error",
        "message" => "Hubo un problema al enviar el correo electrónico."
    );
}
echo json_encode($information);