import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { MoreInfo } from './MoreInfo';
import { BeyondCode } from './BeyondCode';

export const About: React.FC = () => {
    const { texts } = useLanguage();
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [showBeyondCode, setShowBeyondCode] = useState(false);
    const moreInfoRef = useRef<HTMLDivElement>(null);
    const beyondCodeRef = useRef<HTMLDivElement>(null);

    const handleShowMore = () => {
        setShowMoreInfo(true);
        setTimeout(() => {
            moreInfoRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleShowBeyondCode = () => {
        setShowBeyondCode(true);
        setTimeout(() => {
            beyondCodeRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const getStatColorClass = (color: string) => {
        switch (color) {
            case 'blue':
                return {
                    border: 'border-blue-400/30',
                    text: 'text-blue-400',
                };
            case 'green':
                return {
                    border: 'border-green-400/30',
                    text: 'text-green-400',
                };
            default:
                return {
                    border: 'border-gray-400/30',
                    text: 'text-gray-400',
                };
        }
    };

    return (
        <section className="min-h-screen py-20 px-6 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
                <h2 className="text-4xl font-mono font-bold text-white mb-8 border-b border-blue-400 pb-4">
                {texts.ABOUT_TEXTS.title}
                </h2>
                <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
                {texts.ABOUT_TEXTS.description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                </div>
            </div>
            
            <div className="relative">
                <div className="border-2 border-green-500/50 p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                    {texts.ABOUT_TEXTS.stats.map((stat) => {
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

            {!showMoreInfo && (
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={handleShowMore}
                        className="group flex flex-col items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <span className="font-mono text-sm tracking-widest">{texts.MORE_INFO_TEXTS.buttonText}</span>
                        <ChevronDown className="animate-bounce group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            )}

            {showMoreInfo && (
                <div ref={moreInfoRef} className="animate-fade-in-up">
                    <MoreInfo />
                    
                    {!showBeyondCode && (
                        <div className="flex justify-center mt-12 pb-10">
                            <button 
                                onClick={handleShowBeyondCode}
                                className="group flex flex-col items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                            >
                                <span className="font-mono text-sm tracking-widest">{texts.BEYOND_CODE_TEXTS.buttonText}</span>
                                <ChevronDown className="animate-bounce group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    )}

                    {showBeyondCode && (
                        <div ref={beyondCodeRef} className="animate-fade-in-up">
                            <BeyondCode />
                        </div>
                    )}
                </div>
            )}
        </div>
        </section>
    );
};