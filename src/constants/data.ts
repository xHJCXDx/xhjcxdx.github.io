import { User, Zap, Briefcase, Send, Mail, Linkedin, Github } from 'lucide-react';
import type { NavItem, SkillCategory, Project, ContactMethod } from '@/types';

export const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'INICIO', icon: User },
    { id: 'about', label: 'ACERCA', icon: User },
    { id: 'skills', label: 'SKILLS', icon: Zap },
    { id: 'projects', label: 'PROYECTOS', icon: Briefcase },
    { id: 'contact', label: 'CONTACTO', icon: Send }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "FRONTEND",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        color: "cyan"
    },
    {
        title: "BACKEND", 
        skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
        color: "purple"
    },
    {
        title: "TOOLS",
        skills: ["Git", "Docker", "AWS", "MongoDB", "GraphQL"],
        color: "cyan"
    }
];

export const PROJECTS: Project[] = [
    {
        title: "E-COMMERCE PLATFORM",
        tech: "React • Node.js • MongoDB",
        description: "Plataforma de comercio electrónico completa con sistema de pagos integrado y panel de administración.",
        status: "COMPLETADO"
    },
    {
        title: "TASK MANAGER APP", 
        tech: "Vue.js • Express • PostgreSQL",
        description: "Aplicación de gestión de tareas con colaboración en tiempo real y sincronización multi-dispositivo.",
        status: "EN DESARROLLO"
    },
    {
        title: "AI CHATBOT SYSTEM",
        tech: "Python • TensorFlow • React",
        description: "Sistema de chatbot inteligente con procesamiento de lenguaje natural y aprendizaje automático.",
        status: "COMPLETADO"
    } 
];

export const CONTACT_METHODS: ContactMethod[] = [
    {
        href: "mailto:juan@example.com",
        icon: Mail,
        title: "EMAIL",
        subtitle: "juan@example.com",
        color: "cyan"
    },
    {
        href: "https://linkedin.com",
        icon: Linkedin,
        title: "LINKEDIN",
        subtitle: "/in/juandev",
        color: "purple"
    },
    {
        href: "https://github.com",
        icon: Github,
        title: "GITHUB",
        subtitle: "@juandev",
        color: "cyan"
    }
];