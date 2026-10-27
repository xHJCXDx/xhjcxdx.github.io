import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const BeyondCode: React.FC = () => {
    const { texts } = useLanguage();
    const hiro = texts.PROJECTS.find((p) => p.title === 'Hiro');

    if (!hiro) return null;

    return (
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
            <h2 className="font-serif text-3xl font-normal text-charcoal dark:text-warm-gray mb-6 text-center">
                {texts.BEYOND_CODE_TEXTS.title}
            </h2>
            <p className="text-sm text-muted-wc text-center mb-14 max-w-md mx-auto">
                {texts.BEYOND_CODE_TEXTS.subtitle}
            </p>

            <div className="max-w-3xl mx-auto">
                <a
                    href={hiro.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden"
                >
                    {/* Image preview */}
                    {hiro.images?.[0] && (
                        <div className="relative aspect-[16/7] overflow-hidden">
                            <img
                                src={hiro.images[0]}
                                alt={hiro.title}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-off-black/80 via-transparent to-transparent" />

                            {/* Floating label */}
                            <div className="absolute bottom-6 left-8">
                                <span className="font-serif text-2xl text-charcoal dark:text-warm-gray">
                                    {hiro.title}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Info strip */}
                    <div className="px-8 py-6 flex items-center justify-between gap-6">
                        <p className="text-sm text-muted-wc leading-relaxed flex-1">
                            {hiro.description}
                        </p>
                        <span className="text-xs text-accent uppercase tracking-widest whitespace-nowrap group-hover:tracking-[0.2em] transition-all duration-300">
                            {texts.BEYOND_CODE_TEXTS.visitLabel} &rarr;
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};
