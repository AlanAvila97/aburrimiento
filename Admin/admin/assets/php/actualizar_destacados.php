<?php
include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $titulo = $_POST["titulo"];
    $subtitulo = $_POST["subtitulo"];
    $sinopsis = $_POST["descripcion"];
    if (isset($_FILES["imagen"]) && $_FILES["imagen"]["error"] == 0) {
        $imagenTmp = $_FILES["imagen"]["tmp_name"];
        $imagenNombre = $_FILES["imagen"]["name"];

        // Obt�n el tipo de imagen
        $tipoImagen = exif_imagetype($imagenTmp);

        // Comprueba si el tipo de imagen es compatible (JPEG, PNG, o JPG)
        if ($tipoImagen === IMAGETYPE_JPEG || $tipoImagen === IMAGETYPE_PNG) {
            // Mover la imagen a una carpeta deseada
            $rutaImagenOriginal = "uploads/" . $imagenNombre;
            if (move_uploaded_file($imagenTmp, $rutaImagenOriginal)) {
                // Cargar la imagen en funci�n del tipo
                if ($tipoImagen === IMAGETYPE_JPEG) {
                    $imagen = imagecreatefromjpeg($rutaImagenOriginal);
                } elseif ($tipoImagen === IMAGETYPE_PNG) {
                    $imagen = imagecreatefrompng($rutaImagenOriginal);
                }

                if ($imagen) {
                    // Convertir la imagen a formato WebP
                    $imagenWebpNombre = "uploads/" . pathinfo($imagenNombre, PATHINFO_FILENAME) . ".webp";
                    $imagenWEBP=pathinfo($imagenNombre, PATHINFO_FILENAME) . ".webp";
                    imagewebp($imagen, $imagenWebpNombre, 80); // 80 es la calidad de compresi�n (ajusta seg�n tus necesidades)
                    imagedestroy($imagen);

                    echo "Imagen subida y convertida a WebP con exito!";
                    $sql = "UPDATE destacados SET titulo = ?, subtitulo = ?, descripcion = ?, imagenN = ?, imagenW = ? WHERE id = ?";
                    $stmt = $conexion->prepare($sql);
                    $stmt->bind_param("sssssi", $titulo, $subtitulo, $sinopsis, $imagenNombre, $imagenWEBP, $id);

                    if ($stmt->execute()) {
                        echo "Registro actualizado correctamente.";
                    } else {
                        echo "Error al actualizar el registro en la base de datos: " . $stmt->error;
                    }

                    $stmt->close();
                    $conexion->close();
                } else {
                    echo "Error al cargar la imagen.";
                }
            } else {
                echo "Error al mover la imagen a la carpeta deseada.";
            }
        } else {
            echo "Por favor, suba una imagen en formato valido (JPEG, PNG o JPG).";
        }
    } else {
        echo "Error al subir la imagen.";
    }
}
?>