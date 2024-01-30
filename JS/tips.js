const tipsContent = document.getElementById("tipsContent");

const pedirTips = async () => {
    try {
        const response = await fetch("../JSON/tips.json");
        const tips = await response.json();

        tips.forEach((tip) => {
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
    } catch (error) {
        console.error("Hubo un error", error)
    }
}

pedirTips();

