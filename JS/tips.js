const tipsContent = document.getElementById("tipsContent");


const tips = [

    {
        id: 1,
        parrafo: "Planificar comidas",
        parrafo2: "¡La clave es PLANIFICAR tus comidas! Elige un día de la semana para hacerlo. Con planificar cada 7 días para empezar, está bien. Incluye alimentos/platos que te gusten, intercalados con otros que no tanto pero que sabes que te hacen bien. Elige 1 proteína y 3 o 4 verduras por plato (así no te aburres). Sabiendo qué vas a comer, es más fácil decidir qué comprar, te ahorras tiempo y tomas decisiones más rápidas en las compras. Dedica 1 o 2 horas de tu fin de semana a lavar, cocinar y congelar para toda la semana.",
        img: "../recursos/planificar-tips.webp",

    }, 

    {
        id: 2,
        parrafo: "Variedad de comidas",
        parrafo2: "Para empezar a sumar más variedad a tu alimentación, te dejo algunos tips: Que tu desayuno sea diferente a la merienda (por ejemplo, mate y fruta en el desayuno, y yogurt con copos en la merienda). Elige verduras de temporada, alternando platos crudos y cocidos (recuerda que en la cocción muchas vitaminas se pierden). Consume a diario diferentes proteínas; de esta forma, estarás incorporando no solo la proteína sino también otros nutrientes beneficiosos, como las grasas saludables del pescado, el fósforo del huevo o el potasio de las legumbres.",
        img: "../recursos/variado-tips.jpg",

    },

    {
        id: 3,
        parrafo: "A comer legumbres",
        parrafo2: "Las legumbres pueden generar gases, pero existen técnicas culinarias que ayudan a evitar esto. Además, el cuerpo se adapta tras su consumo regular, reduciendo la inflamación y distensión abdominal. Para quienes no están acostumbrados, se sugiere comenzar consumiendo harinas de legumbre en pequeñas cantidades, remojar los granos durante al menos 12 horas antes de cocinarlos y consumirlos recién cocidos, ya que su estructura es menos fermentable en comparación con la versión fría. Acompañar las legumbres con vegetales cocidos sin cáscara también. Se recomienda incorporarlas con frecuencia semanal para permitir que el cuerpo se acostumbre gradualmente.",
        img: "../recursos/legumbres-tips.jpg",

    }, 

    {
        id: 4,
        parrafo: "Infusiones",
        parrafo2: "Cuando consumimos infusiones, caldos o bebidas, no solo estamos ingiriendo agua; lo que les proporciona sabor y color debe ser absorbido en el aparato digestivo y luego eliminado a través de la orina. Ambos procesos gastan agua. Por lo tanto, no queda agua libre para otras funciones corporales. Por esta razón, siempre se recomienda beber agua sola. En el cuerpo, el agua es esencial para regular la temperatura corporal, mantener las células limpias, lubricar las articulaciones y facilitar la eliminación de sustancias tóxicas. Además, contribuye a una buena circulación venosa, permitiendo recoger los desechos celulares y transportarlos hasta los riñones para su eliminación.",
        img: "../recursos/infusion-tips.webp",

    }, 



]




tips.forEach((tip)=> {
    let content = document.createElement("div");
    content.innerHTML = `
    <div class= "tip-card">
    <img src="${tip.img}" alt="" class="img-tips">
    <div class="div-p">
    <p class="p-tips">${tip.parrafo}</p>
    <p class="p-tips2">${tip.parrafo2}</p>
    </div>
    </div>
    `;
    tipsContent.append(content);
    
});