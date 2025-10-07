import { LucideIcon } from 'lucide-react'; 

// Tailwind colors
type TailwindColor = 'cyan' | 'purple' | 'yellow' | 'blue' | 'green' | 'red' | 'indigo' | 'pink' | 'orange';

// Types
export interface NavItem {
    id: string;
    label: string;
    icon: LucideIcon;
}

// Skill category
export interface SkillCategory {
    title: string;
    skills: string[];
    color: TailwindColor;
}

// Project
export interface Project {
    title: string;
    tech: string;
    description: string;
    status: 'FILLED' | 'UNDER DEVELOPMENT' | 'COMPLETADO' | 'EN DESARROLLO';
    githubUrl: string;
    longDescription: string;
    images?: string[];
    liveDemoUrl?: string;
}

// Contact method
export interface ContactMethod {
    href: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    color: TailwindColor;
}