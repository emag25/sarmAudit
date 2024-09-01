// nosotros.js
// redireccion misma pagina
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// BOTONES DE NAVEGACION
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
// LOTTIES ANIMADOS
document.addEventListener('DOMContentLoaded', () => {
    lottie.loadAnimation({
        container: document.getElementById('lottie-container'), 
        renderer: 'svg', 
        loop: false, 
        autoplay:true,
        path: 'assets/img/lottie/about us.json'
    });
});


//CARRUSEL
let slideIndex = 1; // Para mantener el índice de la diapositiva actual

// Función para mostrar la diapositiva actual
function showSlide(index) {
    let slides = document.getElementsByClassName("team-member");
    let dots = document.getElementsByClassName("dot");
    
    // Validar índice de diapositiva
    if (index > slides.length) { slideIndex = 1; }
    if (index < 1) { slideIndex = slides.length; }

    // Desplazar la vista para mostrar las diapositivas actuales
    const slideWidth = slides[0].clientWidth; // Ancho de una diapositiva
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    
    // Configurar la transformación del carrusel
    if (window.innerWidth < 768) {
        // En pantallas pequeñas, solo se muestra una diapositiva a la vez
        carouselWrapper.style.transform = `translateX(-${(slideIndex - 1) * slideWidth}px)`;
    } else {
        // En pantallas grandes, mostrar tres diapositivas a la vez
        carouselWrapper.style.transform = `translateX(-${(slideIndex - 1) * (slideWidth / 3)}px)`;
    }

    // Eliminar la clase activa de todos los puntos
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar el punto activo
    dots[slideIndex - 1].className += " active";
}

// Funciones para cambiar la diapositiva
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// Función para mostrar una diapositiva específica
function currentSlide(n) {
    showSlide(n);
}

// Configurar el carrusel al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex); // Mostrar la primera diapositiva por defecto
});

// Añadir eventos a los botones de navegación
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Añadir un listener para manejar el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    showSlide(slideIndex); // Ajustar la vista del carrusel al cambiar el tamaño de la ventana
});
