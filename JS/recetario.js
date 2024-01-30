const recetario = document.getElementById("recetarioId");
const buttonTacc = document.getElementById("buttonTacc");
const allRecipesButton = document.getElementById("allRecipes");
let recetasActuales;

// funcion para realizar solicitud HTTP y llamar las recetas del archivo json

const getRecipes = async () => {
    try {
        const response = await fetch("../JSON/recetas.json");
        if (!response.ok) {
            throw new Error(`Se ha producido un error al realizar la solicitud. Código de error HTTP: ${response.status}. Verifica la conexión a Internet, asegúrate de que la URL sea correcta y vuelve a intentarlo.`);
        }
        const data = await response.json();
        recetasActuales = data;
        displayCurrentRecipes();
    } catch (error) {
        console.error("Hubo un problema al cargar las recetas. Por favor, intenta nuevamente más tarde.");
    }
};

//Funcion apra mostrar las recetas actuales

const displayCurrentRecipes = () => {
    recetario.innerHTML = ""; // Limpiar el contenido actual del recetario

    recetasActuales.forEach((receta) => {
        let content = document.createElement("div");
        content.innerHTML = `
        <img src="${receta.img}" class="img-receta">
        <h3 class="titulo-receta">${receta.name}</h3>
        <h4 class="ingredientes-titulo">Ingredientes:</h4>
        <p class="ingredientes-receta">${receta.ingredientes}</p>
        <h4 class="elaboracion-titulo">Elaboración:</h4>
        <p class="elaboracion-receta">${receta.elaboracion}</p>
        `;
        recetario.appendChild(content);
    });
};

// Función para filtrar recetas por "sin TACC"
const filterByTacc = () => {
    // Filtra las recetas que son "sin TACC"
    recetasActuales = recetasActuales.filter(receta => receta.detalle === "sin TACC");
    displayCurrentRecipes();
};

// Función para mostrar todas las recetas nuevamente
const showAllRecipes = () => {
    // Restaura todas las recetas
    getRecipes();
};

// Agrega el evento de click al botón de filtro por "sin TACC"
buttonTacc.addEventListener("click", filterByTacc);

// Agrega el evento de click al botón para mostrar todas las recetas
allRecipesButton.addEventListener("click", showAllRecipes);

// Mostrar todas las recetas al cargar la página
getRecipes();













