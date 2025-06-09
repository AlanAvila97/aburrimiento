<?php
include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $id = $_POST["id"];
    $producto = $_POST["producto"];
    $sql = "UPDATE productos_destacados SET id_servicio = ? WHERE id = ?";
    // Preparar la sentencia
    if ($stmt = $conexion->prepare($sql)) {
        // Vincular los par�metros
        $stmt->bind_param("ss",$producto, $id);
        // Ejecutar la sentencia
        if ($stmt->execute()) {
            echo "Registro actualizado con �xito.";
        } else {
            echo "Error al actualizar el registro: " . $stmt->error;
        }
        // Cerrar la sentencia preparada
        $stmt->close();
    } else {
        echo "Error en la preparaci�n de la sentencia: " . $conexion->error;
    }
    // Cerrar la conexi�n a la base de datos
    $conexion->close();
}
?>