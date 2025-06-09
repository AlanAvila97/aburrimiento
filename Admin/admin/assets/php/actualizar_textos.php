<?php
include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $id = $_POST["id"];
    $texto = $_POST["texto"];
    $sql = "UPDATE titulos SET titulo = ? WHERE id = ?";
    // Preparar la sentencia
    if ($stmt = $conexion->prepare($sql)) {
        // Vincular los parámetros
        $stmt->bind_param("ss",$texto, $id);
        // Ejecutar la sentencia
        if ($stmt->execute()) {
            echo "Registro actualizado con éxito.";
        } else {
            echo "Error al actualizar el registro: " . $stmt->error;
        }
        // Cerrar la sentencia preparada
        $stmt->close();
    } else {
        echo "Error en la preparación de la sentencia: " . $conexion->error;
    }
    // Cerrar la conexión a la base de datos
    $conexion->close();
}
?>