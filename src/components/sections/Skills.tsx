import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { colorClasses } from '@/constants/styles';

export const Skills: React.FC = () => {
    const { texts } = useLanguage();

    return (
        <section className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-black dark:text-white mb-12 text-center border-b border-gray-300 dark:border-green-400 pb-4">
            {texts.SKILLS_TEXTS.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {texts.SKILL_CATEGORIES.map(({ title, skills, color }) => {
                const classes = colorClasses[color] || colorClasses.blue;
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