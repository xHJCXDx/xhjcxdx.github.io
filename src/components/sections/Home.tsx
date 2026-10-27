import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Console } from '@/components/console/Console';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
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

    return (
        <section className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl px-6 lg:px-0">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-normal text-charcoal dark:text-warm-gray mb-4">
            {texts.HOME_TEXTS.name}
            </h1>

            <div className="text-base text-muted-wc font-light mb-12 h-6">
            {displayText}<span className="animate-blink">|</span>
            </div>

            <Console setActiveSection={setActiveSection} />
        </div>
        </section>
    );
};
