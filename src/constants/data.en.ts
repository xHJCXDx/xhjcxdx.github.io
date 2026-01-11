import { User, Zap, Briefcase, Send, Linkedin, Github, Code, Play, Music, Camera, Gamepad2, Coffee } from 'lucide-react';
import type { NavItem, SkillCategory, Project, ContactMethod, MoreInfoCategory, TimelineItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'START', icon: Play },
  { id: 'about', label: 'ABOUT', icon: User },
  { id: 'skills', label: 'SKILLS', icon: Zap },
  { id: 'projects', label: 'PROJECTS', icon: Briefcase },
  { id: 'contact', label: 'CONTACT', icon: Send }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "PLATFORM",
    skills: ["Docker", "MongoDB"],
    color: "red"
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
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
    color: "blue"
  },
  {
    title: "BACKEND",
    skills: ["Python", "SQL", "MQL", "Java", "TypeScript"],
    color: "green"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "CPhysics",
    tech: "Python",
    description: "Desktop Tool for Computational Physics",
    status: "FILLED",
    longDescription: `CPhysics is a desktop application developed in Python and PySide6, designed to solve computational physics problems. The tool offers an intuitive graphical interface that allows users to perform calculations and visualize data in various areas of physics, including kinematics, dynamics, thermodynamics, waves, and electromagnetism.
The project’s modular architecture facilitates interactive simulation and analysis of results through graphs generated with popular libraries like Matplotlib and Seaborn. This makes CPhysics an excellent resource for students and enthusiasts.`,
    images: [
      "/projects/cphysics_1.png"
    ],
    githubUrl: "https://github.com/xHJCXDx/CPhysics.git"
  },
  {
    title: "Deleitarte",
    tech: "HTML - CSS - PHP",
    description: "Afternoon Tea Events Page",
    status: "UNDER DEVELOPMENT",
    longDescription: `We developed a web solution that combines essential functionality with a premium aesthetic. This project arose from the challenge of taking an event planning SME to the next competitive level. With optimized navigation and a contemporary visual style, we demonstrated that well-executed simplicity is the most powerful tool for standing out in today's market.`,
    images: [
      "/projects/deleitarte_1.png"
    ]
  },
  {
    title: "OSINT NSG",
    tech: "N8N - PostgreSQL - Docker",
    description: "Tool used to collect, analyze and make decisions based on legally available public information",
    status: "UNDER DEVELOPMENT",
    longDescription: `Automated architecture that integrates public Twitter/X and Reddit APIs with workflows developed in n8n, incorporating sentiment analysis using open-source tools (VADER and TextBlob), structured storage in PostgreSQL, and automatic generation of operational alerts via Slack and email.

The designed solution enables continuous collection of relevant mentions based on predefined keywords, applying natural language processing techniques to classify sentiment and criticality of each mention. The system implements mechanisms for deduplication, data normalization, and automatic classification of potential threats, storing all information in an optimized relational model with indexes, foreign keys, and constraints guaranteeing referential integrity.

The methodology employed includes a systematic review of the state of the art in automated OSINT, sentiment analysis, and workflow automation, identifying four recent academic papers (published after 2022) that underpin the theoretical framework. API endpoints used, configuration parameters, rate limiting limitations, and implemented optimization strategies are exhaustively documented. The n8n workflows are described in detail, specifying each functional node from collection to alert generation.

Quantitative evaluation metrics are defined, including accuracy, recall, F1-score, average detection time, false positive rate, and keyword coverage. The implementation considers fundamental ethical aspects such as personal data handling, legal limits of OSINT, retention policies, and anonymization techniques, aligning with Argentine personal data protection regulations (Law 25.326) and international standards.

Expected results demonstrate the feasibility of automating the OSINT monitoring process with limited computational resources, significantly reducing time required to detect potential threats and eliminating biases inherent in manual analysis. The proposed solution is scalable, auditable, and adaptable to different intelligence contexts, making a significant contribution to cybersecurity teams in public and private organizations with limited budgets.`,
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
  title: "DEVELOPER",
  tech: [
    { name: "REACT", color: "green" },
    { name: "JAVA", color: "blue" },
    { name: "PYTHON", color: "yellow" },
  ],
  quote: "> The beauty of simplicity",
};

export const ABOUT_TEXTS = {
  title: "ABOUT",
  description: [
    "> Technical Student in Programming.",
    "> Programmer focused on data analysis and cybersecurity.",
    "> Contributing my bit to this world full of challenges.",
  ],
  stats: [
    { value: "3", label: "PROJECTS", color: "blue" },
    { value: "2", label: "YEARS", color: "green" },
    { value: "320+", label: "INPUTS", color: "blue" },
    { value: "5", label: "LANGUAGES", color: "green" },
  ]
};

export const SKILLS_TEXTS = {
  title: "SKILLS"
};

export const PROJECTS_TEXTS = {
  title: "PROJECTS",
  seeProject: "SEE PROJECT"
};

export const CONTACT_TEXTS = {
  title: "CONTACT",
  quotes: [
    {
      text: "> Got something on your mind? ",
      highlight: "Let's create together."
    },
    {
      text: "> Going through problems? ",
      highlight: "I'll solve them for you."
    }
  ],
  collaboration: {
    text: "READY TO ",
    highlight: "COLLABORATE?"
  },
  startProject: "START PROJECT",
  form: {
    name: "NAME:",
    email: "EMAIL:",
    message: "MESSAGE:",
    cancel: "CANCEL",
    send: "SEND MESSAGE",
    sending: "Sending....",
    success: "Form Submitted Successfully",
    error: "An error occurred while submitting the form."
  }
};

