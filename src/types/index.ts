import { LucideIcon } from 'lucide-react';

// Tailwind colors
type TailwindColor = 'cyan' | 'purple' | 'yellow' | 'blue' | 'green' | 'red' | 'indigo' | 'pink' | 'orange';

// Types
export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

// Skill
export interface Skill {
  name: string;
  level: 'High' | 'Medium' | 'Low';
}

// Skill category
export interface SkillCategory {
  title: string;
  skills: Skill[];
  color: TailwindColor;
}

// Project
export interface Project {
  title: string;
  tech: string;
  description: string;
  status: 'FILLED' | 'UNDER DEVELOPMENT' | 'COMPLETADO' | 'EN DESARROLLO' | 'COMPLETED';
  githubUrl?: string;
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

// More Info Item
export interface MoreInfoItem {
  title: string;
  institution: string;
  date: string;
  description?: string;
  image?: string;
  url?: string;
  button?: string;
}

// More Info Category
export interface MoreInfoCategory {
  id: string;
  title: string;
  items: MoreInfoItem[];
}

// Timeline Item
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
}
