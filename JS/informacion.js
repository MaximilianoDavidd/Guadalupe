const archivos = document.getElementById("articulosId")

const articulos = [

    {
        id: 12,
        name: "¿Es saludable comer todos los dias lo mismo?",
        informacion: "¿Sabías que ademas de grasas, proteinas e hidratos el cuerpo necesita 13 vitaminas y 14 minerales para poder llevar a cabo todas sus funciones vitales? Sin mencionar otros compuestos que no son considerados ni vitaminas ni minerales pero que han demostrado tener efectos muy buenos sobre la salud (como por ej el resveratrol de las o la alicina del ajo). Si todos los dias comemos los mismos vegetales, frutas, carnes dificilmente estemos incorporando todos los compuestos que el cuerpo necesita para funcionar al 100%. ",
        img: "https://media.istockphoto.com/id/500275911/es/foto/adolescente-de-comer-saludable-el-almuerzo-con-amigos-en-la-escuela-comedor.jpg?s=1024x1024&w=is&k=20&c=nDVY887dg6RSI72QL_fhh_9T-y1qcCDLBpx0a56y9Dk=",
    },

    {
        id: 11,
        name: "¿Por qué debemos beber agua durante todo el día?",
        informacion: "El agua es necesaria para: regular la temperatura corporal. Mantener las células limpias (lo cual favorece que funcionen mejor). Lubricar las articulaciones. Facilitar la eliminación de sustancias tóxicas tanto ingeridas como producidas por el propio organismo. Contribuye a una buena circulación venosa que permite recoger los desechos celulares y llevarlos hasta los riñones para su eliminación. Cuando regamos con mucha agua una planta podemos ver cómo enseguida la misma sale por la base, la tierra no la puede retener y la planta no la puede aprovechar, lo mismo le sucede a nuestro cuerpo. Como no podemos almacenarla, orinamos. Por eso, para no forzar a los riñones, es mejor beber durante todo el dia asi aseguramos un aporte constante de agua para cada celula, tejido, organo y evitamos forzar a nuestros riñones a trabajar de más.",
        img: "https://media.istockphoto.com/id/1487361054/es/foto/pareja-mayor-fitness-y-botella-de-agua-con-sonrisa-para-hidratarse-o-tener-sed-despu%C3%A9s-del.jpg?s=612x612&w=0&k=20&c=fR7hDm0hQEW97-d_gOwENmMza2MxngoG2NwPRoFumvA=",
    },


    {
        id: 10,
        name: "¿Sabías que el 50-70 % del peso corporal corresponde al agua?",
        informacion: "Así como lo lees! No son músculos ni esqueleto, es AGUA. El 95% del peso del cerebro es agua. El 85% de la sangre es agua. El 90% de los pulmones es agua. Cada célula de nuestro cuerpo contiene alrededor de un 70-80% de agua. Por eso mismo es que siempre vamos a ser tan insistentes con tomar agua.",
        img: "https://us.123rf.com/450wm/viktoriiabondar/viktoriiabondar2307/viktoriiabondar230700058/208169988-silhouette-human-body-filled-with-blue-water-healthy-lifestyle-or-wellness-concept-water-balance-ai.jpg?ver=6",
    },

    {
        id: 9,
        name: "Des-ayunar",
        informacion: "Sabías que la primera comida que ingerimos luego de un largo periodo de ayuno tiene un gran impacto en el cuerpo? No tiene que ser inmediatamente cuando despiertas, puede ser unas horas después y aún así ser beneficiosa. Comiendo alimentos nutritivos y de calidad, podemos activar procesos metabólicos beneficiosos para la salud. Un buen desayuno provee toda la energía necesaria para las actividades que hacemos durante la mañana y evita el picoteo. Además, el cerebro necesita combustible para funcionar; con esta ingesta, logramos comenzar el día con atención plena. Cómo empezamos el día determina en gran parte cómo lo seguiremos, nada mejor que arrancar con un rico desayuno saludable!",
        img: "https://img.freepik.com/fotos-premium/joven-mujer-asiatica-desayunando-fruta-su-cocina_296537-1426.jpg?w=740",
    },



    {
        id: 8,
        name: "¿Beber infusiones cuenta como beber agua?",
        informacion: "Cuando consumimos infusiones, caldos o bebidas, no solo estamos ingiriendo agua; lo que les proporciona sabor y color debe ser absorbido en el aparato digestivo y luego eliminado a través de la orina. Ambos procesos gastan agua. Por lo tanto, no queda agua libre para otras funciones corporales. Por esta razón, siempre se recomienda beber agua sola. En el cuerpo, el agua es esencial para regular la temperatura corporal, mantener las células limpias, lubricar las articulaciones y facilitar la eliminación de sustancias tóxicas. Además, contribuye a una buena circulación venosa, permitiendo recoger los desechos celulares y transportarlos hasta los riñones para su eliminación.",
        img: "../recursos/infusion-tips.webp",

    }, 

    {
        id: 7,
        name: "¿Qué aportan los dulces?",
        informacion: "Azúcar, mermelada, dulces compactos y golosinas. Aportan principalmente hidratos de carbono, su consumo en exceso es perjudicial para la salud.",
        img: "https://www.elespectador.com/resizer/f1HapdslF-bUiBSm91QjXckl5Ww=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/C7DURJTNWJEB7MYY67UJVAJEEU.jpg",
    },

    {
        id: 6,
        name: "¿Qué aportan los limentos grasos?",
        informacion: "Palta, aceituna, aceite aportan grasas saludables, por el contrario alimentos como manteca, crema, frituras, aderezos son fuente de grasas nada saludables.",
        img: "https://media.istockphoto.com/id/1469221753/es/foto/aguacate-aceitunas-y-aceite.jpg?s=1024x1024&w=is&k=20&c=c-ND_rI3TbbbsXQ4qeaqfFZbxU6PXbpwJ91nyB0rPms=",
    },

    {
        id: 5,
        name: "¿Qué aportan los cereales, papa, choclo, batata?",
        informacion: "Aportan hidratos de carbono, si los comemos con cáscara o sus versiones integrales son fuente de fibra y algunos minerales. En este grupo se incluye: Avena, Amaranto, Arroz, Cebada, Centeno, Maíz, Mijo, Sorgo, Quinoa, Trigo asi como sus harinas y productos derivados: panes, pastas, galletitas, masas, budines, etc.",
        img: "https://vitabienestar.net/wp-content/uploads/2023/09/tuberculos-y-cereales.jpg",
    },

    {
        id: 4,
        name: "¿Qué aportan las legumbres, frutos secos y semillas?",
        informacion: "Aportan  proteínas y minerales como Hierro, Calcio, Zinc, Potasio y Fosforo. Las legumbres en grano ademas aportan fibra e hidratos de carbono. Los frutos secos y semillas son fuente de grasas saludables.",
        img: "https://static.wixstatic.com/media/7d0865_7b79ab5e9a8442fbad9291d98219287c~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7d0865_7b79ab5e9a8442fbad9291d98219287c~mv2.jpg",
    },

    {
        id: 3,
        name: "¿Qué aportan la leche, yogurt y quesos?",
        informacion: "Aportan proteínas de excelente calidad, grasas, colesterol y Calcio. Como sus grasas son saturadas siempre conviene preferir las versiones descremadas.",
        img: "https://media.istockphoto.com/id/168276943/es/foto/productos-l%C3%A1cteos-de-leche-quesos-manteca-yogur-y-ricota.jpg?s=1024x1024&w=is&k=20&c=6Y42s858OZdDspe8VFBWeJlG3KIr3EkjzUDMCMLfgL4=",
    },

    {
        id: 2,
        name: "¿Qué aportan las Carnes y el huevo?",
        informacion: "Aportan proteínas de excelente calidad, grasas, colesterol y otros nutrientes como Hierro, Zinc, Vit A, B12. A diferencia de las carnes que aportan grasas saturadas (malas para la salud) los pescados son fuente de grasas buenas como el omega 3.",
        img: "https://media.istockphoto.com/id/1134390409/es/foto/alimentos-ricos-en-prote%C3%ADna-animal.jpg?s=612x612&w=0&k=20&c=3tpfdErfU2iyXmC-edTlYQ4NQIgFGdoWLrHw5ntnPOU=",
    },

    {
        id: 1,
        name: "¿Qué aportan las frutas y verduras?",
        informacion: "Aportan hidratos de carbono y fibra, si los consumimos crudos son una excelente fuente de Vitamina C! Además son fuente de minerales como el Calcio, Magnesio, Selenio, Potasio y otras sustancias que tienen efectos buenos sobre la salud: polifenoles.",
        img: "https://www.cdc.gov/foodsafety/images/comms/features/GettyImages-1247930626-500px.jpg?_=00453",
    },
];

const articulosHTML = articulos.map((articulo) => `
    <h2 class="titulo-articulo">${articulo.name}</h2>
    <div class="articulo-card">
        <img src="${articulo.img}" class="img-articulo">
        <p class="informacion-articulo">${articulo.informacion}</p>
    </div>
`);

archivos.innerHTML = articulosHTML.join('');