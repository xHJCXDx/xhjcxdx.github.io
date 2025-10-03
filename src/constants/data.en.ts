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
        description: "Desktop Tool for Computational Physics",
        status: "FILLED",
        longDescription:`CPhysics is a desktop application developed in Python and PySide6, designed to solve computational physics problems. The tool offers an intuitive graphical interface that allows users to perform calculations and visualize data in various areas of physics, including kinematics, dynamics, thermodynamics, waves, and electromagnetism.
The project’s modular architecture facilitates interactive simulation and analysis of results through graphs generated with popular libraries like Matplotlib and Seaborn. This makes CPhysics an excellent resource for students and enthusiasts.`,
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