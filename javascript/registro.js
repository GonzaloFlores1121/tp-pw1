const registrationForm = document.getElementById('registration-form');



registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    clearErrorMessages();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('fechaNacimiento').value;

    // Realizar validaciones
    let valid = true;

    if (username.length < 4 || username.length > 8) {
        displayErrorMessage('username-error', 'El nombre de usuario debe tener entre 4 y 8 caracteres.');
        valid = false;
    }

    if(password === ""){
        displayErrorMessage('password-error', 'Ingrese una contraseña');
        valid = false;
    }

    if (password !== confirmPassword) {
        displayErrorMessage('confirm-password-error', 'Las contraseñas no coinciden.');
        valid = false;
    }

    if (!isValidEmail(email)) {
        displayErrorMessage('email-error', 'El email no es válido.');
        valid = false;
    }
    if(!isValidBirth(birthdate)){
displayErrorMessage('birthdate-error','Formato invalido de fecha.');
valid=false;
    }

   
    if (valid) {
        // Todos los campos son válidos, proceder con el registro
        
        almacenarUsuario(username,email,password,birthdate);
        alert('Registro exitoso');
        window.location.href = 'inicio-sesion.html'; // Navegar a la vista de inicio de sesión
  
       
    }
});

function almacenarUsuario(username,email,password,birthdate){
    const contraseñaTransformada = transformarContraseña(password);
    const usuario = {
        username: username,
        email: email,
        password: contraseñaTransformada,
        birthdate : birthdate
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


function isValidEmail(email) {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
}
function displayErrorMessage(elementId, message) {
    document.getElementById(elementId).textContent = message;
}
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (element) {
        element.textContent = '';
    });
}

function isValidBirth(birthdate){
    return /^\d{2}-\d{2}-\d{4}$/.test(birthdate);
}
