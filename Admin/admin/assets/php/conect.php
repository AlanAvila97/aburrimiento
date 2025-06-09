<?php
$host = 'localhost';
$usuario = 'icsemmx_root';
$contrasena = '1w^i&etIw$};';
$base_de_datos = 'icsemmx_datos';
$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos);

if ($conexion->connect_error) {
    die('Error de conexión a la base de datos: ' . $conexion->connect_error);
}
?>