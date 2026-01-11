import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Home: React.FC = () => {
    const { texts } = useLanguage();
    const [displayText, setDisplayText] = useState('');
    const fullText = texts.HOME_TEXTS.title;

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
            case 'green':
                return 'border-green-500 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400';
            case 'blue':
                return 'border-blue-500 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400';
            case 'yellow':
                return 'border-yellow-500 bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400';
            default:
                return 'border-gray-500 bg-gray-100 dark:bg-gray-500/10 text-gray-700 dark:text-gray-400';
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-green-500/30 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-1/2 right-1/4 w-24 h-24 border border-blue-400/30 rotate-12 animate-bounce"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-600/20 rotate-45"></div>
        </div>

        <div className="text-center z-10">
            <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 border-4 border-blue-400 rounded-2xl bg-gradient-radial from-blue-200 via-green-100 to-blue-200 flex items-center justify-center shadow-lg">
                    <img src="/logo.svg" alt="Logo" className="w-24 h-24 object-contain" />
                </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-gray-900 dark:text-white mb-4 text-center">
            {texts.HOME_TEXTS.name}{/*<span className="text-blue-400">DEV</span> */}
            </h1>
            
            <div className="text-lg sm:text-xl lg:text-2xl font-mono text-green-600 dark:text-green-400 mb-8 h-6 sm:h-8 text-center">
            {displayText}<span className="animate-blink">|</span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            {texts.HOME_TEXTS.tech.map((tech) => (
                <div key={tech.name} className={`px-4 sm:px-6 py-3 border ${getTechColorClass(tech.color)} font-mono text-sm`}>
                    {tech.name}
                </div>
            ))}
            </div>

            <ChevronDown className="text-gray-500 dark:text-gray-400 animate-bounce mx-auto" size={32} />
            <div className="space-y-6 text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                <p>
                    {texts.HOME_TEXTS.quote}
                </p>
            </div>
        </div>
        </section>
    );
};