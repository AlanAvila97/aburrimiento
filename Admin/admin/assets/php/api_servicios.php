<?php
header("Access-Control-Allow-Origin: *");
// Conexi�n a la base de datos
include('conect.php');
// Realizar la primera consulta
$query1 = "SELECT * FROM galeria where id=4";
$result1 = $conexion->query($query1);

$query2 = "SELECT * FROM galeria where id=5";
$result2 = $conexion->query($query2);

// Realizar la segunda consulta
$query3 = "SELECT * from titulos where id=17";
$result3 = $conexion->query($query3);

$query4 = "SELECT * from titulos where id=18";
$result4 = $conexion->query($query4);

$query5 = "SELECT * from titulos where id=19";
$result5 = $conexion->query($query5);

$query7 = "SELECT * from productos where tipo='Servicio'";
$result7 = $conexion->query($query7);

$query8 = "SELECT * from titulos where id=6";
$result8 = $conexion->query($query8);
// Array para almacenar los resultados de ambas consultas
$data = array();

if ($result1 && $result2) {
    // Almacenar los resultados de la primera consulta
    $data['titulo_productos'] = $result8->fetch_all(MYSQLI_ASSOC);
    
    $data['titulo'] = $result3->fetch_all(MYSQLI_ASSOC);

    // Almacenar los resultados de la segunda consulta
    $data['subtitulo'] = $result4->fetch_all(MYSQLI_ASSOC);

    $data['descripcion'] = $result5->fetch_all(MYSQLI_ASSOC);

    $data['imagen1'] = $result1->fetch_all(MYSQLI_ASSOC);

    $data['imagen2'] = $result2->fetch_all(MYSQLI_ASSOC);

    $data['servicios'] = $result7->fetch_all(MYSQLI_ASSOC);

    // Cerrar las consultas
    $result1->close();
    $result2->close();
    $result3->close();
    $result4->close();
    $result5->close();
    $result7->close();
    $result8->close();
}

// Cerrar la conexi�n a la base de datos
$conexion->close();

// Convertir el array a formato JSON
$jsonData = json_encode($data);

// Guardar los resultados en un archivo JSON
if (file_put_contents("json/api_servicios.json", $jsonData)) {
    echo "Resultados guardados en resultados.json";
} else {
    echo "Error al guardar los resultados en un archivo JSON.";
}
?>