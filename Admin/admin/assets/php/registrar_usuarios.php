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
    // Recibir datos del formulario
    $nombre = $_POST["nombre"];
    $apellidop = $_POST["apellido_p"];
    $apellidom = $_POST["apellido_m"];
    $correo = $_POST["correo"];
    $contrasena = $cadenaAleatoria;
    $para = $correo;
    $asunto = "Registro Exitoso";
    $mensaje = "Se ha registrado con exito en icsem con los siguentes datos:usuario=".$correo."   contraseña=".$contrasena;

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
    $type=1;
    // Validar y procesar los datos (aquí debes realizar validaciones adicionales)
    // Insertar datos en la tabla usuarios
    $sql = "INSERT INTO users (type,nombre,apellido_p,apellido_m,email,password) VALUES ('$type','$nombre','$apellidop','$apellidom', '$correo', '$contrasena')";    
    if ($conexion->query($sql) === TRUE) {
        echo "Usuario registrado exitosamente.";
    } else {
        echo "Error al registrar usuario: " . $conexion->error;
    }
    $conexion->close();
}
?>