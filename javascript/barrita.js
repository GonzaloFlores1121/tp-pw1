
document.querySelector("cancionSeleccionada").addEventListener("click",function(){
    alert("error");
    let cancionEscuchada ={
            titulo: document.getElementByName("cancion").textContent,
            imagen: document.getElementByName("imagen").src
    };

    localStorage.setItem("cancionEscuchada",cancionEscuchada);

    document.getElementById("cancionBarrita").textContent = localStorage.getItem("cancionEscuchada").titulo;
    document.getElementById("imagenBarrita").src = localStorage.getItem("cancionEscuchada").imagen;
});
