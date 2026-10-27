import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setLanguage('en')}
        className={`text-xs uppercase tracking-widest transition-colors duration-300 pb-0.5 ${
          language === 'en'
            ? 'text-charcoal dark:text-warm-gray border-b border-accent'
            : 'text-muted-wc hover:text-charcoal dark:hover:text-warm-gray'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`text-xs uppercase tracking-widest transition-colors duration-300 pb-0.5 ${
          language === 'es'
            ? 'text-charcoal dark:text-warm-gray border-b border-accent'
            : 'text-muted-wc hover:text-charcoal dark:hover:text-warm-gray'
        }`}
      >
        ES
      </button>
    </div>
  );
};
