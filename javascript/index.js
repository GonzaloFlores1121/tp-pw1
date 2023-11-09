const userProfile=document.querySelector('.usuario');
const usuarioLogueadoJSON = localStorage.getItem('usuarioLogueado');
const usuarioLogueado = JSON.parse(usuarioLogueadoJSON);

if (localStorage.getItem('usuarioLogueado')) {
    // El usuario ha iniciado sesión, mostrar elementos relacionados con el perfil
    const usernameLogin = usuarioLogueado.usernameLogin;
  document.getElementById('username').textContent=usernameLogin;
  
} else {
    // El usuario no ha iniciado sesión, ocultar elementos relacionados con el perfil


   userProfile.innerHTML =  `
   <a href="inicio-sesion.html">Iniciar Sesión</a>
   <span> | </span>
   <a href="registro.html">Registrarse</a>
`;
}

// Agregar un controlador de eventos para cerrar la sesión
document.getElementById('cerrar-sesion').addEventListener('click', function() {
    // Eliminar el indicador de inicio de sesión del localStorage
    localStorage.removeItem('usuarioLogueado');
    
});