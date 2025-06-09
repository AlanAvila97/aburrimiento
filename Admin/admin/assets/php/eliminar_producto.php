<?php
include('conect.php');
// Verifica si se proporcion� un ID v�lido para eliminar
if (isset($_POST['id'])) {
    // Prepara y ejecuta la consulta SQL para eliminar la experiencia
    $id = $_POST['id'];
    $sql = "DELETE FROM productos WHERE id = ?";
    
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo "Experiencia eliminada con �xito.";
    } else {
        echo "Error al eliminar la experiencia: " . $stmt->error;
    }

    // Cierra la conexi�n y el statement
    $stmt->close();
    $conexion->close();
} else {
    echo "ID de experiencia no v�lido.";
}
?>