import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
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

    return (
        <section className="min-h-screen py-30 px-6 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start mb-16">
            {/* Left — placeholder frame */}
            <div className="hidden lg:flex items-center justify-center">
                <div className="w-full aspect-square border border-gray-200 dark:border-gray-800" />
            </div>

            {/* Right — bio */}
            <div>
                <h2 className="font-serif text-4xl font-normal text-charcoal dark:text-warm-gray mb-8">
                {texts.ABOUT_TEXTS.title}
                </h2>
                <div className="space-y-6 text-charcoal dark:text-warm-gray leading-relaxed">
                {texts.ABOUT_TEXTS.description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                </div>
            </div>
            </div>

            {/* Stats — horizontal, large numbers */}
            <div className="flex flex-wrap justify-center gap-16 mb-16">
            {texts.ABOUT_TEXTS.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                    <div className="text-5xl font-serif text-charcoal dark:text-warm-gray">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-wc mt-2">{stat.label}</div>
                </div>
            ))}
            </div>

            {/* More Info toggle */}
            {!showMoreInfo && (
                <div className="flex justify-center">
                    <button
                        onClick={handleShowMore}
                        className="text-sm text-muted-wc hover:text-accent transition-colors"
                    >
                        {texts.MORE_INFO_TEXTS.buttonText}
                    </button>
                </div>
            )}

            {showMoreInfo && (
                <div ref={moreInfoRef} className="animate-fade-in">
                    <MoreInfo />

                    {!showBeyondCode && (
                        <div className="flex justify-center mt-12 pb-10">
                            <button
                                onClick={handleShowBeyondCode}
                                className="text-sm text-muted-wc hover:text-accent transition-colors"
                            >
                                {texts.BEYOND_CODE_TEXTS.buttonText}
                            </button>
                        </div>
                    )}

                    {showBeyondCode && (
                        <div ref={beyondCodeRef} className="animate-fade-in">
                            <BeyondCode />
                        </div>
                    )}
                </div>
            )}
        </div>
        </section>
    );
};