export const PROJECT_MODAL_TEXTS = {
  screenshots: "Images",
  technologies: "Technologies",
  liveDemo: "SEE LIVE DEMO",
  viewCode: "VIEW CODE"
};

export const NAVBAR_TEXTS = {
  logo: "xHJCXDx"
};

export const FOOTER_TEXTS = {
  copyright: "© 2025 xHJCXDx Developer. All rights reserved."
};

export const MORE_INFO_TEXTS = {
  title: "MORE INFO",
  buttonText: "VIEW MORE DETAILS"
};

export const MORE_INFO_CATEGORIES: MoreInfoCategory[] = [
  {
    id: "education",
    title: "EDUCATION",
    items: [
      {
        title: "Electromechanical Technician",
        institution: "Ing. Pablo Nogués",
        date: "2012 - 2017",
        description: "Training oriented towards installation, maintenance and repair of electrical and mechanical systems. I performed semesterly internships in various workshops, gaining experience in using tools and CNC machinery, interpreting blueprints, circuit assembly.",
        image: "/logos/ipn.png",
        url: "https://dti.mendoza.edu.ar/gem/ingreso/publico/escuela/1099/2",
        button: "Web"
      },
      {
        title: "Mechatronics Engineering",
        institution: "National University of Cuyo",
        date: "2018 - 2023",
        description: "Training in analytical thinking and deepening understanding of basic science fundamentals applied to engineering.",
        image: "/logos/unc.png",
        url: "https://ingenieria.uncuyo.edu.ar/",
        button: "Web"
      },
      {
        title: "Programming Technician",
        institution: "UTN - Mendoza Regional Faculty",
        date: "2023 - Present",
        description: "Comprehensive training in software development, algorithms, and data structures.",
        image: "/logos/utn.png",
        url: "https://www4.frm.utn.edu.ar/",
        button: "Web"
      }
    ]
  },
  {
    id: "experience",
    title: "EXPERIENCE",
    items: [
      {
        title: "Computer Equipment Repair Service",
        institution: "Freelance",
        date: "2018 - 2021",
        description: "I performed repair and maintenance of computer equipment (cell phones, desktop computers, and notebooks).",
        image: "/jobs/rp.png"
      },
      {
        title: "IT Support Team Leader",
        institution: "Argentine Army",
        date: "2021 - 2025",
        description: "I performed different roles such as documentation administration and IT. Part of an IT team (SCD), in charge of equipment maintenance and repair, as well as network management and maintenance.",
        image: "/jobs/ea.png",
        url: "https://www.linkedin.com/company/ejercitoargentino/",
        button: "Linkedin"
      },
      {
        title: "Auditor",
        institution: "Millan S. A.",
        date: "2025",
        description: "I performed internal audits to ensure correct distribution of orders. Preparation of balance sheets in various branches. Physical and documentary inventory control, identifying discrepancies and proposing corrective actions.",
        image: "/jobs/millan.png",
        url: "https://www.linkedin.com/company/millan-s.-a./",
        button: "Linkedin"
      },
      {
        title: "Laboratory Technician",
        institution: "Telebit S. A.",
        date: "2025 - 2026",
        description: "I perform quality control, equipment calibration and specialized technical support. Expert in ensuring process precision through compliance with international regulations and optimization of test protocols.",
        image: "/jobs/telebit.png",
        url: "https://www.linkedin.com/company/telebit-s.a./",
        button: "Linkedin"
      }
    ]
  },
  {
    id: "certifications",
    title: "CERTIFICATIONS",
    items: [
      {
        title: "Cybersecurity Fundamentals",
        institution: "IBM",
        date: "2026",
        description: "Course on cybersecurity fundamentals",
        image: "/certificates/ibm_cybersecurity_fundamentals.png",
        url: "https://www.credly.com/badges/7c232a79-92ef-4eee-a310-a1aee3f9b5de/public_url",
        button: "View Credential"
      },
      {
        title: "Data Fundamentals",
        institution: "IBM",
        date: "2026",
        description: "Course on data analysis fundamentals",
        image: "/certificates/ibm_data_fundamentals.png",
        url: "https://www.credly.com/badges/1c49c0c0-6874-4cee-8069-6b9ec26240c5/public_url",
        button: "View Credential"
      },
      {
        title: "Artificial Intelligence Fundamentals",
        institution: "IBM",
        date: "2026",
        description: "Course on AI fundamentals",
        image: "/certificates/ia_ibm.png",
        url: "https://www.credly.com/badges/d346340a-61f0-4319-89a6-137424938701/public_url",
        button: "View Credential"
      }
    ]
  }
];

export const BEYOND_CODE_TEXTS = {
  title: "BEYOND THE CODE",
  buttonText: "DISCOVER MY PERSONAL SIDE"
};

export const BEYOND_CODE_ITEMS: TimelineItem[] = [
  {
    year: "2018 - Present",
    title: "Photography",
    description: "Capturing unique moments and exploring visual composition in my free time.",
    icon: Camera,
    image: "/hobbies/photography.jpg"
  },
  {
    year: "2010 - Present",
    title: "Video Games",
    description: "Passionate about immersive narratives and game mechanics design.",
    icon: Gamepad2,
    image: "/hobbies/gaming.jpg"
  },
  {
    year: "Daily Habit",
    title: "Coffee & Reading",
    description: "Enjoying a good book accompanied by specialty coffee.",
    icon: Coffee
  },
  {
    year: "Always",
    title: "Music",
    description: "Exploring new genres and finding inspiration in sound.",
    icon: Music
  }
];
