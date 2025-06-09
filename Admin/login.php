<?php
// Configuración de la conexión a la base de datos
$host = "localhost";
$usuario = "icsemmx_root";
$contrasena = "1w^i&etIw$};";
$base_de_datos = "icsemmx_datos";

// Conectarse a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos);

if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}

// Recibe los datos del formulario
$correo=$_POST['username'];
$contrasena=$_POST['password'];
//$data = json_decode(file_get_contents("php://input"));

if (isset($correo) && isset($contrasena)) {
    // Realiza la consulta SQL para verificar las credenciales
    $consulta = "SELECT * FROM users WHERE email = '$correo' AND password = '$contrasena'";
    $resultado = $conexion->query($consulta);

    if ($resultado->num_rows > 0) {
        $respuesta = array("success" => true);
        $fila = $resultado->fetch_assoc();
        session_start();
        $_SESSION['usuario']=$fila['nombre'].' '.$fila['apellido_p'].' '.$fila['apellido_m'];
        $_SESSION['nombre']=$fila['nombre'];
        $_SESSION['apellidoP']=$fila['apellido_p'];
        $_SESSION['apellidoM']=$fila['apellido_m'];
        $_SESSION['id']=$fila['id'];
        header("Location: admin/index.php");
    } else {
        $respuesta = array("success" => false);
    }

    echo json_encode($respuesta);
} else {
    echo json_encode(array("success" => false, "message" => "Faltan datos"));
}

$conexion->close();
?>