// --- ESTRUCTURAS DE DATOS 

const experiencia = [
    {
        puesto: "Programadora - DBA Junior",
        empresa: "ARWEBS",
        periodo: "Ago 2022 - Ago 2025",
        tareas: [
            "Desarrollo de procesos de migración masiva de datos entre plataformas de aseguradoras y brokers.",
            "Automatización de transformación y carga de información utilizando PHP y SQL.",
            "Extracción, validación y control de integridad de datos críticos para procesos operativos.",
            "Generación de reportes y consultas complejas sobre bases de datos relacionales MySQL.",
            "Integración y consumo de APIs externas de aseguradoras para incorporación de datos al sistema.",
            "Normalización y organización de estructuras de datos para mejorar consistencia y trazabilidad."
        ]
    }
];

const educacion = [
    {
        titulo: "Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial",
        institucion: "Instituto Superior Politécnico de Córdoba (ISPC)",
        estado: "En curso"
    },
    {
        titulo: "Diplomatura en Data Engineering",
        institucion: "Universidad Tecnológica Nacional (UTN BA)",
        estado: "2025"
    },
    {
        titulo: "Programadora",
        institucion: "Instituto Superior Politécnico de Córdoba (ISPC)",
        estado: "2023"
    }
];

const skills = [
    "SQL (MySQL)", "Python (Pandas / NumPy)", "ETL Pipelines", 
    "Data Migration", "APIs Integration", "PHP", "Git & GitHub", "JavaScript"
];

const proyectos = [
    {
        titulo: "Ecowear Data Analytics",
        descripcion: "Análisis estratégico de datos comerciales y operativos para optimización de métricas de negocio. Implementación de estructuras de datos orientadas a la toma de decisiones eficaces.",
        tags: ["Data Analytics", "Python", "SQL"],
        link: "https://github.com/nataleanahi/ecowear-data-analytics"
    },
    {
        titulo: "Matemática Aplicada: ¿No-Code o Desarrollo a Medida?",
        descripcion: "Modelado matemático y cálculo infinitesimal mediante funciones cuadráticas para determinar el punto de quiebre financiero en la adopción de software. Análisis predictivo de costos y límites aplicados al crecimiento de usuarios pyme.",
        tags: ["Análisis Marginal", "Modelado Predictivo", "Data Science"],
        link: "assets/matematica_aplicada.pdf" 
    },
    {
        titulo: "Smart Study Research",
        descripcion: "Proyecto de investigación orientado al análisis de hábitos de estudio y rendimiento académico mediante recolección, limpieza y exploración exhaustiva de datos con Python y Pandas.",
        tags: ["Python", "Pandas", "Exploratory Data Analysis"],
        link: "https://github.com/nataleanahi"
    }
];

const contactos = [
    { icono: "fa-regular fa-envelope", texto: "nataleanahi@gmail.com", url: "https://mail.google.com/mail/?view=cm&fs=1&to=nataleanahi@gmail.com" },
    { icono: "fa-brands fa-linkedin", texto: "LinkedIn", url: "https://linkedin.com/in/anahi-natale" },
    { icono: "fa-brands fa-github", texto: "GitHub", url: "https://github.com/nataleanahi" }
];
// --- RENDERIZACIÓN 

function inicializarPortfolio() {
    // Skills
    const contenedorSkills = document.getElementById('contenedor-skills');
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-item-badge';
        span.textContent = skill;
        contenedorSkills.appendChild(span);
    });

    // Proyectos 
    const contenedorProy = document.getElementById('contenedor-proyectos');
    proyectos.forEach(proy => {
        const card = document.createElement('div');
        card.className = 'proyecto-card';
        
        const tagsHtml = proy.tags.map(t => `<span class="card-tag">${t}</span>`).join('');
        const linkHtml = proy.link !== '#' 
            ? `<a href="${proy.link}" target="_blank" class="card-link">Explorar Proyecto <i class="fa-solid fa-arrow-right"></i></a>`
            : `<span class="card-link-disabled">Caso de Estudio Analítico</span>`;

        card.innerHTML = `
            <div class="card-contenido">
                <h4>${proy.titulo}</h4>
                <p>${proy.descripcion}</p>
                <div class="card-tags-wrapper">${tagsHtml}</div>
            </div>
            <div class="card-footer-action">
                ${linkHtml}
            </div>
        `;
        contenedorProy.appendChild(card);
    });

    // Experiencia
    const contenedorExp = document.getElementById('contenedor-experiencia');
    experiencia.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <span class="timeline-date">${exp.periodo}</span>
            <h4>${exp.puesto}</h4>
            <h5>${exp.empresa}</h5>
            <ul class="timeline-tasks">
                ${exp.tareas.map(t => `<li>${t}</li>`).join('')}
            </ul>
        `;
        contenedorExp.appendChild(item);
    });

    // Educación
    const contenedorEdu = document.getElementById('contenedor-educacion');
    educacion.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <span class="timeline-date">${edu.estado}</span>
            <h4>${edu.titulo}</h4>
            <h5>${edu.institucion}</h5>
        `;
        contenedorEdu.appendChild(item);
    });

    // Redes 
    const contenedorContacto = document.getElementById('enlaces-contacto');
    contactos.forEach(c => {
        const a = document.createElement('a');
        a.href = c.url;
        
        if (!c.url.startsWith('mailto:')) {
            a.target = "_blank";
        }
        
        a.innerHTML = `<i class="${c.icono}"></i> ${c.texto}`;
        contenedorContacto.appendChild(a);
    });
}

document.addEventListener('DOMContentLoaded', inicializarPortfolio);