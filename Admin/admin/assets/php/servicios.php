<?php
// Incluir la configuración de la conexión a la base de datos

include('conect.php'); // Asegúrate de ajustar el nombre de tu archivo de configuración

// Consulta SQL
$sql = 'SELECT * FROM productos where tipo="Servicio"';

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