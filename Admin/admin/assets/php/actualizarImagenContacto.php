<?php
include('conect.php');
    $imagen = $_FILES['imagen'];
    $id = $_POST['id'];

    // Comprobar si se ha seleccionado una imagen
    if ($imagen['error'] === UPLOAD_ERR_OK) {
        // Ruta donde se guardar�n los archivos
        $uploadDir = 'uploads/';

        // Crear un directorio si no existe
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        // Obtener la extensi�n de la imagen
        $extension = pathinfo($imagen['name'], PATHINFO_EXTENSION);

        // Generar un nombre �nico para la imagen
        $imageName = uniqid() . '.' . $extension;
        $imagePath = $uploadDir . $imageName;
        $imageWebPPath = $uploadDir . pathinfo($imageName, PATHINFO_FILENAME) . '.webp';

        // Mover la imagen al directorio de subida
        move_uploaded_file($imagen['tmp_name'], $imagePath);

        // Crear una copia en formato WebP
        $image = imagecreatefromstring(file_get_contents($imagePath));
        imagewebp($image, $imageWebPPath, 85); // 85 es la calidad del archivo WebP

        $stmt = $conexion->prepare("UPDATE galeria SET imagenW = ?, imagenN = ? WHERE id = ?");
        $stmt->bind_param("sss", basename($imageWebPPath), $imageName, $id);

        if ($stmt->execute()) {
            echo "Imagen actualizada con �xito.";
        } else {
            echo "Error al actualizar la imagen: " . $stmt->error;
        }

        $stmt->close();
        $conexion->close();
    } else {
        echo "Error al subir la imagen.";
    }
?>
