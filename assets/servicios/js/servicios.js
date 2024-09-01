// servicios.js
//cambio de seccion
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelector('.auditoria_externa').style.display = 'none';
    document.querySelector('.auditoria_interna').style.display = 'none';
    document.querySelector('.control_interno').style.display = 'none';

    // Mostrar la sección seleccionada
    document.querySelector('.' + seccion).style.display = 'block';

    // Eliminar la clase "active" de todos los botones
    var botones = document.querySelectorAll('.botones-intercambio button');
    botones.forEach(function(boton) {
        boton.classList.remove('active');
    });

    // Agregar la clase "active" al botón seleccionado
    document.querySelector('button[onclick="mostrarSeccion(\'' + seccion + '\')"]').classList.add('active');
}

// Mostrar la primera sección por defecto y activar el primer botón
document.addEventListener('DOMContentLoaded', function() {
    mostrarSeccion('auditoria_externa');
});

/*********************************************************/
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
        path: 'assets/img/lottie/services.json'
    });
});