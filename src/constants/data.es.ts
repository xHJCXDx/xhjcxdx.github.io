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
    skills: ["Android Studio", "Visual Studio Code", "IntelliJ IDEA"],
    color: "orange"
  },
  {
    title: "FRONTEND",
    skills: ["HTML", "CSS", "JavaScript"],
    color: "cyan"
  },
  {
    title: "BACKEND",
    skills: ["GO", "Python", "SQL", "MQL", "Java", "TypeScript"],
    color: "purple"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "CPhysics",
    tech: "Python",
    description: "Herramienta de escritorio para Física Computacional",
    status: "COMPLETADO",
    longDescription: `CPhysics es una aplicación de escritorio desarrollada en Python y PySide6, diseñada para resolver problemas de física computacional. La herramienta ofrece una interfaz gráfica intuitiva que permite a los usuarios realizar cálculos y visualizar datos en diversas áreas de la física, incluyendo cinemática, dinámica, termodinámica, ondas y electromagnetismo.\nLa arquitectura modular del proyecto facilita la simulación interactiva y el análisis de resultados a través de gráficos generados con bibliotecas populares como Matplotlib y Seaborn. Esto convierte a CPhysics en un excelente recurso para estudiantes y entusiastas.`,
    images: [
      "/projects/cphysics_1.png"
    ],
    githubUrl: "https://github.com/xHJCXDx/CPhysics.git"
  },
  {
    title: "Deleitarte",
    tech: "HTML - CSS - PHP",
    description: "Página de eventos de mediatarde",
    status: "EN DESARROLLO",
    longDescription: `Desarrollamos una solución web que combina funcionalidad esencial con una estética premium. Este proyecto surgió del reto de impulsar a una pyme de planificación de eventos al siguiente nivel competitivo. Con una navegación optimizada y un estilo visual contemporáneo, demostramos que la simplicidad bien ejecutada es la herramienta más poderosa para destacar en el mercado actual.`,
    images: [
      "/projects/deleitarte_1.png"
    ]
  },
  {
    title: "OSINT NSG",
    tech: "N8N - PostgreSQL - Docker",
    description: "Herramienta utilizada para recolectar, analizar y tomar decisiones basadas en información pública disponible legalmente",
    status: "EN DESARROLLO",
    longDescription: `Arquitectura automatizada que integra las APIs públicas de Twitter/X y Reddit con flujos de trabajo desarrollados en n8n, incorporando análisis de sentimiento mediante herramientas open-source (VADER y TextBlob), almacenamiento estructurado en PostgreSQL y generación automática de alertas operativas vía Slack y correo electrónico.

La solución diseñada permite la recopilación continua de menciones relevantes basadas en keywords predefinidos, aplicando técnicas de procesamiento de lenguaje natural para clasificar el sentimiento y la criticidad de cada mención. El sistema implementa mecanismos de deduplicación, normalización de datos y clasificación automática de amenazas potenciales, almacenando toda la información en un modelo relacional optimizado con índices, claves foráneas y constraints que garantizan la integridad referencial.

La metodología empleada incluye la revisión sistemática del estado del arte en OSINT automatizado, análisis de sentimiento y automatización de workflows, identificando cuatro papers académicos recientes (posteriores a 2022) que fundamentan el marco teórico. Se documentan exhaustivamente los endpoints de las APIs utilizadas, los parámetros de configuración, las limitaciones de rate limiting y las estrategias de optimización implementadas. Los workflows de n8n se describen en detalle, especificando cada nodo funcional desde la recopilación hasta la generación de alertas.

Se definen métricas cuantitativas de evaluación incluyendo precisión, recall, F1-score, tiempo promedio de detección, tasa de falsos positivos y cobertura de keywords. La implementación considera aspectos éticos fundamentales como el tratamiento de datos personales, límites legales de OSINT, políticas de retención y técnicas de anonimización, alineándose con la normativa argentina de protección de datos personales (Ley 25.326) y estándares internacionales.

Los resultados esperados demuestran la viabilidad de automatizar el proceso de monitoreo OSINT con recursos computacionales limitados, reduciendo significativamente el tiempo de detección de amenazas potenciales y eliminando sesgos inherentes al análisis manual. La solución propuesta es escalable, auditable y adaptable a diferentes contextos de inteligencia, constituyendo un aporte significativo para equipos de ciberseguridad en organizaciones públicas y privadas con presupuestos acotados.`,
    images: [
      "/projects/osint_nsg_1.png"
    ]
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
  screenshots: "Imágenes",
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
