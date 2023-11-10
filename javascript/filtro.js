        let canciones=[
            {
                tituloCancion:"Prisioner",
                fotoCancion:"css\imgmati\dua lipa luna.jpg",
                cancion:"Prisioner(ft dua lipa)",
                referencia:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW"
            },   
            {
                tituloCancion:"Prisioner",
                fotoCancion:"css\imgmati\dua lipa luna.jpg",
                cancion:"Prisioner(ft dua lipa)",
                referencia:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW"
            },
            {
                tituloCancion:"Prisioner",
                fotoCancion:"css\imgmati\dua lipa luna.jpg",
                cancion:"Prisioner(ft dua lipa)",
                referencia:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW"
            }
        ]
        let resultadoCanciones = document.querySelector("#resultadoCanciones");
    canciones.forEach((item)=>{
    resultadoCanciones.innerHTML+=`
    <div class="lista" data-title="${tituloCancion}" data-type="cancion">
    <img src="${fotoCancion}" alt="${cancion}" width="150">
        <a href="${referencia}">${tituloCancion}
        </a>

        <a href="">
            <i class="fas fa-star"></i>
        </a>
</div>
    `;
});

alert("error");

// let albums=[
//     {
//         tituloAlbum:"Prisioner",
//         img:"css\imgmati\dua lipa luna.jpg",
//         alt:"Prisioner(ft dua lipa)",
//         href:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW",
//         a:"Prisioner"

//     },
//     {
//         tituloAlbum:"Prisioner",
//         img:"css\imgmati\dua lipa luna.jpg",
//         alt:"Prisioner(ft dua lipa)",
//         href:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW",
//         a:"Prisioner"
//     },
//     {
//         tituloAlbum:"Prisioner",
//         img:"css\imgmati\dua lipa luna.jpg",
//         alt:"Prisioner(ft dua lipa)",
//         href:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW",
//         a:"Prisioner"
//     }
// ];
// let resultadoAlbums = document.querySelector("#resultadoAlbums");

// albums.forEach((item)=>{
//     resultadoAlbums.innerHTML+=`
//     <div class="lista" data-title="${tituloAlbum}" data-type="album">
//     <img src="${img}" alt="${alt}" width="150">
//         <a href="${href}">${a}
//         </a>

//         <a href="">
//             <i class="fas fa-star"></i>
//         </a>
// </div>
//     `;
// });

// let buscador=document.querySelector("#buscador");
// buscador.addEventListener("keyup",()=>{
//     //1.-guardar el valor del buscador
//     let valor=buscador.value;
//     //2.-filtrar el array de cursos
//     let cursosFiltrados=cursos.filter(curso=>curso.titulo.indexOf(valor)>-1);
//     //3.-limpiar resultados
//     resultado.innerHTML="";
//     //4.-llenar resultados con los cursos filtrados
//     cursosFiltrados.forEach((item)=>{
//         resultado.innerHTML+=`
//             <article>
//                 <h2>Título: ${item.titulo}</h2>
//                 <p>Duración: ${item.duracion}</p>
//             </article>
//         `;
//     });
// });