// Función para manejar el evento de cambio de tamaño de la ventana
function handleResize() {
    // Seleccionar todos los elementos .nov-column dentro de #nov-item
    const elements = document.querySelectorAll('#nov-item .nov-column');
    
    elements.forEach(element => {
        // Verificar el ancho de la ventana para cada elemento
        if (window.innerWidth <= 768) {
            // Si es menor o igual a 768 píxeles, quitar la clase 'd-flex'
            element.classList.remove('d-flex');
        } else {
            // Si es mayor que 768 píxeles, agregar la clase 'd-flex'
            element.classList.add('d-flex');
        }
    });
}

// Verificar si el elemento con ID 'nov-item' está presente
const novItem = document.getElementById('nov-item');
if (novItem) {
    // Agregar un event listener para el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);
    
    // Llamar a la función handleResize inicialmente para que se aplique el estado correcto al cargar la página
    handleResize();
}
