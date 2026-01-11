import { User, Zap, Briefcase, Send, Linkedin, Github, Code, Play, Music, Camera, Gamepad2, Coffee } from 'lucide-react';
import type { NavItem, SkillCategory, Project, ContactMethod, MoreInfoCategory, TimelineItem } from '@/types';

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
    skills: [
      { name: "Docker", level: "Medium" },
      { name: "MongoDB", level: "Medium" },
      { name: "N8N", level: "Medium" }
    ],
    color: "red"
  },
  {
    title: "FRAMEWORKS Y LIBRERÍAS",
    skills: [
      { name: "React", level: "Medium" },
      { name: "React Native", level: "Low" },
      { name: "Tailwind", level: "Low" }
    ],
    color: "pink"
  },
  {
    title: "IDE",
    skills: [
      { name: "Android Studio", level: "Low" },
      { name: "Visual Studio Code", level: "High" },
      { name: "IntelliJ IDEA", level: "Medium" },
      { name: "LazyVim", level: "High" }
    ],
    color: "orange"
  },
  {
    title: "FRONTEND",
    skills: [
      { name: "HTML", level: "High" },
      { name: "CSS", level: "High" },
      { name: "JavaScript", level: "High" }
    ],
    color: "blue"
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Python", level: "High" },
      { name: "SQL", level: "High" },
      { name: "MQL", level: "Medium" },
      { name: "Java", level: "High" },
      { name: "TypeScript", level: "Medium" }
    ],
    color: "green"
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
    longDescription: `Arquitectura automatizada que integra las APIs públicas de Twitter/X y Reddit con flujos de trabajo desarrollados en n8n, incorporando análisis de sentimiento mediante herramientas open-source (VADER y TextBlob), almacenamiento estructurado en PostgreSQL y generación automática de alertas operativas vía Slack y correo electrónico.\n\nLa solución diseñada permite la recopilación continua de menciones relevantes basadas en keywords predefinidos, aplicando técnicas de procesamiento de lenguaje natural para clasificar el sentimiento y la criticidad de cada mención. El sistema implementa mecanismos de deduplicación, normalización de datos y clasificación automática de amenazas potenciales, almacenando toda la información en un modelo relacional optimizado con índices, claves foráneas y constraints que garantizan la integridad referencial.\n\nLa metodología empleada incluye la revisión sistemática del estado del arte en OSINT automatizado, análisis de sentimiento y automatización de workflows, identificando cuatro papers académicos recientes (posteriores a 2022) que fundamentan el marco teórico. Se documentan exhaustivamente los endpoints de las APIs utilizadas, los parámetros de configuración, las limitaciones de rate limiting y las estrategias de optimización implementadas. Los workflows de n8n se describen en detalle, especificando cada nodo funcional desde la recopilación hasta la generación de alertas.\n\nSe definen métricas cuantitativas de evaluación incluyendo precisión, recall, F1-score, tiempo promedio de detección, tasa de falsos positivos y cobertura de keywords. La implementación considera aspectos éticos fundamentales como el tratamiento de datos personales, límites legales de OSINT, políticas de retención y técnicas de anonimización, alineándose con la normativa argentina de protección de datos personales (Ley 25.326) y estándares internacionales.\n\nLos resultados esperados demuestran la viabilidad de automatizar el proceso de monitoreo OSINT con recursos computacionales limitados, reduciendo significativamente el tiempo de detección de amenazas potenciales y eliminando sesgos inherentes al análisis manual. La solución propuesta es escalable, auditable y adaptable a diferentes contextos de inteligencia, constituyendo un aporte significativo para equipos de ciberseguridad en organizaciones públicas y privadas con presupuestos acotados.`,
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
    color: "purple"
  },
  {
    href: "https://app.daily.dev/xhjcxdx",
    icon: Code,
    title: "Daily.dev",
    subtitle: "@xhjcxdx",
    color: "green"
  }
];

export const HOME_TEXTS = {
  name: "Hiro",
  title: "DESARROLLADOR",
  tech: [
    { name: "SQL", color: "green" },
    { name: "JAVA", color: "blue" },
    { name: "PYTHON", color: "yellow" },
  ],
  quote: "> La belleza de la simplicidad",
};

