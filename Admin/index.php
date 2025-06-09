<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/44b33eef70.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="login">
        <form id="loginForm" action="login.php" method="post">
            <div class="imagenLogo">
                <img src="logo-azul.png" alt="" srcset="" style="width: 100%;">
            </div>
            <br><br><br>
            <div class="inputBox">
                <input type="text" name="username" placeholder="Username" id="username">
                <i class="fa-regular fa-user"></i>
            </div>
            <div class="inputBox">
                <input type="password" name="password" id="password" placeholder="password">
                <i class="fa-solid fa-lock"></i>
            </div>
            <div class="inputBox">
                <input type="submit" value="Log in">
            </div>
        </form>
    </div>
</body>
<script>
    /*
    document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const correo = document.getElementById("username").value;
        const contrasena = document.getElementById("password").value;

        // Realiza más validaciones si es necesario

        // Envía los datos al servidor PHP para la autenticación
        fetch("login.php", {
            method: "POST",
            body: JSON.stringify({ correo, contrasena }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "/NiceAdmin/index.php";
            } else {
                alert("Error: Credenciales incorrectas");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});*/
</script>
</html>l