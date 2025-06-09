<?php
include('conect.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $empresa = $_POST["empresa"];
    $titulo = $_POST["titulo"];
    $descripcion = $_POST["description"];
    
    // Procesar la imagen
    $imagen = $_FILES["imagen"];
    
    // Verificar si se cargó una imagen
    if ($imagen["error"] === UPLOAD_ERR_OK) {
        // Ruta de almacenamiento para la imagen original
        $rutaImagenOriginal = "uploads/" . $imagen["name"];
        
        // Mover la imagen original a la carpeta de destino
        move_uploaded_file($imagen["tmp_name"], $rutaImagenOriginal);
        
        // Ruta de almacenamiento para la imagen en formato WebP
        $nombreImagenWebP = pathinfo($imagen["name"], PATHINFO_FILENAME) . ".webp"; // Nuevo nombre de la imagen WebP
        $imagenNormal=$imagen["name"];
        $rutaImagenWebP = "uploads/" . $nombreImagenWebP;
        
        // Convertir la imagen a formato WebP
        $imagenGD = imagecreatefromjpeg($rutaImagenOriginal);
        imagewebp($imagenGD, $rutaImagenWebP, 80); // 80 es la calidad (ajusta según tus necesidades)
        imagedestroy($imagenGD);
        
        // Guardar los datos en la base de datos (asegúrate de tener la conexión a la base de datos configurada)
        $sql = "INSERT INTO experiencias (empresa,titulo, subtitulo, imagen, imagenW) VALUES (? , ?, ?, ?, ?)";
        
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param("sssss", $empresa,$titulo, $descripcion, $imagenNormal, $nombreImagenWebP);
        
        if ($stmt->execute()) {
            echo "Experiencia registrada con éxito.";
        } else {
            echo "Error al registrar la experiencia.";
        }
        
        $stmt->close();
        $conexion->close();
    } else {
        echo "Error al subir la imagen.";
    }
}
?>