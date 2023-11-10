let canciones=[
    {
        tituloCancion:"Prisioner",
        fotoCancion:"css/imgmati/dua lipa luna.jpg",
        cancion:"Prisioner(ft dua lipa)",
    },   
    {
        tituloCancion:"Ciudad Magica",
        fotoCancion:"css/imgmati/bionica album.jpg",
        cancion:"Ciudad Magica",
    },
    {
        tituloCancion:"Pendejo",
        fotoCancion:"css/imgmati/babasonicos album.jpg",
        cancion:"Pendejo",
    }
];

let resultadoCanciones = document.querySelector("#resultadoCanciones");
canciones.forEach((item)=>{
    resultadoCanciones.innerHTML+=`<div class="lista" data-title="${item.tituloCancion}" data-type="cancion">
                                        <img src="${item.fotoCancion}" alt="${item.cancion}" width="150">
                                        <a href="">${item.tituloCancion}</a>
                                        
                                        <a href=""><i class="fas fa-star"></i></a>
                                    </div>`;
});


let albums=[
    {
        tituloAlbum:"Future Nostalgia",
        img:"css/imgmati/dua lipa luna.jpg",
        alt:"Future Nostalgia",
        a:"Future Nostalgia"

    },
    {
        tituloAlbum:"Destinología",
        img:"css/imgmati/bionica album.jpg",
        alt:"Destinología",
        a:"Destinología"
    },
    {
        tituloAlbum:"Jessico",
        img:"css/imgmati/babasonicos album.jpg",
        alt:"Jessico",
        a:"Jessico"
    }
];
let resultadoAlbums = document.querySelector("#resultadoAlbums");

albums.forEach((item)=>{
    resultadoAlbums.innerHTML+=`
    <div class="lista" data-title="${item.tituloAlbum}" data-type="album">
    <img src="${item.img}" alt="${item.alt}" width="150">
        <a href="">${item.a}
        </a>

        <a href="">
            <i class="fas fa-star"></i>
        </a>
</div>
    `;
});
let tipo =1;
function cambioDeSeleccionador(){
    tipo = document.querySelector("#tipoBusqueda").value;
};
let buscador = document.querySelector("#busqueda");
buscador.addEventListener("keyup", () => {
    // alert(tipo);
    // 1.-guardar el valor del buscador
    let valor = buscador.value.toLowerCase();
    // 2.-filtrar canciones por título
    let cancionesFiltradas = canciones.filter(cancion => cancion.tituloCancion.toLowerCase().indexOf(valor)>-1);
    
    // 3.-filtrar albums por título
    let albumsFiltrados = albums.filter(album => album.tituloAlbum.toLowerCase().indexOf(valor)>-1);

    // 4.-limpiar resultados
    resultadoCanciones.innerHTML = "";
    resultadoAlbums.innerHTML = "";

    if(tipo == 3){
        // canciones originales
        canciones.forEach((item)=>{
            resultadoCanciones.innerHTML+=`<div class="lista" data-title="${item.tituloCancion}" data-type="cancion">
                                                <img src="${item.fotoCancion}" alt="${item.cancion}" width="150">
                                                <a href="">${item.tituloCancion}</a>
                                                
                                                <a href=""><i class="fas fa-star"></i></a>
                                            </div>`;
        });
        // 6.-llenar resultados con los albums filtrados
        albumsFiltrados.forEach((item) => {
            resultadoAlbums.innerHTML += `
                <div class="lista" data-title="${item.tituloAlbum}" data-type="album">
                    <img src="${item.img}" alt="${item.alt}" width="150">
                    <a href="">${item.a}</a>
                    <a href=""><i class="fas fa-star"></i></a>
                </div>`;
        });
    }else if(tipo == 2){
        // albums originales
        albums.forEach((item)=>{
            resultadoAlbums.innerHTML+=`
            <div class="lista" data-title="${item.tituloAlbum}" data-type="album">
            <img src="${item.img}" alt="${item.alt}" width="150">
                <a href="">${item.a}
                </a>
        
                <a href="">
                    <i class="fas fa-star"></i>
                </a>
        </div>
            `;
        });
        // 5.-llenar resultados con las canciones filtradas
        cancionesFiltradas.forEach((item) => {
            resultadoCanciones.innerHTML += `
                <div class="lista" data-title="${item.tituloCancion}" data-type="cancion">
                    <img src="${item.fotoCancion}" alt="${item.cancion}" width="150">
                    <a href="">${item.tituloCancion}</a>
                    <a href=""><i class="fas fa-star"></i></a>
                </div>`;
        });
    }else {
        // 5.-llenar resultados con las canciones filtradas
        cancionesFiltradas.forEach((item) => {
            resultadoCanciones.innerHTML += `
                <div class="lista" data-title="${item.tituloCancion}" data-type="cancion">
                    <img src="${item.fotoCancion}" alt="${item.cancion}" width="150">
                    <a href="">${item.tituloCancion}</a>
                    <a href=""><i class="fas fa-star"></i></a>
                </div>`;
        });
    
        // 6.-llenar resultados con los albums filtrados
        albumsFiltrados.forEach((item) => {
            resultadoAlbums.innerHTML += `
                <div class="lista" data-title="${item.tituloAlbum}" data-type="album">
                    <img src="${item.img}" alt="${item.alt}" width="150">
                    <a href="">${item.a}</a>
                    <a href=""><i class="fas fa-star"></i></a>
                </div>`;
        });
    }
});
