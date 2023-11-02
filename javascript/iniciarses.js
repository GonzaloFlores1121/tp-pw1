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

    if (usuarioRegistrado) {
        // Comprobar si el nombre de usuario coincide
        if (username === usuarioRegistrado.username) {
            // Transformar la contraseña ingresada para compararla con la almacenada
            const inputPasswordTransformada = transformarContrasena(password);
    
            // Comprobar si la contraseña coincide
            if (inputPasswordTransformada === usuarioRegistrado.password) {
                // Inicio de sesión exitoso
                alert("Inicio de sesión exitoso");
                window.location.href= 'index.html'
                guardarSesionIniciada(username,password);
            } else {
                alert("La contraseña es incorrecta");
            }
        } else {
            alert("El nombre de usuario es incorrecto");
        }
    } else {
        alert("El usuario no está registrado");
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

function transformarContrasena(contrasena) {
    const longitud = contrasena.length;
    const mitad = Math.floor(longitud / 2);
    const primeraMitad = contrasena.slice(0, mitad);
    const segundaMitad = contrasena.slice(mitad);
    const contrasenaTransformada = segundaMitad + primeraMitad;
    return contrasenaTransformada;
}


  