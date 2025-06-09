<?php
// Incluir la configuraci�n de la conexi�n a la base de datos

include('conect.php'); // Aseg�rate de ajustar el nombre de tu archivo de configuraci�n

// Consulta SQL
$sql = "SELECT productos_destacados.id,productos.titulo,productos.descripcion,productos.tipo,productos.categoria,productos.imagen,productos.imagenw,productos.imagen2,productos.imagenw2 from productos_destacados,productos where productos_destacados.id_servicio=productos.id limit 6";

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