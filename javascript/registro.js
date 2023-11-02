const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const  errorMessageElement= document.getElementById('error-message');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let error=false;
    let mensajeError="";
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

   if(password != confirmPassword){
   mensajeError="Las contraseñas no coinciden.";
   errorMessageElement.textContent=mensajeError;
   }else{
   almacenarUsuario(username,email,password);
    alert("Registro exitoso!");
   
    window.location.href = 'inicio-sesion.html';
    
   }
  
});
function almacenarUsuario(username,email,password){
    const contraseñaTransformada = transformarContraseña(password);
    const usuario = {
        username: username,
        email: email,
        password: contraseñaTransformada
    };
    const usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem('usuarioRegistrado', usuarioJSON);
}

// Transformar la contraseña
function transformarContraseña(password) {
    const longitud = password.length;
    const mitad = Math.floor(longitud / 2);
    const primeraMitad = password.slice(0, mitad);
    const segundaMitad = password.slice(mitad);
    const contrasenaTransformada = segundaMitad + primeraMitad;
    return contrasenaTransformada;
}







