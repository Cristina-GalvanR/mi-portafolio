const PROYECTOS = [
    {
        id: 1,
        titulo: "E-Commerce Pastel UI",
        descripcion: "Plataforma de comercio electrónico con carrito dinámico e interfaz reactiva adaptada a tonos pastel.",
        tecnologias: ["React", "TypeScript", "Tailwind"],
        imagen: "img/proyecto1.jpg", 
        demo: "https://tu-demo.com", 
        codigo: "https://github.com"
    },
    {
        id: 2,
        titulo: "Microservicios REST API",
        descripcion: "Infraestructura backend segura con arquitectura desacoplada y tokens cifrados de acceso.",
        tecnologias: ["Node.js", "Express", "MongoDB"],
        imagen: "img/proyecto2.jpg",
        demo: null, 
        codigo: "https://github.com"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('carousel-projects-container');
    const themeToggle = document.getElementById('theme-toggle');


    // Control de Persistencia del Tema Fijo Derecho
    const temaGuardado = localStorage.getItem('theme') || 'theme-light';
    document.body.className = temaGuardado;
    actualizarIconoTema(temaGuardado);

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('theme-light')) {
            document.body.className = 'theme-dark';
            localStorage.setItem('theme', 'theme-dark');
            actualizarIconoTema('theme-dark');
        } else {
            document.body.className = 'theme-light';
            localStorage.setItem('theme', 'theme-light');
            actualizarIconoTema('theme-light');
        }
    });

    function actualizarIconoTema(tema) {
        const icono = themeToggle.querySelector('i');
        if (tema === 'theme-light') {
            icono.className = 'bi bi-moon-stars-fill';
        } else {
            icono.className = 'bi bi-sun-fill';
        }
    }

    renderizarCarrusel();
});
const formularioContacto = document.getElementById('interactive-form');

formularioContacto.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita que la página se recargue

    // Obtener los valores que escribió el usuario
    const nombre = document.getElementById('name').value;
    const correoUsuario = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;

    // Configurar los datos del correo
    const correoDestino = "galvancristinar@gmail.com";
    const asunto = encodeURIComponent(`Contacto Portafolio - ${nombre}`);
    
    // Estructurar el cuerpo del mensaje
    const cuerpo = encodeURIComponent(
        `Nombre: ${nombre}\n` +
        `Correo de contacto: ${correoUsuario}\n\n` +
        `Mensaje:\n${mensaje}`
    );

    // Abrir la aplicación de correo del usuario con los datos listos
    window.location.href = `mailto:${correoDestino}?subject=${asunto}&body=${cuerpo}`;
});
