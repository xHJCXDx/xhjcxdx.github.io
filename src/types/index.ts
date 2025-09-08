import { LucideIcon } from 'lucide-react'; 

type TailwindColor = 'cyan' | 'purple' | 'yellow' | 'blue' | 'green' | 'red' | 'indigo' | 'pink' | 'orange';

export interface NavItem {
    id: string;
    label: string;
    icon: LucideIcon;
}

export interface SkillCategory {
    title: string;
    skills: string[];
    color: TailwindColor;
}

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

export interface ContactMethod {
    href: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    color: TailwindColor;
}