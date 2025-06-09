<?php
function generarCadenaAleatoria($longitud) {
    $caracteresEspeciales = "@!$%#&+*";
    $letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $cadena = '';

    // Generar 3 n�meros aleatorios
    for ($i = 0; $i < 3; $i++) {
        $cadena .= mt_rand(0, 9);
    }

    // Generar 3 caracteres especiales aleatorios
    for ($i = 0; $i < 3; $i++) {
        $caracterAleatorio = $caracteresEspeciales[mt_rand(0, strlen($caracteresEspeciales) - 1)];
        $cadena .= $caracterAleatorio;
    }

    // Generar 3 letras aleatorias
    for ($i = 0; $i < 3; $i++) {
        $letraAleatoria = $letras[mt_rand(0, strlen($letras) - 1)];
        $cadena .= $letraAleatoria;
    }

    // Mezclar la cadena para que los caracteres est�n en orden aleatorio
    $cadena = str_shuffle($cadena);

    return $cadena;
}

$longitud = 9; // La longitud total de la cadena
$cadenaAleatoria = generarCadenaAleatoria($longitud);

include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $correo = $_POST["correo"];
    $pass_nueva=$cadenaAleatoria;
    $para = $correo;
    $asunto = "Cambio de contraseña";
    $mensaje = "Su contraseña de usuario en icsem ha cambiado por la siguiente:".$pass_nueva;

    // Encabezados del correo electr�nico
    $headers = "From: info@icsem.mx\r\n";
    $headers .= "Reply-To: info@icsem.mx\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($para, $asunto, $mensaje, $headers)) {
        echo "Correo enviado con exito.";
    } else {
        echo "Error al enviar el correo.";
    }
    $sql = "UPDATE users SET password = ? WHERE id = ?";
    // Preparar la sentencia
    if ($stmt = $conexion->prepare($sql)) {
        // Vincular los par�metros
        $stmt->bind_param("ss", $pass_nueva, $id);
        // Ejecutar la sentencia
        if ($stmt->execute()) {
            echo "Registro actualizado con exito.";
        } else {
            echo "Error al actualizar el registro: " . $stmt->error;
        }
        // Cerrar la sentencia preparada
        $stmt->close();
    } else {
        echo "Error en la preparacion de la sentencia: " . $conexion->error;
    }
    // Cerrar la conexi�n a la base de datos
    $conexion->close();
}
?>