const buttonTacc = document.getElementById("buttonTacc");
const allRecipesButton = document.getElementById("allRecipes");
const recetario = document.getElementById("recetarioId");

const recetas = [

    {
        id: 19,
        name: "Pan integral",
        ingredientes: "½ kg de harina de trigo integral. 10 gramos de levadura seca de panadería. 400ml de agua tibia",
        elaboracion: "Mezcla en un bol la harina integral de trigo con la levadura seca de panadería y una cucharada de sal. Si te gusta, puedes añadir en este momento algunas semillas. Agrega el agua tibia poco a poco a los ingredientes secos, hasta formar una masa homogénea. No es necesario que amases mucho. Deja levar hasta que duplique su volumen. Lleva al horno (precalentado a 180°C) durante 45 minutos aproximadamente.",
        img: "https://images.unsplash.com/photo-1679224105686-af8294e7e94d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    
    {
        id: 18,
        name: "Albóndigas Veganas (Sin TACC)",
        ingredientes: "Un atado de espinaca. Un brócoli. 200g de harina de garbanzos. Sal. Pimienta.  ",
        elaboracion: "Para preparar estas albóndigas vegetales, comienza procesando espinacas y brócoli crudos. En un recipiente, mezcla este procesado con harina de garbanzos hasta lograr una masa homogénea. Sazona con sal y pimienta al gusto y forma albóndigas del tamaño deseado. Lleva al horno precalentado hasta que estén doradas por todos lados. Sirve con salsa de tomate o la guarnición de tu elección.",
        img: "../recursos/albondigas-espinaca.jpeg",
        detalle: "sin TACC",

    },

    {
        id: 17,
        name: "Hamburguesas de legumbres (Sin TACC)",
        ingredientes: "Una taza/lata de legumbres cocidas. Dos dientes de ajo hervidos. Media taza de Zanahoria rallada bien finita. Sal. Condimentos: imentón ahumado, curry, cilantro, ajo en polvo, el que te guste.",
        elaboracion: "Si usan legumbres secas, primero hay que remojarlas 24hs antes, y luego hervirlas. Procesar las legumbres enteras con el ajo pelado por 10 minutos hasta que quede una pasta como un paté. Dejar enfriar para que tome consistencia. Lavar, pelar y rallar en el filo más finito la zanahoria. Incorporar la ralladura mezclando bien al puré de legumbre. Incorporar ahora los condimentos y la sal. Lo ideal es utilizar un molde de hamburguesas, no olvidarse de utilizar separadores plásticos para que no se pegue. Si no tenés el molde podes hacerlo con una bolsa de nylon y las manos). Estos medallones así armados se pueden freezar separados por film o bien ya mismo colocar sobre una fuente de horno aceitada y cocinar.",
        img: "../recursos/hamburguesas-legumbres.jpg",
        detalle: "sin TACC",
    },

    {
        id: 16,
        name: "Dip de remolacha (Sin TACC)",
        ingredientes: "Cuatro remolachas chicas. Uno o dos dientes de ajo. Un chorrito aceite de oliva /girasol. Garbanzos (opcional).",
        elaboracion: "Hervir las remolachas (junto con el ajo) hasta que estén blandas, dejar enfriar y cortarlas en cubos pequeños. Procesar la remolacha y el ajo con la pimmer. Agregar un chorrito de aceite de oliva. Procesar con pimmer hasta que quede una pasta, si queda demasiado espesa colocar un chorrito de agua. Opcional: agregar los garbanzos enteros, previamente hervidos, por encima. Conservar en heladera (hasta 5 días máximo).",
        img: "../recursos/dip-remolacha.jpg",
        detalle: "sin TACC",
    },

    {
        id: 15,
        name: "Tomates rellenos (Sin TACC)",
        ingredientes: "Cuatro tomates grandes. Media taza de arroz integral (opcional a reemplazar con quinoa). Una lata de atún. Queso crema descremado. Zanahoria rallada (opcional).",
        elaboracion: "Lavar y calar el centro de 4 tomates grandes reservando su pulpa. Hervir ½ taza de arroz integral o quinoa. Mezclar en frío el arroz con 1 lata de atún y 3 cucharadas de queso blanco descremado (opcional podes agregarle zanahoria rallada). Rellenar los tomates y refrigerar hasta su consumo.",
        img: "../recursos/tomates-rellenos.jpg",
        detalle: "sin TACC",
    },

    {
        id: 14,
        name: "Milanesas de Zucchini o Berenjena",
        ingredientes: "Un zucchini o berenjena grande y ancho. Un huevo. Pan rallado. 30 g de queso descremado. Sal. Pimienta. Provenzal.",
        elaboracion: "Lavar y cortar rodajas de zucchini o berenjena a lo largo (de ancho aproximado 1cm). Batir el huevo, salpimentar y agregarle provenzal a gusto. (Si tienen tiempo para dejar las rodajas de zucchini o berenjea en el huevo durante una hora o más sería ideal, para que tome más sabor, sino también pueden prepararlas en el momento). Pasar el zucchini por el huevo batido y luego apanar. Cocinar al horno vuelta y vuelta. Una vez que esté tierno por dentro y dorado por fuera agregar el queso encima y calentar hasta gratinarlo.",
        img: "../recursos/milanesas-zucchini.jpg",
    },

    {
        id: 13,
        name: "Crackers de semillas",
        ingredientes: "Una taza y media de avena fina. Dos cucharadas de semillas de lino. Dos cucharadas de semillas de girasol. Dos cucharadas de semillas de chía. Agua cantidad suficiente. Sal a gusto.",
        elaboracion: "Mezclar todos los ingredientes secos. Agregar agua de a poco formando una masa semi líquida. Sobre una fuente cubierta con papel manteca desparramar la mezcla y aplastar con espátula. Hornear hasta que dore. Retirar y cortar.",
        img: "../recursos/crakers-semillas.jpg",

    },

    {
        id: 12,
        name: "Budín integral (Dos budines)",
        ingredientes: "Dos huevos. 3/4 taza de azúcar mascabo. Una taza de harina integral. Media taza de avena instantanea. 3/4 taza de aceite. Una cucharada de Canela. Una cucharada de esencia de vainilla. Polvo para hornear. Leche. Opcional: avellanas, nueces, pasas de uva, almendars.",
        elaboracion: "Colocar los huevos en un bol con el azúcar mascabo, batir con un tenedor. Cuando esté bien aireado, agregar ½ taza de harina integral y ½ de avena y seguir batiendo. Cuando esté integrado, sumar el aceite y seguir batiendo. Ahora sumamos la canela, la esencia de vainilla y los frutos secos (si querés). Una vez que mezclamos bien, agregamos el resto de la harina y el polvo de hornear, y un chorro de leche a ojo para que la mezcla quede menos densa. Volcar la preparación en 2 moldes chicos y llevar 30 minutos al horno a 180°",
        img: "../recursos/budin-integral.jpg",

    },

    {
        id: 11,
        name: "Calabaza rellena (Sin TACC)",
        ingredientes: "Medio zapallo anco. Medio zapallito. Una cebolla. Medio morrón. 30g de quedo descremado.",
        elaboracion: "Hervir el zapallo y luego retirar las semillas. Calar un poco en el centro con una cuchara haciendo espacio para el relleno. Cortar en cubos el zapallito, la cebolla y el morrón, y saltear todo junto. Mesclar todo con el queso y colocar todo en el hueco del anco. Cocinar en el horno medio hasta gratinar el queso.",
        img: "../recursos/zapallo-anco.jpg",
        detalle: "sin TACC",

    },

    {
        id: 10,
        name: "Merluza al horno (Sin TACC)",
        ingredientes: "Un filet de merluza. 100g de papa. Medio morrón. Media cebolla. Medio ajo. Aceite de oliva. Un limon.",
        elaboracion: "Cortar la papa, la cebola y el morrón en rodajas de medio centímetro. Colocarlas en un recipiente apto para horno, salpimentar y hornear 20 minutos a 180°. Luego agregar el filet de merluza sobre las verduras, salpimentarlo y cocinar durante otros 15/20 minutos. Aparte, en una sarten saltear medio ajo en rodajas hasta dorarlo levemente. Retirar del fuego y agregarle una cuchara de aceite de oliva y jugo de limon previamente exprimido. Calentar le mezcla un minuto más y utilizarla para sazonar el pescado al servirlo.",
        img: "../recursos/merluza-horno.png",
        detalle: "sin TACC",

    },

    {
        id: 9,
        name: "Zucchini al horno con queso (Sin TACC)",
        ingredientes: "Un zucchini grande o dos medianos. 30g de queso mantecoso descremado. Algunas hojas de albahaca. 100g de tomates cherry.",
        elaboracion: "Lavar y cortar rodajas de zucchini a los largo (medio dedo de espesor. Calentar una fuente en el horno con un poquito de aceite. Cocinar las rodajas al horno, dándolas vuelta cuando esten tiernas. Luego agregar el queso sobre el zucchini y arriba poner rodajas de tomates cherry. Esperar a que el queso gratine un poco, y agregar la albahaca al servir.",
        img: "../recursos/zucchini-horno.jpg",
        detalle: "sin TACC",

    },

    {
        id: 8,
        name: "Tortilla de verdura (Sin TACC)",
        ingredientes: "Elegir una verdura protegonista (Un Coliflor o un zapallito grande o una zanahoria mediana). Una cebolla mediana. Dos huevos ",
        elaboracion: "En el caso del coliflor, primero hay que hervirlo y luego cortalo en pedazos chiquitos. Si eligen zanahoria o zapallito, se lavan y se rallan en crudo. Aparte cortar la cebolla en tiras y saltearla. En un recipiente batir los dos huevos e incorporar la cebolla y la verdura protagonista elegida. Salpimentar y colocar la mezcla en un molde de vidrio sin aceite o en uno apto horno previamente aceitado. Hornear hasta que el huevo coagule. ",
        img: "../recursos/tortilla-verdura.jpg",
        detalle: "sin TACC",

    },

    {
        id: 7,
        name: "Brownie de Porotos (Sin TACC)",
        ingredientes: "Porotos negros. Harina de arroz. Cacao amargo. Aceite. Azúcar mascabo. Sal. Polvo de hornear. Extracto de vainilla. Nueces(opcional) ",
        elaboracion: "En un recipiente, mezclar: Tres tazas de porotos negros cocidos, 1/2 taza de harina de arroz, 3/4 taza de de cacar amargo, 1/2 taza de aceite, 2/3 taza de azúcar mascabo, 1/2 taza de agua, una pisca de sal, una cucharada de vainillin y dos cucharadas de polvo de hornear. Mezclar bien y agregar las nueces (opcional). Aceitar un molde y poner harina o cacao para que no se pegue el brownie. Esparcir la mezcla y llevar a horno bajo entre 45 y 60 minutos.",
        img: "../recursos/BrowniePorotos.jpeg",
        detalle: "sin TACC",
    },

    {
        id: 6,
        name: "Bastoncitos de acelga",
        ingredientes: "200g papa. 200g acelga. Medio ajo. Harina (la que tengas). Queso rallado. Sal. Pimienta. Rebozador. Una yema. ",
        elaboracion: "Cocinar la papa al horno, con cáscara. Pelarla y pisarla. Aparte, picar y saltear la acelga y ajo. Escurrir bien y mezclarlo con la papa. Agregar 3 cucharadas de queso rallado, una yema de huevo y 2 cucharadas de harina (la que tengas). Salpimentar y comprobar la consistencia de la mezcla (Agregar harina si está muy pegota). Fromar los bastoncitos y pasarlos por rebozador. Finalmente cocinar al horno hasta dorar por todos lados ",
        img: "../recursos/BastoncitosAcelga.jpg",
    },

    {
        id: 5,
        name: "Pizza de Espinaca (Sin TACC)",
        ingredientes: "20g harina de arroz. 15g levadura fresca. 100g de fécula de maíz. 50g de harina de maiz. 100g de fécula de mandioca. 80g de harina de arroz. Un atado de espinaca. Aceite. Sal. ",
        elaboracion: "Poner en un boul 20g de harina de arroz y 15g de levadura fresca. Incorporar un poquito de agua tibia y dejar reposar 15 minutos. Agregarle 100g de fécula de mandioca, 50g de harina de maíz, 100g de fécula de maíz y 80g de harina de arroz. Procesar el atado de espinaca cruda y agregar a la mezcla. Salar a gusto y poner una cuchara de aceite. Agregar el agua necesaria para formar la masa y dejar reposar 30min. Finalmente colocar la masa en la pizzera y llevar al horno a 200°. Una vez cocida, ponerle la salsa y el queso, y volver a llevar al horno hasta que este lista",
        img: "../recursos/PizzaEspinaca.jpeg",
        detalle: "sin TACC",
    },

    {
        id: 4,
        name: "Creps (Sin TACC)",
        ingredientes: "200g lentejas. Sal. Pimienta. Una cebolla chica. Medio morrón. Una zanahoria mediana. Un poco de Repollo  ",
        elaboracion: "Una noche antes dejar remojar la lentejas. Al otro día colar y agregar 60ml de agua. Salpimentar a gusto. Coinar la mezcla en un sarten precalentado. Para el relleno, saltear las verduras en el siguiente orden: cebolla, morrón y zanahoria rallada en hebras. Salpimentar y Agregar repollo fresco al final. ",
        img: "../recursos/Creps.jpeg",
        detalle: "sin TACC",
    },

    {
        id: 3,
        name: "Bastoncitos de acelga (Sin TACC)",
        ingredientes: "200g papa. 200g acelga. Medio ajo. Levadura nutricional. Fécula de mandioca. Sal. Pimienta. Rebozador ",
        elaboracion: "Cocinar la papa al horno, con cáscara. Pelarla y pisarla. Aparte, picar y saltear la acelga y ajo. Escurrir bien y mezclarlo con la papa. Agregar 3 cucharadas de la levadura y 3 cucharas de fécula de mandioca. Salpimentar y comprobar la consistencia de la mezcla (Agregar fécula si está muy pegota). Fromar los bastoncitos y pasarlos por rebozador. Finalmente cocinar al horno hasta dorar por todos lados ",
        img: "../recursos/BastoncitosTACC.jpeg",
        detalle: "sin TACC",
    },

    {
        id: 2,
        name: "Salsa de tomates frescos (Sin TACC)",
        ingredientes: "Cuatro tomates maduros. Una cebolla. Dos dientes de ajo. Aceite de oliva. Agua. Sal. Orégano.  ",
        elaboracion: "Cortar la cebolla en brunoise y, en una sarten, reahogar con una cucharada de aceite de oliva. Aparte, cortar los tomates en cubos y pelar los dos dientes de ajo. Colocar el tomate y el ajo en un recipiente, junto con una taza de agua, y mixear hasta que quede homogéneo. Volcar la preparación en la sarten con la cebolla y agregar una taza de agua. Poner sal a gusto y orégano, y hervir durante media hora a fuego medio.} ",
        img: "../recursos/salsa.jpg",
        detalle: "sin TACC",
    },

    {
        id: 1,
        name: "Dip de arvejas (Sin TACC)",
        ingredientes: "Una lata de arvejas. Aceite de oliva. Comino. Ajo molido. Pimentón.",
        elaboracion: " Escurrir las arvejas y disponer en un recipiente. Agregar una cucharada de aceite de oliva y procesar con pimmer (tarda un poco en hacerse pasta, paciencia). Si queda muy espeso agregar un chorrito agua. Agregar los condimentos y mezclar.",
        img: "../recursos/dip-arvejas.jpg",
        detalle: "sin TACC",
    },

];


let recetasActuales = recetas.slice(); // Copia de las recetas originales

// Función para mostrar las recetas actuales en el recetario
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
    recetasActuales = recetas.filter(receta => receta.detalle === "sin TACC");
    displayCurrentRecipes();
};

// Función para mostrar todas las recetas nuevamente
const showAllRecipes = () => { 
    // Restaura todas las recetas
    recetasActuales = recetas.slice();
    displayCurrentRecipes();
};

// Agrega el evento de click al botón de filtro por "sin TACC"
buttonTacc.addEventListener("click", filterByTacc);

// Agrega el evento de click al botón para mostrar todas las recetas
allRecipesButton.addEventListener("click", showAllRecipes);

// Mostrar todas las recetas al cargar la página
displayCurrentRecipes();













