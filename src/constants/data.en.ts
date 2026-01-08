import { User, Zap, Briefcase, Send, Linkedin, Github, Code, Play } from 'lucide-react';
import type { NavItem, SkillCategory, Project, ContactMethod } from '@/types';

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
    description: "Afternoon Tea Events",
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
    longDescription: `An automated architecture that integrates the public APIs of Twitter/X and Reddit with workflows developed in n8n, incorporating sentiment analysis using open-source tools (VADER and TextBlob), structured storage in PostgreSQL, and automatic generation of operational alerts via Slack and email.

The designed solution enables the continuous collection of relevant mentions based on predefined keywords, applying natural language processing techniques to classify the sentiment and criticality of each mention. The system implements mechanisms for deduplication, data normalization, and automatic classification of potential threats, storing all information in an optimized relational model with indexes, foreign keys, and constraints that guarantee referential integrity.

The methodology employed includes a systematic review of the state of the art in automated OSINT, sentiment analysis, and workflow automation, identifying four recent academic papers (published after 2022) that underpin the theoretical framework. The endpoints of the APIs used, configuration parameters, rate limiting limitations, and implemented optimization strategies are thoroughly documented. The n8n workflows are described in detail, specifying each functional node from data collection to alert generation.

Quantitative evaluation metrics are defined, including accuracy, recall, F1 score, average detection time, false positive rate, and keyword coverage. The implementation considers fundamental ethical aspects such as the handling of personal data, legal limits of OSINT, retention policies, and anonymization techniques, aligning with Argentine regulations on personal data protection (Law 25.326) and international standards.

The expected results demonstrate the feasibility of automating the OSINT monitoring process with limited computational resources, significantly reducing the time required to detect potential threats and eliminating biases inherent in manual analysis. The proposed solution is scalable, auditable, and adaptable to different intelligence contexts, making a significant contribution to cybersecurity teams in public and private organizations with limited budgets.`,
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
  title: "DEVELOPER",
  tech: [
    { name: "REACT", color: "purple" },
    { name: "JAVA", color: "cyan" },
    { name: "PYTHON", color: "yellow" },
  ],
  quote: "> The beauty of simplicity",
};

export const ABOUT_TEXTS = {
  title: "ABOUT",
  description: [
    "> Technical Student in Programming.",
    "> Fullstack programmer. Focused more on the backend.",
    "> Contributing my bit to this world full of challenges.",
  ],
  stats: [
    { value: "6", label: "PROJECTS", color: "cyan" },
    { value: "2", label: "YEARS", color: "purple" },
    { value: "240+", label: "INPUTS", color: "cyan" },
    { value: "6", label: "LANGUAGES", color: "purple" },
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
