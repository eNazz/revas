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