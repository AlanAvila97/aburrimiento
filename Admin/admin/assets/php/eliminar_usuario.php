<?php
include('conect.php');
// Verifica si se proporciona un ID valido para eliminar
if (isset($_POST['id'])) {
    // Prepara y ejecuta la consulta SQL para eliminar la experiencia
    $id = $_POST['id'];
    $sql = "DELETE FROM users WHERE id = ?";
    
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo "Experiencia eliminada con exito.";
    } else {
        echo "Error al eliminar el usuario: " . $stmt->error;
    }

    // Cierra la conexion y el statement
    $stmt->close();
    $conexion->close();
} else {
    echo "ID de usuario no valido.";
}
?>