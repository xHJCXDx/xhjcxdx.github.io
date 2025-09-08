import React from 'react';
import { ABOUT_TEXTS } from '@/constants/data';

export const About: React.FC = () => {
    const getStatColorClass = (color: string) => {
        switch (color) {
            case 'cyan':
                return {
                    border: 'border-cyan-400/30',
                    text: 'text-cyan-400',
                };
            case 'purple':
                return {
                    border: 'border-purple-400/30',
                    text: 'text-purple-400',
                };
            default:
                return {
                    border: 'border-gray-400/30',
                    text: 'text-gray-400',
                };
        }
    };

    return (
        <section className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-mono font-bold text-white mb-8 border-b border-cyan-400 pb-4">
                {ABOUT_TEXTS.title}
                </h2>
                <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
                {ABOUT_TEXTS.description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                </div>
            </div>
            
            <div className="relative">
                <div className="border-2 border-purple-500/50 p-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                    {ABOUT_TEXTS.stats.map((stat) => {
                        const colors = getStatColorClass(stat.color);
                        return (
                            <div key={stat.label} className={`border ${colors.border} p-4`}>
                                <div className={`text-2xl font-mono font-bold ${colors.text}`}>{stat.value}</div>
                                <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};