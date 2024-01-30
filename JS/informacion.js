const archivos = document.getElementById("articulosId")

const articulosHTML = async () => {
    const response = await fetch("../JSON/informacion.json");
    const articulos = await response.json();

    const articulosHtmlArray = articulos.map((articulo) => `
    <h2 class="titulo-articulo">${articulo.name}</h2>
    <div class="articulo-card">
        <img src="${articulo.img}" class="img-articulo">
        <p class="informacion-articulo">${articulo.informacion}</p>
    </div>
`);

    archivos.innerHTML = articulosHtmlArray.join('');

};

articulosHTML();