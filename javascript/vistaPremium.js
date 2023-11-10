const userProfile = document.querySelector('.usuario');
const usuarioLogueadoJSON = localStorage.getItem('usuarioLogueado');
const usuarioLogueado = JSON.parse(usuarioLogueadoJSON);
const enviarForm = document.getElementById('btnSubmit');
let radioButton;

if (localStorage.getItem('usuarioLogueado')) {
    // El usuario ha iniciado sesión, mostrar elementos relacionados con el perfil
    document.getElementById('nombreUsuario').textContent = usuarioLogueado.usernameLogin;
} else {
    // El usuario no ha iniciado sesión, ocultar elementos relacionados con el perfil
    userProfile.innerHTML =  `<a href="inicio-sesion.html">Iniciar Sesión</a> <span> | </span> <a href="registro.html">Registrarse</a>`;
}

// Agregar un controlador de eventos para cerrar la sesión
document.getElementById('cerrar-sesion').addEventListener('click', function() {
    // Eliminar el indicador de inicio de sesión del localStorage
    localStorage.removeItem('usuarioLogueado');
});

function cambiarSeleccion(){
    radioButton = document.querySelector('input[name="plan"]:checked');

    if(radioButton.id == 'mensual')
        radioButton.value = 1;
    else if(radioButton.id == 'anual')
        radioButton.value = 2;
    else if(radioButton.id == 'infinito')
        radioButton.value = 3;
}

enviarForm.addEventListener('click', function(event) {
    event.preventDefault();

    const form = document.getElementById('formularioPlanes');

    //almacenarInfoPlan();

    form.submit();
});

// function almacenarInfoPlan(){
//     let nombrePlan;
//     let imagenPlan;
//     let descripcionPlan;

//     if(radioButton == 'mensual'){
//         nombrePlan = document.getElementById('nombrePlanMensual').value;
//         imagenPlan = document.getElementById('imagenPlanMensual').src;
//         descripcionPlan = document.getElementById('descripcionPlanMensual').value;

//     }else if(idRadioButton == 'anual'){
//         nombrePlan = document.getElementById('nombrePlanAnual').value;
//         imagenPlan = document.getElementById('imagenPlanAnual').src;
//         descripcionPlan = document.getElementById('descripcionPlanAnual').value;

//     }else if(idRadioButton == 'infinito'){
//         nombrePlan = document.getElementById('nombrePlanInfinito').value;
//         imagenPlan = document.getElementById('imagenPlanInfinito').src;
//         descripcionPlan = document.getElementById('descripcionPlanInfinito').value;

//     }

//     const urlParam = new URLSearchParams(window.location.search);
//     const nombre = urlParam.

// }