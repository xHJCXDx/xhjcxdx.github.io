import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-mono border ${
          language === 'en'
            ? 'text-green-400 border-green-400 bg-green-400/10'
            : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-blue-400'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 text-sm font-mono border ${
          language === 'es'
            ? 'text-green-400 border-green-400 bg-green-400/10'
            : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-blue-400'
        }`}
      >
        ES
      </button>
    </div>
  );
};