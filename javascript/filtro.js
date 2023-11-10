let canciones=[
    {
        tituloCancion:"Prisioner",
        fotoCancion:"css/imgmati/dua lipa luna.jpg",
        cancion:"Prisioner(ft dua lipa)",
        referencia:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW"
    },   
    {
        tituloCancion:"Ciudad Magica",
        fotoCancion:"css/imgmati/bionica album.jpg",
        cancion:"Ciudad Magica",
        referencia:"https://open.spotify.com/intl-es/track/29Bjl63rfik8188v8J08hQ?si=f7330971706249f7"
    },
    {
        tituloCancion:"Pendejo",
        fotoCancion:"css/imgmati/babasonicos album.jpg",
        cancion:"Pendejo",
        referencia:"https://open.spotify.com/intl-es/track/60GX3BzwD0n4RlntDDsnxO?si=26d8ce558517417c"
    }
];

let resultadoCanciones = document.querySelector("#resultadoCanciones");
canciones.forEach((item)=>{
    resultadoCanciones.innerHTML+=`<div class="lista" data-title="${item.tituloCancion}" data-type="cancion">
                                        <img src="${item.fotoCancion}" alt="${item.cancion}" width="150">
                                        <a href="${item.referencia}">${item.tituloCancion}</a>
                                        
                                        <a href=""><i class="fas fa-star"></i></a>
                                    </div>`;
});


let albums=[
    {
        tituloAlbum:"Future Nostalgia",
        img:"css/imgmati/dua lipa luna.jpg",
        alt:"Future Nostalgia",
        href:"https://open.spotify.com/album/0JeyP8r2hBxYIoxXv11XiX",
        a:"Future Nostalgia"

    },
    {
        tituloAlbum:"Ciudad Magica",
        img:"css/imgmati/bionica album.jpg",
        alt:"Ciudad Magica",
        href:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW",
        a:"Ciudad Magica"
    },
    {
        tituloAlbum:"Pendejo",
        img:"css/imgmati/babasonicos album.jpg",
        alt:"Pendejo",
        href:"https://open.spotify.com/track/1V4uMdCH6aDZire0vVqnXW",
        a:"Pendejo"
    }
];
let resultadoAlbums = document.querySelector("#resultadoAlbums");

albums.forEach((item)=>{
    resultadoAlbums.innerHTML+=`
    <div class="lista" data-title="${item.tituloAlbum}" data-type="album">
    <img src="${item.img}" alt="${item.alt}" width="150">
        <a href="${item.href}">${item.a}
        </a>

        <a href="">
            <i class="fas fa-star"></i>
        </a>
</div>
    `;
});

let buscador=document.querySelector("#buscador");
buscador.addEventListener("keyup",()=>{
    //1.-guardar el valor del buscador
    let valor=buscador.value;
    //2.-filtrar el array de cursos
    let cursosFiltrados=cursos.filter(curso=>curso.titulo.indexOf(valor)>-1);
    //3.-limpiar resultados
    resultado.innerHTML="";
    //4.-llenar resultados con los cursos filtrados
    cursosFiltrados.forEach((item)=>{
        resultado.innerHTML+=`
            <article>
                <h2>Título: ${item.titulo}</h2>
                <p>Duración: ${item.duracion}</p>
            </article>
        `;
    });
});