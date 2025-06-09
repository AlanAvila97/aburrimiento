<?php
$targetDir = "uploads/"; // Directorio donde se guardar�n los archivos

if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

// Comprobar si se recibieron archivos
if (!empty($_FILES)) {
    $tempFile = $_FILES['file']['tmp_name'];
    $fileName = $_FILES['file']['name'];
    $targetFile = $targetDir . $fileName;

    // Mover el archivo temporal al directorio de destino
    if (move_uploaded_file($tempFile, $targetFile)) {
        // Obtener la categor�a de la imagen
        $categoria = $_POST['categoria'];

        // Registrar la informaci�n en la base de datos o realizar cualquier otra acci�n necesaria
        // ...

        echo "El archivo se ha subido con �xito con la categor�a: " . $categoria;

        $conn = new mysqli('localhost', 'root', '', 'icsem');

            if ($conn->connect_error) {
                die("Error en la conexi�n a la base de datos: " . $conn->connect_error);
            }

            $stmt = $conn->prepare("INSERT INTO galeria (imagenN, imagenW,tipo) VALUES (?, ?,?)");
            $stmt->bind_param("sss", $fileName, basename($webpFile));

            if ($stmt->execute()) {
                echo "El archivo se ha subido con �xito y se ha guardado en formato WebP.";
            } else {
                echo "Hubo un error al guardar el archivo en la base de datos: " . $stmt->error;
            }

            $stmt->close();
            $conn->close();
    } else {
        echo "Hubo un error al subir el archivo.";
    }
}
?>