<?php
    include('conect.php');
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $id = intval($_POST['id']);
        $nombre = $_POST['nombre'];
        $apellido_p = $_POST['apellido_p'];
        $apellido_m = $_POST['apellido_m'];
        $correo = $_POST['correo'];

        $stmt = $conexion->prepare("UPDATE users SET nombre = ?, apellido_p = ?, apellido_m = ?, email = ? WHERE id = ?");
        $stmt->bind_param("ssssi", $nombre, $apellido_p, $apellido_m, $correo, $id);

        if ($stmt->execute()) {
            echo "Usuario actualizado con exito.";
        } else {
            echo "Error al actualizar el usuario: " . $stmt->error;
        }

        $stmt->close();
        $conexion->close();
    }
?>
