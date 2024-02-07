document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalAgua");
    const acceptedButton = document.getElementById("acceptedButton");
    const rejectdButton = document.getElementById("rejectdButton");

    // Ocultar el modal iniciamente al cargar la pagina
    modal.style.display = "none";

    // Obetener informacion del localStorage
    const modalInfo = JSON.parse(localStorage.getItem("modalInfo")) || {};
    const { ultimaVez, cerrado } = modalInfo;

    // //Calcular el tiempo que paso desde que se mostro por ultima vez
    const tiempoActual = new Date().getTime();
    const tiempoTranscurrido = tiempoActual - (ultimaVez || 0);

    // Ver si pasaron 3 horas. En caso de no pasar las 3 horas, el modal no va a volver a abrirse para no molestar al usuario todo el tiempo que vuelva a la pagina principal
    //
    const mostrarModal = !cerrado || tiempoTranscurrido >= 3 * 60 * 60 * 1000;

    if (mostrarModal) {
        //  mostrar el modal despues de 10 segundos de entrar a la pagina

        setTimeout(() => {
            modal.style.display = "block";
        }, 10000);
    }

    // al presionar el boton el modal se cierra y actualiza el localStorage
    acceptedButton.addEventListener("click", () => {
        modal.style.display = "none";
        localStorage.setItem("modalInfo", JSON.stringify({ ultimaVez: tiempoActual, cerrado: true }));
        console.log("Información guardada en localStorage:", modalInfo);
        Swal.fire({
            title: 'Grandioso!',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#B2DA53',
            imageUrl: "../recursos/gatito.gif",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Custom image",
        });
    });

    rejectdButton.addEventListener("click", () => {
        modal.style.display = "none";
        localStorage.setItem("modalInfo", JSON.stringify({ultimaVez: tiempoActual, cerrado: true}));
        console.log("Información guardada en localStorage:", modalInfo);
        Swal.fire({
            title: '¿Qué estás esperando?',
            confirmButtonText: 'Yendo',
            confirmButtonColor: '#B2DA53',
            imageUrl: "../recursos/gatito2.gif",
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: "Custom image"
        });
    })
});
