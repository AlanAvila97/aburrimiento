<?php
// Eliminar todas las variables de sesi�n
session_unset();
// Destruir la sesi�n
session_destroy();
// Redirigir a una p�gina de inicio de sesi�n o a donde desees
header("Location: https://icsem.mx/Admin/index.php");
?>