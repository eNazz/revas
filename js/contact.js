window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
        document.querySelector('.container-cont').classList.replace('container-cont', 'mob-cont');
        document.querySelector('.contact-form').classList.replace('contact-form', 'mob-form');
        document.querySelector('.contact-map').classList.replace('contact-map', 'mob-map');
        document.querySelector('.bg-img').remove();
    } else {
        document.querySelector('.mob-cont').classList.replace('mob-cont', 'container-cont');
        document.querySelector('.mob-form').classList.replace('mob-form', 'contact-form');
        document.querySelector('.mob-map').classList.replace('mob-map', 'contact-map');
        var section = document.querySelector('#contactSection');
        var div = document.createElement('div');
        div.classList.add('bg-img');
        div.setAttribute('data-background', 'img/2.jpg');
        div.style.backgroundImage = "url('img/1900x1200_img_3.jpg')";
        section.appendChild(div);
    }
});


/* function borrarValor () {
    document.getElementById("nombre").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
} */
function borrarValor() {
    const formulario = document.getElementById("form");
    const campos = formulario.querySelectorAll("input, textarea");
    let todosCompletos = true;

    // Iterar sobre todos los campos del formulario
    campos.forEach(function (campo) {
        // Borrar el valor del campo
        //campo.value = "";

        // Verificar si el campo requerido está completo
        if (campo.hasAttribute("required") && !campo.value) {
            todosCompletos = false;
        }
    });

    // Si todos los campos requeridos están completos, borra los valores
    function recorro() {
        campos.forEach(function(campo) {
            campo.value = "";
        });
    }
    if (todosCompletos) {
        document.getElementById("texto-error").classList.remove("text-error")
        document.getElementById("texto-error").classList.add("text-success")
        document.getElementById("texto-error").textContent = "Formulario enviado correctamente."
        formulario
            .setAttribute(
                "action",
                "https://formsubmit.co/esteban.nazer@outlook.com"
            );
            setTimeout(recorro, 300);

    } else {
        
        document.getElementById("texto-error").classList.add("text-error")
        
    }
}