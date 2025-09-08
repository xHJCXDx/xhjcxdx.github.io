import React from 'react';
import { SKILL_CATEGORIES } from '@/constants/data';

// Helper object to map color names to full Tailwind CSS classes
const colorClasses: { [key: string]: { container: string; title: string; skill: string; } } = {
    cyan: {
        container: 'border-cyan-500/50 from-cyan-100/10 dark:from-cyan-900/10',
        title: 'text-cyan-400',
        skill: 'border-cyan-400/30 bg-cyan-100/5 dark:bg-cyan-400/5',
    },
    purple: {
        container: 'border-purple-500/50 from-purple-100/10 dark:from-purple-900/10',
        title: 'text-purple-400',
        skill: 'border-purple-400/30 bg-purple-100/5 dark:bg-purple-400/5',
    },
    yellow: {
        container: 'border-yellow-500/50 from-yellow-100/10 dark:from-yellow-900/10',
        title: 'text-yellow-400',
        skill: 'border-yellow-400/30 bg-yellow-100/5 dark:bg-yellow-400/5',
    },
    blue: {
        container: 'border-blue-500/50 from-blue-100/10 dark:from-blue-900/10',
        title: 'text-blue-400',
                skill: 'border-blue-400/30 bg-blue-100/5 dark:bg-blue-400/5',
    },
    green: {
        container: 'border-green-500/50 from-green-100/10 dark:from-green-900/10',
        title: 'text-green-400',
        skill: 'border-green-400/30 bg-green-100/5 dark:bg-green-400/5',
    },
    red: {
        container: 'border-red-500/50 from-red-100/10 dark:from-red-900/10',
        title: 'text-red-400',
        skill: 'border-red-400/30 bg-red-100/5 dark:bg-red-400/5',
    },
    pink: {
        container: 'border-pink-500/50 from-pink-100/10 dark:from-pink-900/10',
        title: 'text-pink-400',
        skill: 'border-pink-400/30 bg-pink-100/5 dark:bg-pink-400/5',
    },
    orange: {
        container: 'border-orange-500/50 from-orange-100/10 dark:from-orange-900/10',
        title: 'text-orange-400',
        skill: 'border-orange-400/30 bg-orange-100/5 dark:bg-orange-400/5',
    },
    indigo: {
        container: 'border-indigo-500/50 from-indigo-100/10 dark:from-indigo-900/10',
        title: 'text-indigo-400',
        skill: 'border-indigo-400/30 bg-indigo-100/5 dark:bg-indigo-400/5',
    },
};

export const Skills: React.FC = () => {
    return (
        <section className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-black dark:text-white mb-12 text-center border-b border-gray-300 dark:border-purple-400 pb-4">
            SKILLS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map(({ title, skills, color }) => {
                const classes = colorClasses[color] || colorClasses.cyan; // Fallback to cyan
                return (
                    <div key={title} className={`border-2 p-6 bg-gradient-to-b to-black/50 ${classes.container}`}>
                        <h3 className={`text-2xl font-mono font-bold mb-6 text-center ${classes.title}`}>
                            {title}
                        </h3>
                        <div className="space-y-3">
                            {skills.map((skill) => (
                            <div key={skill} className={`p-3 border text-center ${classes.skill}`}>
                                <span className="font-mono text-gray-700 dark:text-gray-300">{skill}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
        </section>
    );
};