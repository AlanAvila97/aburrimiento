<?php
include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $red = $_POST["red"];
    $link = $_POST["link"];
    $id=1;
    // Validar y procesar los datos (aquí debes realizar validaciones adicionales)
    // Insertar datos en la tabla usuarios
    $sql = "update redess set ".$red."='$link' where id='$id'";    
    if ($conexion->query($sql) === TRUE) {
        echo "Red actualizada exitosamente.";
    } else {
        echo "Error al actualizar red: " . $conexion->error;
    }
    $conexion->close();
}
?>