/*const nombrePlan = document.getElementById('nombrePlan');
const imagenPlan = document.getElementById('imagenPlan');
const descripcionPlan = document.getElementById('descripcionPlan');*/

const userProfile = document.querySelector('.usuario');
const usuarioLogueadoJSON = localStorage.getItem('usuarioLogueado');
const usuarioLogueado = JSON.parse(usuarioLogueadoJSON);

if (localStorage.getItem('usuarioLogueado')) {
    // El usuario ha iniciado sesión, mostrar elementos relacionados con el perfil
    const usernameLogin = usuarioLogueado.usernameLogin;
    document.getElementById('username').textContent = usernameLogin;
} else {
    // El usuario no ha iniciado sesión, ocultar elementos relacionados con el perfil
    userProfile.innerHTML =  `<a href="inicio-sesion.html">Iniciar Sesión</a> <span> | </span> <a href="registro.html">Registrarse</a>`;
}

// Agregar un controlador de eventos para cerrar la sesión
document.getElementById('cerrar-sesion').addEventListener('click', function() {
    // Eliminar el indicador de inicio de sesión del localStorage
    localStorage.removeItem('usuarioLogueado');
});

addEventListener("DOMContentLoaded", function(){
    // let planSeleccionado = this.localStorage.getItem('planSeleccionado');

    // let nombrePlan = planSeleccionado.nombre;
    // let imagenPlan = planSeleccionado.srcImagen;
    // let descripcionPlan = planSeleccionado.descripcion;

    const urlParam = new URLSearchParams(window.location.search);
    const radioButton = urlParam.get('radioButton');
    let nombrePlan;
    let imagenPlan;
    let descripcionPlan;

    switch(radioButton.id)
    {
        case 1:
            nombrePlan = urlParam.get('nombrePlanMensual');
            imagenPlan = urlParam.get('imagenPlanMensual').src;
            descripcionPlan = urlParam.get('descripcionPlanMensual');
            break;
        case 2:
            break;
        case 3:
            break;
    }

    document.getElementById('nombrePlan').textContent = nombrePlan;
    document.getElementById('imagenPlan').src = imagenPlan;
    document.getElementById('descripcionPlan').textContent = descripcionPlan;
   
    // const plan = document.querySelector('#articuloPlan');
    // plan.innerHTML = `<h3 id="nombrePlan">${nombrePlan}</h3>
    //                     <img src="${imagenPlan}" alt="plan.jpg" id="imagenPlan">
    //                     <p id="descripcionPlan">${descripcionPlan}</p>`;
})