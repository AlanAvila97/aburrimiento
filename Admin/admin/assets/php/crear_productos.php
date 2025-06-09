<?php
include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST["titulo"];
    $descripcion = $_POST["description"];
    $tipo = $_POST["tipo"];
    $categoria = $_POST["categoria"];

    // Procesar la imagen
    if (isset($_FILES["imagen"]) && $_FILES["imagen"]["error"] == 0) {
        $imagenTmp = $_FILES["imagen"]["tmp_name"];
        $imagenNombre = $_FILES["imagen"]["name"];
        $extension = pathinfo($imagenNombre, PATHINFO_EXTENSION);

        // Verificar si es una extensión de imagen válida (PNG, JPEG o JPG)
        $formatosPermitidos = array('jpg', 'jpeg', 'png');
        if (in_array(strtolower($extension), $formatosPermitidos)) {
            // Mover la imagen a una carpeta deseada
            $rutaImagenOriginal = "uploads/" . $imagenNombre;
            if (move_uploaded_file($imagenTmp, $rutaImagenOriginal)) {
                // Cargar la imagen en función de la extensión
                if (in_array(strtolower($extension), array('jpg', 'jpeg'))) {
                    $imagen = imagecreatefromjpeg($rutaImagenOriginal);
                } elseif (strtolower($extension) === 'png') {
                    $imagen = imagecreatefrompng($rutaImagenOriginal);
                }

                if ($imagen) {
                    // Convertir la imagen a formato WebP
                    $imagenWebpNombre = "uploads/" . pathinfo($imagenNombre, PATHINFO_FILENAME) . ".webp";
                    imagewebp($imagen, $imagenWebpNombre, 80); // 80 es la calidad de compresión (ajusta según tus necesidades)
                    imagedestroy($imagen);

                    $sql = "INSERT INTO productos (titulo, description, tipo, imagen, imagenw,categoria) VALUES (?, ?, ?, ?, ?, ?)";
                    $stmt = $conexion->prepare($sql);
                    $stmt->bind_param("ssssss", $titulo, $descripcion, $tipo, $rutaImagenOriginal, $imagenWebpNombre,$categoria);

                    if ($stmt->execute()) {
                        echo "Producto agregado con éxito!";
                    } else {
                        echo "Error al guardar los datos en la base de datos: " . $stmt->error;
                    }

                    $stmt->close();
                    $conn->close();
                } else {
                    echo "Error al cargar la imagen.";
                }
            } else {
                echo "Error al mover la imagen a la carpeta deseada.";
            }
        } else {
            echo "Por favor, suba una imagen en formato válido (PNG, JPEG o JPG).";
        }
    } else {
        echo "Error al subir la imagen.";
    }
}
?>