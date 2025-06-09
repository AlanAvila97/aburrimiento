<?php
// Incluir la configuraci n de la conexi n a la base de datos

include('conect.php'); // Aseg rate de ajustar el nombre de tu archivo de configuraci n

// Consulta SQL
$sql = 'SELECT * FROM servicios_postventa order by id ASC';

$resultado = $conexion->query($sql);

if (!$resultado) {
    die('Error en la consulta: ' . $conexion->error);
}

// Crear un array para almacenar los resultados
$usuarios = array();

// Recorrer el resultado y agregarlo al array
while ($fila = $resultado->fetch_assoc()) {
    $usuarios[] = $fila;
}

// Convertir el array a JSON
$respuesta = json_encode($usuarios);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo $respuesta;
?>