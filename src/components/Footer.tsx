import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
    const { texts } = useLanguage();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <div className="text-sm text-muted-wc">
            {texts.FOOTER_TEXTS.copyright}
            </div>
        </div>
        </footer>
    );
};
