import { User, Zap, Briefcase, Send, Linkedin, Github, Code } from 'lucide-react';
import type { NavItem, SkillCategory, Project, ContactMethod } from '@/types';

export const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'START', icon: User },
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
    /*{
        title: "Painting SME",
        tech: "React • Node.js • SQL",
        description: "Website for the paint trade (SME).",
        status: "FILLED",
        projectUrl: "",
        githubUrl:""
    },
    {
        title: "Legado+", 
        tech: "HTML • CSS • JavaScript • SQL",
        description: "Website for learning programming and technology news.",
        status: "UNDER DEVELOPMENT",
        projectUrl: "",
        githubUrl:""
    },
    {
        title: "Asistencia", 
        tech: "ReactNative • Node.js • SQLite",
        description: "Attendance management application for educational institutions with report generation and notifications.",
        status: "UNDER DEVELOPMENT",
        projectUrl: "",
        githubUrl:""
    },*/
    {
        title: "CPhysics",
        tech: "Python",
        description: "Desktop Tool for Computational Physics",
        status: "FILLED",
        longDescription:"CPhysics is a desktop application developed in Python and PySide6, designed to solve computational physics problems. The tool offers an intuitive graphical interface that allows users to perform calculations and visualize data in various areas of physics, including kinematics, dynamics, thermodynamics, waves, and electromagnetism.\nThe project’s modular architecture facilitates interactive simulation and analysis of results through graphs generated with popular libraries like Matplotlib and Seaborn. This makes CPhysics an excellent resource for students and enthusiasts.",
        images: [
            "/projects/cphysics_1.png"
        ],
        //liveDemoUrl: "#", // Add your live demo link here
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