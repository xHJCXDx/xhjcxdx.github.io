import React from 'react';
import { SKILL_CATEGORIES } from '@/constants/data';

export const Skills: React.FC = () => {
    return (
        <section className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-white mb-12 text-center border-b border-purple-400 pb-4">
            SKILLS.EXE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map(({ title, skills, color }) => (
                <div key={title} className={`border-2 border-${color}-500/50 p-6 bg-gradient-to-b from-${color}-900/10 to-black/50`}>
                <h3 className={`text-2xl font-mono font-bold text-${color}-400 mb-6 text-center`}>
                    {title}
                </h3>
                <div className="space-y-3">
                    {skills.map((skill) => (
                    <div key={skill} className={`p-3 border border-${color}-400/30 bg-${color}-400/5 text-center`}>
                        <span className="font-mono text-gray-300">{skill}</span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};