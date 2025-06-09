<?php
include('conect.php');
// Verifica si se proporcionó un ID válido para eliminar
if (isset($_POST['id'])) {
    // Prepara y ejecuta la consulta SQL para eliminar la experiencia
    $id = $_POST['id'];
    $sql = "DELETE FROM valores WHERE id = ?";
    
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo "Valor eliminado con éxito.";
    } else {
        echo "Error al eliminar el valor: " . $stmt->error;
    }

    // Cierra la conexión y el statement
    $stmt->close();
    $conexion->close();
} else {
    echo "ID de valor no válido.";
}
?>