export const ABOUT_TEXTS = {
  title: "SOBRE MÍ",
  description: [
    "> Estudiante Técnico en Programación.",
    "> Programador enfocado en el análisis de datos y ciberseguridad.",
    "> Aportando mi granito de arena a este mundo lleno de retos.",
  ],
  stats: [
    { value: "3", label: "PROYECTOS", color: "blue" },
    { value: "2", label: "AÑOS", color: "green" },
    { value: "320+", label: "APORTES", color: "blue" },
    { value: "5", label: "LENGUAJES", color: "green" },
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
      text: "> ¿Necesitas ayuda o estás pasando por problemas? ",
      highlight: "Colaboremos y resolvámoslo juntos."
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

export const MORE_INFO_TEXTS = {
  title: "MÁS INFORMACIÓN",
  buttonText: "VER MÁS DETALLES"
};

export const MORE_INFO_CATEGORIES: MoreInfoCategory[] = [
  {
    id: "education",
    title: "EDUCACIÓN",
    items: [
      {
        title: "Tecnicatura Electromecánica",
        institution: "Ing. Pablo Nogués",
        date: "2012 - 2017",
        description: "Formación orientada a la instalación, mantenimiento y reparación de sistemas eléctricos y mecánicos. Realicé prácticas semestrales en diversos talleres, adquiriendo experiencia en el uso de herramientas y maquinaria CNC, interpretación de planos, montaje de circuitos.",
        image: "/logos/ipn.png",
        url: "https://dti.mendoza.edu.ar/gem/ingreso/publico/escuela/1099/2",
        button: "Web"
      },
      {
        title: "Ingeniería en Mecatrónica",
        institution: "Universidad Nacional de Cuyo",
        date: "2018 - 2023",
        description: "Formación de pensamiento analítico y profundización en la comprensión de los fundamentos de las ciencias básicas aplicadas a la ingeniería.",
        image: "/logos/unc.png",
        url: "https://ingenieria.uncuyo.edu.ar/",
        button: "Web"
      },
      {
        title: "Tecnicatura en Programación",
        institution: "UTN - Facultad Regional Mendoza",
        date: "2023 - Presente",
        description: "Formación integral en desarrollo de software, algoritmos y estructuras de datos.",
        image: "/logos/utn.png",
        url: "https://www4.frm.utn.edu.ar/",
        button: "Web"
      }
    ]
  },
  {
    id: "experiencia",
    title: "EXPERIENCIA",
    items: [
      {
        title: "Servicio de reparación de equipos informáticos",
        institution: "Autónomo",
        date: "2018 - 2021",
        description: "Realicé reparación y mantenimiento de equipos informáticos, (teléfonos celulares, computadoras de escritorio y notebooks).",
        image: "/jobs/rp.png"
      },
      {
        title: "Jefe de equipo de soporte informático",
        institution: "Ejército Argentino",
        date: "2021 - 2025",
        description: "Realicé diferentes rubros como administración de documentación y informático. Parte de un equipo informático(SCD), a cargo del mantenimiento y reparación de equipos, así como de la gestión y mantenimiento de red.",
        image: "/jobs/ea.png",
        url: "https://www.linkedin.com/company/ejercitoargentino/",
        button: "Linkedin"
      },
      {
        title: "Auditor",
        institution: "Millan S. A.",
        date: "2025",
        description: "Realicé auditorías internas para asegurar la correcta distribución de los pedidos. Elaboración de balances de saldos en diversas sucursales. Control de inventario físico y documental, identificando discrepancias y proponiendo acciones correctivas..",
        image: "/jobs/millan.png",
        url: "https://www.linkedin.com/company/millan-s.-a./",
        button: "Linkedin"
      },
      {
        title: "Técnico en Laboratorio",
        institution: "Telebit S. A.",
        date: "2025 - 2026",
        description: "Realizo control de calidad, calibración de equipos y soporte técnico especializado. Experto en garantizar la precisión de procesos mediante el cumplimiento de normativas internacionales y la optimización de protocolos de ensayo.",
        image: "/jobs/telebit.png",
        url: "https://www.linkedin.com/company/telebit-s.a./",
        button: "Linkedin"
      }
    ]
  },
  {
    id: "certifications",
    title: "CERTIFICACIONES",
    items: [
      {
        title: "Fundamentos de la ciberseguridad",
        institution: "IBM",
        date: "2026",
        description: "Curso sobre los fundamentos de la ciberseguridad",
        image: "/certificates/ibm_cybersecurity_fundamentals.png",
        url: "https://www.credly.com/badges/7c232a79-92ef-4eee-a310-a1aee3f9b5de/public_url",
        button: "Ver credencial"
      },
      {
        title: "Fundamentos de datos",
        institution: "IBM",
        date: "2026",
        description: "Curso sobre los fundamentos del analizamiento de datos",
        image: "/certificates/ibm_data_fundamentals.png",
        url: "https://www.credly.com/badges/1c49c0c0-6874-4cee-8069-6b9ec26240c5/public_url",
        button: "Ver credencial"
      },
      {
        title: "Fundamentos de la inteligencia artificial",
        institution: "IBM",
        date: "2026",
        description: "Curso sobre los fundamentos de la IA",
        image: "/certificates/ia_ibm.png",
        url: "https://www.credly.com/badges/d346340a-61f0-4319-89a6-137424938701/public_url",
        button: "Ver credencial"
      }
    ]
  }
];

export const BEYOND_CODE_TEXTS = {
  title: "MÁS ALLÁ DEL CÓDIGO",
  buttonText: "DESCUBRIR MI LADO PERSONAL"
};

export const BEYOND_CODE_ITEMS: TimelineItem[] = [
  {
    year: "2018 - Presente",
    title: "Fotografía",
    description: "Capturando momentos únicos y explorando la composición visual en mi tiempo libre.",
    icon: Camera,
    image: "/hobbies/photography.jpg"
  },
  {
    year: "2010 - Presente",
    title: "Videojuegos",
    description: "Apasionado por las narrativas inmersivas y el diseño de mecánicas de juego.",
    icon: Gamepad2,
    image: "/hobbies/gaming.jpg"
  },
  {
    year: "Hábito Diario",
    title: "Café & Lectura",
    description: "Disfrutando de un buen libro acompañado de café de especialidad.",
    icon: Coffee
  },
  {
    year: "Siempre",
    title: "Música",
    description: "Explorando nuevos géneros y encontrando inspiración en el sonido.",
    icon: Music
  }
];
