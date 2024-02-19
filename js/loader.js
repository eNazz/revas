document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor del loader
    var loaderContainer = document.getElementById("loader");
    
    // Mostrar el loader y el fondo opaco
    loaderContainer.style.display = "flex";

    // Esperar 3 segundos y luego ocultar el loader y el fondo opaco
    setTimeout(function() {
        loaderContainer.style.display = "none";
    }, 1000); // Milisegundos
});
