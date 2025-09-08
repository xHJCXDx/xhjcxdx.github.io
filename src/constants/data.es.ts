import { User, Zap, Briefcase, Send, Linkedin, Github, Code, Play } from 'lucide-react';
import type { NavItem, SkillCategory, Project, ContactMethod } from '@/types';

export const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'INICIO', icon: Play },
    { id: 'about', label: 'SOBRE MÍ', icon: User },
    { id: 'skills', label: 'HABILIDADES', icon: Zap },
    { id: 'projects', label: 'PROYECTOS', icon: Briefcase },
    { id: 'contact', label: 'CONTACTO', icon: Send }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "PLATAFORMA",
        skills: ["Docker", "MongoDB"],
        color: "red"
    },
    {
        title: "FRAMEWORKS Y LIBRERÍAS",
        skills: ["React", "React Native", "Tailwind "],
        color: "pink"
    },
    {
        title: "IDE",
        skills: ["Android Studio","Visual Studio Code","IntelliJ IDEA"],
        color: "orange"
    },
    {
        title: "FRONTEND",
        skills: ["HTML", "CSS", "JavaScript"],
        color: "cyan"
    },
    {
        title: "BACKEND", 
        skills: ["GO", "Python", "SQL", "MQL", "Java","TypeScript"],
        color: "purple"
    }
];

export const PROJECTS: Project[] = [
    {
        title: "CPhysics",
        tech: "Python",
        description: "Herramienta de escritorio para Física Computacional",
        status: "COMPLETADO",
        longDescription:`CPhysics es una aplicación de escritorio desarrollada en Python y PySide6, diseñada para resolver problemas de física computacional. La herramienta ofrece una interfaz gráfica intuitiva que permite a los usuarios realizar cálculos y visualizar datos en diversas áreas de la física, incluyendo cinemática, dinámica, termodinámica, ondas y electromagnetismo.\nLa arquitectura modular del proyecto facilita la simulación interactiva y el análisis de resultados a través de gráficos generados con bibliotecas populares como Matplotlib y Seaborn. Esto convierte a CPhysics en un excelente recurso para estudiantes y entusiastas.`,
        images: [
            "/projects/cphysics_1.png"
        ],
        githubUrl: "https://github.com/xHJCXDx/CPhysics.git"
    } 
];

export const CONTACT_METHODS: ContactMethod[] = [
    {
        href: "https://www.linkedin.com/in/hiro-cruz-4737902ba/",
        icon: Linkedin,
        title: "LINKEDIN",
        subtitle: "Hiro",
        color: "blue"
    },
    {
        href: "https://github.com/xHJCXDx",
        icon: Github,
        title: "GITHUB",
        subtitle: "xHJCXDx",
        color: "cyan"
    },
    {
        href: "https://app.daily.dev/xhjcxdx",
        icon: Code,
        title: "Daily.dev",
        subtitle: "@xhjcxdx",
        color: "purple"
    }
];

export const HOME_TEXTS = {
    name: "Hiro",
    title: "DESARROLLADOR",
    tech: [
        { name: "REACT", color: "purple" },
        { name: "JAVA", color: "cyan" },
        { name: "PYTHON", color: "yellow" },
    ],
    quote: "> La belleza de la simplicidad",
};

export const ABOUT_TEXTS = {
    title: "SOBRE MÍ",
    description: [
        "> Estudiante Técnico en Programación.",
        "> Programador Fullstack. Enfocado más en el backend.",
        "> Aportando mi granito de arena a este mundo lleno de retos.",
    ],
    stats: [
        { value: "6", label: "PROYECTOS", color: "cyan" },
        { value: "2", label: "AÑOS", color: "purple" },
        { value: "240+", label: "APORTES", color: "cyan" },
        { value: "6", label: "LENGUAJES", color: "purple" },
    ]
};

export const SKILLS_TEXTS = {
    title: "HABILIDADES"
};

export const PROJECTS_TEXTS = {
    title: "PROYECTOS",
    seeProject: "VER PROYECTO"
};

export const CONTACT_TEXTS = {
    title: "CONTACTO",
    quotes: [
        {
            text: "> ¿Tienes algo en mente? ",
            highlight: "Creemos juntos."
        },
        {
            text: "> ¿Atravesando problemas? ",
            highlight: "Yo los resolveré por ti."
        },
        {
            text: "> ¿Necesitas una mano? ",
            highlight: "Te daré dos."
        }
    ],
    collaboration: {
        text: "LISTO PARA ",
        highlight: "COLABORAR?"
    },
    startProject: "INICIAR PROYECTO",
    form: {
        name: "NOMBRE:",
        email: "EMAIL:",
        message: "MENSAJE:",
        cancel: "CANCELAR",
        send: "ENVIAR MENSAJE",
        sending: "Enviando....",
        success: "Formulario Enviado Exitosamente",
        error: "Ocurrió un error al enviar el formulario."
    }
};

export const PROJECT_MODAL_TEXTS = {
    screenshots: "Capturas de Pantalla",
    technologies: "Tecnologías",
    liveDemo: "VER DEMO EN VIVO",
    viewCode: "VER CÓDIGO"
};

export const NAVBAR_TEXTS = {
    logo: "xHJCXDx"
};

export const FOOTER_TEXTS = {
    copyright: "© 2025 xHJCXDx Developer. Todos los derechos reservados."
};
