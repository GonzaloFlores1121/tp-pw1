
let musica;
addEventListener("DOMContentLoaded", function(){
    musica = document.querySelector("#cancion-lateral");   
    if(this.localStorage.getItem("cancionEscuchada") != null){
        musica.innerHTML=       
        ` <a href="misalbums.html">
                <span id="cancionBarrita"> ${localStorage.getItem("cancionEscuchada")} </span>
            </a> `;
    }
   
});
document.querySelector(".recomendados").addEventListener("click",function(){
    
    let cancionEscuchada = document.querySelector("#asd").textContent;
    localStorage.removeItem("cancionEscuchada");
    localStorage.setItem("cancionEscuchada",cancionEscuchada);
    // document.getElementById("cancionBarrita").textContent = localStorage.getItem("cancionEscuchada").titulo;
    // document.getElementById("imagenBarrita").src = localStorage.getItem("cancionEscuchada").imagen;
           
    musica = document.querySelector("#cancion-lateral");      
    musica.innerHTML=       
            ` <a href="misalbums.html">
                    <span id="cancionBarrita"> ${localStorage.getItem("cancionEscuchada")} </span>
                </a> `;
alert(localStorage.getItem("cancionEscuchada"));
});
document.querySelector(".lista").addEventListener("click",function(){
    
    let cancionEscuchada = document.querySelector("data-title").textContent;
    alert(cancionEscuchada);
    localStorage.removeItem("cancionEscuchada");
    localStorage.setItem("cancionEscuchada",cancionEscuchada);
    // document.getElementById("cancionBarrita").textContent = localStorage.getItem("cancionEscuchada").titulo;
    // document.getElementById("imagenBarrita").src = localStorage.getItem("cancionEscuchada").imagen;
           
    musica = document.querySelector("#cancion-lateral");      
    musica.innerHTML=       
            ` <a href="misalbums.html">
                    <span id="cancionBarrita"> ${localStorage.getItem("cancionEscuchada")} </span>
                </a> `;
alert(localStorage.getItem("cancionEscuchada"));
});
