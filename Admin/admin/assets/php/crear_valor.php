<?php
include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $titulo = $_POST["titulo"];
    $descripcion = $_POST["descripcion"];
    $icono = $_POST["icono"];
    // Insertar datos en la tabla usuarios
    $sql = "INSERT INTO valores (titulo,description,icono) VALUES ('$titulo','$descripcion','$icono')";
    if ($conexion->query($sql) === TRUE) {
        echo "Usuario registrado exitosamente.";
    } else {
        echo "Error al registrar usuario: " . $conexion->error;
    }
    $conexion->close();
}
?>