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
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated abstract lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Verticals */}
            <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gray-800/40 dark:via-gray-400/40 to-transparent rotate-12 origin-top animate-line-drift-1" />
            <div className="absolute top-1/2 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-gray-800/35 dark:via-gray-400/35 to-transparent animate-line-drift-3" />
            <div className="absolute top-1/4 left-8 w-px h-28 bg-gradient-to-b from-transparent via-gray-800/35 dark:via-gray-400/35 to-transparent animate-line-drift-2" />
            <div className="absolute top-10 right-[15%] w-px h-52 bg-gradient-to-b from-transparent via-gray-800/30 dark:via-gray-400/30 to-transparent animate-line-drift-1" />
            <div className="absolute bottom-20 left-[10%] w-px h-36 bg-gradient-to-b from-transparent via-gray-800/25 dark:via-gray-400/25 to-transparent animate-line-drift-3" />
            <div className="absolute top-[15%] left-[55%] w-px h-44 bg-gradient-to-b from-transparent via-gray-800/20 dark:via-gray-400/20 to-transparent -rotate-6 origin-top animate-line-drift-2" />
            <div className="absolute bottom-[10%] right-[35%] w-px h-32 bg-gradient-to-b from-transparent via-gray-800/30 dark:via-gray-400/30 to-transparent rotate-3 origin-bottom animate-line-drift-1" />

            {/* Horizontals */}
            <div className="absolute top-1/3 left-0 w-48 h-px bg-gradient-to-r from-gray-800/50 dark:from-gray-400/50 to-transparent animate-line-drift-2" />
            <div className="absolute bottom-36 right-12 w-32 h-px bg-gradient-to-l from-gray-800/40 dark:from-gray-400/40 to-transparent animate-line-drift-1" />
            <div className="absolute top-20 left-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-800/30 dark:via-gray-400/30 to-transparent animate-line-drift-3" />
            <div className="absolute top-[60%] right-0 w-40 h-px bg-gradient-to-l from-gray-800/35 dark:from-gray-400/35 to-transparent animate-line-drift-2" />
            <div className="absolute top-[18%] left-[40%] w-20 h-px bg-gradient-to-r from-transparent via-gray-800/25 dark:via-gray-400/25 to-transparent animate-line-drift-1" />
            <div className="absolute bottom-[25%] left-[5%] w-36 h-px bg-gradient-to-r from-gray-800/30 dark:from-gray-400/30 to-transparent animate-line-drift-3" />
            <div className="absolute top-[45%] left-0 w-28 h-px bg-gradient-to-r from-gray-800/20 dark:from-gray-400/20 to-transparent animate-line-drift-2" />

            {/* Diagonals */}
            <div className="absolute top-[5%] right-[10%] w-px h-72 bg-gradient-to-b from-transparent via-gray-800/25 dark:via-gray-400/25 to-transparent -rotate-[18deg] origin-top animate-line-drift-3" />
            <div className="absolute bottom-[15%] left-[20%] w-px h-48 bg-gradient-to-b from-transparent via-gray-800/20 dark:via-gray-400/20 to-transparent rotate-[15deg] origin-bottom animate-line-drift-1" />
            <div className="absolute top-[40%] right-[5%] w-px h-56 bg-gradient-to-b from-transparent via-gray-800/20 dark:via-gray-400/20 to-transparent rotate-[10deg] origin-center animate-line-drift-2" />
            <div className="absolute top-[8%] left-[60%] w-px h-40 bg-gradient-to-b from-transparent via-gray-800/15 dark:via-gray-400/15 to-transparent -rotate-[22deg] origin-top animate-line-drift-3" />
        </div>

        <div className="relative w-full max-w-3xl px-6 lg:px-0">
            {/* Cinematic light — anchored behind name/developer area */}
            <div className="absolute top-0 left-0 w-full h-40 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-16 -left-20 w-[500px] h-[250px] bg-black/15 dark:bg-gray-300/10 rounded-full blur-3xl animate-light-drift-1" />
                <div className="absolute -top-8 left-16 w-[350px] h-[200px] bg-black/12 dark:bg-gray-400/8 rounded-full blur-3xl animate-light-drift-2" />
                <div className="absolute top-0 -left-8 w-[280px] h-[180px] bg-black/10 dark:bg-gray-500/7 rounded-full blur-3xl animate-light-drift-3" />
            </div>

            <h1 className="relative z-10 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-normal text-charcoal dark:text-warm-gray mb-4">
            {texts.HOME_TEXTS.name}
            </h1>

            <div className="relative z-10 text-base text-muted-wc font-light mb-2 h-6">
            {displayText}<span className="animate-blink">|</span>
            </div>

            <p className="text-sm text-muted-wc/60 italic font-serif mb-12">
            {texts.HOME_TEXTS.subtitle}
            </p>

            <Console setActiveSection={setActiveSection} />
        </div>
        </section>
    );
};
