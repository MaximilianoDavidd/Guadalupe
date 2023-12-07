document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalAgua");
    const acceptedButton = document.getElementById("acceptedButton");
    const rejectdButton = document.getElementById("rejectdButton");

    // Ocultar el modal iniciamente al cargar la pagina
    modal.style.display = "none";

    //  mostrar el modal despues de 10 segundos de entrar a la pagina

    setTimeout(() => {
        modal.style.display = "block";
    }, 10000);

    // al presionar el boton el modal se cierra
    acceptedButton.addEventListener("click", () => {
        modal.style.display = "none";
        Swal.fire({
            title: 'Grandioso!',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#B2DA53',
            html: '<img src="../recursos/gatito.gif" style="width: 50px; height: 50px;">', // Agrega la ruta de tu gif y ajusta el tamaño según sea necesario
        });
    });
    rejectdButton.addEventListener("click", () => {
        modal.style.display = "none";
        Swal.fire({
            title: '¿Qué estás esperando?',
            confirmButtonText: 'Yendo',
            confirmButtonColor: '#B2DA53',
            html: '<img src="../recursos/gatito2.gif" style="width: 50px; height: 50px;">', // Agrega la ruta de tu gif y ajusta el tamaño según sea necesario
        });
    })
})
