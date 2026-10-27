import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const MoreInfo: React.FC = () => {
  const { texts } = useLanguage();

  return (
    <div id="more-info-section" className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
      <h2 className="font-serif text-3xl font-normal text-charcoal dark:text-warm-gray mb-12 text-center">
        {texts.MORE_INFO_TEXTS.title}
      </h2>

      <div className="space-y-16">
        {texts.MORE_INFO_CATEGORIES.map((category) => (
          <div key={category.id}>
            <h3 className="font-serif text-xl text-charcoal dark:text-warm-gray mb-6">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <div key={index} className="border-t border-gray-200 dark:border-gray-800 pt-6">
                  <h4 className="text-base font-medium text-charcoal dark:text-warm-gray mb-1">
                    {item.title}
                  </h4>

                  <div className="flex items-center text-xs text-muted-wc mb-3 space-x-3">
                    <span>{item.institution}</span>
                    <span>&middot;</span>
                    <span>{item.date}</span>
                  </div>

                  {item.description && (
                    <p className="text-sm text-charcoal dark:text-warm-gray leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.image && (
                    <div className="mt-4 border border-gray-200 dark:border-gray-800 bg-white dark:bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-contain p-2"
                      />
                    </div>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs text-accent hover:opacity-70 transition-opacity"
                    >
                      {item.button}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
