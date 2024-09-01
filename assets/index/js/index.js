// nosotros.js
//carrusel
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('servicesCarousel');
    let index = 0;

    function updateCarousel() {
        const cards = carousel.children;
        const totalCards = cards.length;
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            index = (index + 1) % totalCards;
        } else {
            index = (index + 2) % totalCards;
        }

        const cardWidth = cards[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    setInterval(updateCarousel, 3000); // Cambia cada 3 segundos

    window.addEventListener('resize', function() {
        const cards = carousel.children;
        const cardWidth = cards[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    });
});


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
        path: 'assets/img/lottie/index.json'
    });
});


