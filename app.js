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

    // Inyección de proyectos en el carrusel con la nueva Grid Asimétrica
    function renderizarCarrusel() {
        carouselContainer.innerHTML = '';

        PROYECTOS.forEach((proy, index) => {
            const isActive = index === 0 ? 'active' : '';
            const tagsHTML = proy.tecnologias.map(t => `<span class="tech-tag-sm">${t}</span>`).join('');
            const linkDemo = proy.demo ? `<a href="${proy.demo}" target="_blank" class="link-project me-3"><i class="bi bi-link-45deg"></i> Demo</a>` : '';
            
            const fallbackImg = `https://placeholder.com{encodeURIComponent(proy.titulo)}`;

            const slideHTML = `
                <div class="carousel-item ${isActive}" data-bs-interval="4000">
                    <article class="project-card-flat shadow-sm">
                        <div class="project-card-row">
                            <!-- Lado izquierdo: Imagen -->
                            <div class="img-wrapper-split">
                                <img src="${proy.imagen}" alt="${proy.titulo}" onerror="this.src='${fallbackImg}'" loading="lazy">
                            </div>
                            <!-- Lado derecho: Información del desarrollo -->
                            <div class="content-wrapper-split p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <h3 class="h5 fw-bold mb-2">${proy.titulo}</h3>
                                    <p class="text-muted-custom small mb-3">${proy.descripcion}</p>
                                </div>
                                <div>
                                    <div class="d-flex flex-wrap gap-1 mb-3">${tagsHTML}</div>
                                    <div class="pt-3 border-top-custom">
                                        ${linkDemo}
                                        <a href="${proy.codigo}" target="_blank" class="link-project">
                                            <i class="bi bi-github"></i> Código ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            `;
            carouselContainer.insertAdjacentHTML('beforeend', slideHTML);
        });
    }

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
