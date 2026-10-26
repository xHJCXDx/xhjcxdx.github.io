import React, { useState, useEffect } from 'react';
import * as en from '@/constants/data.en';
import * as es from '@/constants/data.es';
import { LanguageContext, type Language } from './LanguageContext';

// Translations

const translations = { en, es };

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
