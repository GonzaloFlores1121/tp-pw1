const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const usuarioRegistradoJSON = localStorage.getItem('usuarioRegistrado');
const usuarioRegistrado = JSON.parse(usuarioRegistradoJSON);


loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Limpiar el mensaje de error anterior
    errorMessage.textContent = '';

    if (username === "") {
        errorMessage.textContent = "Ingrese su usuario.";
    } else if (password === "") {
        errorMessage.textContent = "Ingrese la contraseña.";
    } else if (usuarioRegistrado) {
        // Comprobar si el nombre de usuario coincide
        if (username === usuarioRegistrado.username) {
            // Transformar la contraseña ingresada para compararla con la almacenada
            const inputPasswordTransformada = transformarContraseña(password);

            // Comprobar si la contraseña coincide
            if (inputPasswordTransformada === usuarioRegistrado.password) {
                // Inicio de sesión exitoso
                alert("Inicio de sesión exitoso");
                window.location.href = 'index.html';
                guardarSesionIniciada(username, password);
            } else {
                errorMessage.textContent = "La contraseña es incorrecta";
            }
        } else {
            errorMessage.textContent = "El nombre de usuario es incorrecto";
        }
    } else {
        errorMessage.textContent = "El usuario no está registrado";
    }
});
      
   
function guardarSesionIniciada(username,password){
const usuario = {
    usernameLogin : username,
    passowrdLogin : password
};
const usuarioLoginJSON= JSON.stringify(usuario);
localStorage.setItem('usuarioLogueado', usuarioLoginJSON);
}

function transformarContraseña(contrasena) {
    const longitud = contrasena.length;
    const mitad = Math.floor(longitud / 2);
    const primeraMitad = contrasena.slice(0, mitad);
    const segundaMitad = contrasena.slice(mitad);
    const contraseñaTransformada = segundaMitad + primeraMitad;
    return contraseñaTransformada;
}


  