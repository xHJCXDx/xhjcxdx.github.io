import { LucideIcon } from 'lucide-react'; 

export interface NavItem {
    id: string;
    label: string;
    icon: LucideIcon;
}

export interface SkillCategory {
    title: string;
    skills: string[];
    color: 'cyan' | 'purple';
}

export interface Project {
    title: string;
    tech: string;
    description: string;
    status: 'FILLED' | 'UNDER DEVELOPMENT';
    projectUrl: string;
    githubUrl: string;
}

export interface ContactMethod {
    href: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    color: 'cyan' | 'purple' | 'yellow';
}