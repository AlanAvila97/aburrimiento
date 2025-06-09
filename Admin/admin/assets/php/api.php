<?php
header("Access-Control-Allow-Origin: *");
// Conexión a la base de datos
include('conect.php');
// Realizar la primera consulta
$query1 = "SELECT * FROM destacados order by id ASC";
$result1 = $conexion->query($query1);

// Realizar la segunda consulta
$query2 = "SELECT * from titulos where id=5";
$result2 = $conexion->query($query2);

$query3 = "SELECT * FROM valores order by id asc";
$result3 = $conexion->query($query3);

$query4 = "SELECT * FROM quienes order by id asc";
$result4 = $conexion->query($query4);

$query5 = "SELECT * from titulos where id=6";
$result5 = $conexion->query($query5);

$query6 = "SELECT productos.id,productos.titulo,productos.descripcion,productos.tipo,productos.categoria,productos.imagen,productos.imagenw,productos.imagen2,productos.imagenw2 from productos_destacados,productos where productos_destacados.id_servicio=productos.id limit 6";
$result6 = $conexion->query($query6);

$query7 = "SELECT * from servicios_postventa";
$result7 = $conexion->query($query7);

$query8 = "SELECT * from titulos where id=7";
$result8 = $conexion->query($query8);

$query9 = "SELECT * from contactos order by id asc";
$result9 = $conexion->query($query9);

$query10 = "SELECT * from galeria where id=1 order by id desc limit 1";
$result10 = $conexion->query($query10);

$query11 = "SELECT * from titulos where id=8";
$result11 = $conexion->query($query11);

$query12 = "SELECT * from experiencias order by id desc limit 3";
$result12 = $conexion->query($query12);

$query13 = "select * from titulos where id=10 or id=11 or id=12";
$result13 = $conexion->query($query13);

$query14 = "select * from titulos where id=13 or id=9 order by id DESC";
$result14 = $conexion->query($query14);
// Array para almacenar los resultados de ambas consultas
$data = array();

if ($result1 && $result2) {
    // Almacenar los resultados de la primera consulta
    $data['destacados'] = $result1->fetch_all(MYSQLI_ASSOC);

    // Almacenar los resultados de la segunda consulta
    $data['titulo_valores'] = $result2->fetch_all(MYSQLI_ASSOC);

    $data['valores'] = $result3->fetch_all(MYSQLI_ASSOC);

    $data['quienes'] = $result4->fetch_all(MYSQLI_ASSOC);

    $data['titulo_productos'] = $result5->fetch_all(MYSQLI_ASSOC);

    $data['productos'] = $result6->fetch_all(MYSQLI_ASSOC);

    $data['servicios_postventa'] = $result7->fetch_all(MYSQLI_ASSOC);

    $data['titulo_contactanos'] = $result8->fetch_all(MYSQLI_ASSOC);

    $data['contactos'] = $result9->fetch_all(MYSQLI_ASSOC);

    $data['imagen_contactos'] = $result10->fetch_all(MYSQLI_ASSOC);

    $data['titulo_experiencia'] = $result11->fetch_all(MYSQLI_ASSOC);

    $data['experiencia'] = $result12->fetch_all(MYSQLI_ASSOC);

    $data['datos'] = $result13->fetch_all(MYSQLI_ASSOC);

    $data['aviso'] = $result14->fetch_all(MYSQLI_ASSOC);

    // Cerrar las consultas
    $result1->close();
    $result2->close();
    $result3->close();
    $result4->close();
    $result5->close();
    $result6->close();
    $result7->close();
    $result8->close();
    $result9->close();
    $result10->close();
    $result11->close();
    $result12->close();
    $result13->close();
    $result14->close();
}

// Cerrar la conexión a la base de datos
$conexion->close();

// Convertir el array a formato JSON
$jsonData = json_encode($data);

// Guardar los resultados en un archivo JSON
if (file_put_contents("json/api.json", $jsonData)) {
    echo "Resultados guardados en resultados.json";
} else {
    echo "Error al guardar los resultados en un archivo JSON.";
}
?>