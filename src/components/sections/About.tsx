import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useFadeIn } from '@/hooks/useFadeIn';
import { MoreInfo } from './MoreInfo';
import { BeyondCode } from './BeyondCode';

export const About: React.FC = () => {
    const { texts } = useLanguage();
    const { ref: fadeRef, isVisible } = useFadeIn();
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
        <section ref={fadeRef} className={`min-h-screen py-30 px-6 flex flex-col justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="max-w-5xl mx-auto w-full">
            <div className="mb-16">
                <h2 className="font-serif text-4xl font-normal text-charcoal dark:text-warm-gray mb-8">
                {texts.ABOUT_TEXTS.title}
                </h2>
                <div className="space-y-6 text-charcoal dark:text-warm-gray leading-relaxed">
                {texts.ABOUT_TEXTS.description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
                </div>
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
