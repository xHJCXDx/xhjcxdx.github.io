import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { HOME_TEXTS } from '@/constants/data';

export const Home: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = HOME_TEXTS.title;

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
            clearInterval(timer);
        }
        }, 100);
        return () => clearInterval(timer);
    }, [fullText]);

    const getTechColorClass = (color: string) => {
        switch (color) {
            case 'purple':
                return 'border-purple-500 bg-purple-500/10 text-purple-400';
            case 'cyan':
                return 'border-cyan-500 bg-cyan-500/10 text-cyan-400';
            case 'yellow':
                return 'border-yellow-500 bg-yellow-500/10 text-yellow-400';
            default:
                return 'border-gray-500 bg-gray-500/10 text-gray-400';
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/30 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-1/2 right-1/4 w-24 h-24 border border-cyan-400/30 rotate-12 animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-600/20 rotate-45"></div>
        </div>

        <div className="text-center z-10">
            <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 border-4 border-cyan-400 rounded-2xl bg-gradient-radial from-cyan-200 via-purple-100 to-cyan-200 flex items-center justify-center shadow-lg">
                    <img src="/logo.svg" alt="Logo" className="w-24 h-24 object-contain" />
                </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white mb-4 text-center">
            {HOME_TEXTS.name}{/*<span className="text-cyan-400">DEV</span> */}
            </h1>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-mono text-purple-400 mb-8 h-6 sm:h-8 text-center">
            {displayText}<span className="animate-blink">|</span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            {HOME_TEXTS.tech.map((tech) => (
                <div key={tech.name} className={`px-4 sm:px-6 py-3 border ${getTechColorClass(tech.color)} font-mono text-sm`}>
                    {tech.name}
                </div>
            ))}
            </div>

            <ChevronDown className="text-gray-400 animate-bounce mx-auto" size={32} />
            <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
                <p>
                    {HOME_TEXTS.quote}
                </p>
            </div>
        </div>
        </section>
    );
};