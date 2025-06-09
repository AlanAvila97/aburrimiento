<?php
include('conect.php');
// Recibe los datos del formulario
$titulo = $_POST['titulo'];
$descripcion = $_POST['description'];
$tipo = $_POST['tipo'];
$categoria = $_POST['categoria'];

// Procesa y guarda las imágenes en formato WebP
$imagen1 = $_FILES['imagen1'];
$imagen2 = $_FILES['imagen2'];

if ($imagen1['error'] == 0 && $imagen2['error'] == 0) {
    $uploadDir = 'uploads/';
    // Obtiene el nombre de los archivos
    $nombre_imagen1 = $imagen1['name'];
    $nombre_imagen2 = $imagen2['name'];
    $extension1 = pathinfo($imagen1['name'], PATHINFO_EXTENSION);
    $extension2 = pathinfo($imagen2['name'], PATHINFO_EXTENSION);
    $imageName1 = uniqid() . '.' . $extension1;
    $imageName2 = uniqid() . 'w.' . $extension2;
    $imagePath1 = $uploadDir . $imageName1;
    $imagePath2 = $uploadDir . $imageName2;
    // Ruta de la carpeta de subida (uploads)
    $imageWebPPath1 = $uploadDir . pathinfo($imageName1, PATHINFO_FILENAME) . '.webp';
    $imageWebPPath2 = $uploadDir . pathinfo($imageName2, PATHINFO_FILENAME) . '.webp';
    move_uploaded_file($imagen1['tmp_name'], $imagePath1);
    move_uploaded_file($imagen2['tmp_name'], $imagePath2);
    $image1 = imagecreatefromstring(file_get_contents($imagePath1));
    imagewebp($image1, $imageWebPPath1, 85); // 85 es la calidad del archivo WebP
    $image2 = imagecreatefromstring(file_get_contents($imagePath2));
    imagewebp($image2, $imageWebPPath2, 85); // 85 es la calidad del archivo WebP
    $imagen1namew=pathinfo($imageName1, PATHINFO_FILENAME) . '.webp';
    $imagen2namew=pathinfo($imageName2, PATHINFO_FILENAME) . '.webp';
    
    // Guarda los datos en la base de datos
    $sql = "INSERT INTO productos(titulo,descripcion, tipo, categoria, imagen, imagenw, imagen2, imagenw2) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssssssss", $titulo, $descripcion, $tipo, $categoria,$imageName1,$imagen1namew,$imageName2,$imagen2namew);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Producto guardado correctamente.";
        echo "llego";
    } else {
        echo "Error al guardar el producto en la base de datos.";
        echo "llego";
    }
    $stmt->close();
} else {
    echo "Error al subir las imágenes.";
}

// Cierra la conexión a la base de datos
$conexion->close();
?>
