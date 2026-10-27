import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useFadeIn } from '@/hooks/useFadeIn';

const opacityByLevel: Record<string, string> = {
    High: 'opacity-100',
    Medium: 'opacity-60',
    Low: 'opacity-35',
};

export const Skills: React.FC = () => {
    const { texts } = useLanguage();
    const { ref: fadeRef, isVisible } = useFadeIn();

    return (
        <section ref={fadeRef} className={`min-h-screen py-30 px-6 flex items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <div className="max-w-3xl mx-auto w-full space-y-8">
            <h2 className="font-serif text-4xl font-normal text-charcoal dark:text-warm-gray mb-12">
            {texts.SKILLS_TEXTS.title}
            </h2>

            {texts.SKILL_CATEGORIES.map(({ title, skills }) => (
                <div key={title}>
                    <h3 className="font-serif text-lg text-charcoal dark:text-warm-gray mb-3">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center">
                        {skills.map((skill, i) => (
                            <span key={skill.name} className={`text-charcoal dark:text-warm-gray ${opacityByLevel[skill.level] ?? 'opacity-100'}`}>
                                {i > 0 && <span className="inline-block border-l border-gray-300 dark:border-gray-700 mx-3 h-4 align-middle" />}
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
};
