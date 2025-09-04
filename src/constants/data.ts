import { User, Zap, Briefcase, Send, Mail, Linkedin, Github } from 'lucide-react';
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
        title: "FRONTEND",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        color: "cyan"
    },
    {
        title: "BACKEND", 
        skills: ["Node.js", "Express", "Python", "SQL"],
        color: "purple"
    },
    {
        title: "TOOLS",
        skills: ["Git", "Docker", "MongoDB", "Visual Studio Code", "Linux"],
        color: "cyan"
    }
];

export const PROJECTS: Project[] = [
    {
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
    },
    {
        title: "CPhysics",
        tech: "Python",
        description: "Sistema de chatbot inteligente con procesamiento de lenguaje natural y aprendizaje automático.",
        status: "FILLED",
        projectUrl: "https://github.com/xHJCXDx/CPhysics.git",
        githubUrl:""
    } 
];

export const CONTACT_METHODS: ContactMethod[] = [
    {
        href: "mailto:legado1x@email.com",
        icon: Mail,
        title: "EMAIL",
        subtitle: "legado1x@email.com",
        color: "yellow"
    },
    {
        href: "www.linkedin.com/in/hiro-julian-cruz-4737902ba",
        icon: Linkedin,
        title: "LINKEDIN",
        subtitle: "/in/hiro-julian-cruz",
        color: "purple"
    },
    {
        href: "https://github.com/xHJCXDx",
        icon: Github,
        title: "GITHUB",
        subtitle: "@xHJCXDx",
        color: "cyan"
    }
];