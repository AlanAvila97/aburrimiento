<?php
// Eliminar todas las variables de sesión
session_unset();
// Destruir la sesión
session_destroy();
// Redirigir a una página de inicio de sesión o a donde desees
header("Location: https://icsem.mx/Admin/index.php");
?>