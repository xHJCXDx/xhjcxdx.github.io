import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Building } from 'lucide-react';

export const MoreInfo: React.FC = () => {
  const { texts } = useLanguage();

  return (
    <div id="more-info-section" className="mt-20 pt-10 border-t border-purple-500/20">
      <h2 className="text-3xl font-mono font-bold text-white mb-12 text-center">
        {texts.MORE_INFO_TEXTS.title}
      </h2>

      <div className="space-y-16">
        {texts.MORE_INFO_CATEGORIES.map((category) => (
          <div key={category.id} className="relative">
            <h3 className="text-xl font-mono font-bold text-cyan-400 mb-6 flex items-center">
              <span className="w-8 h-[2px] bg-cyan-400 mr-4"></span>
              {category.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, index) => (
                <div key={index} className="group relative border border-purple-500/30 bg-purple-900/10 p-6 hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all duration-300">
                  <div className="absolute -left-1 top-6 w-1 h-8 bg-purple-500 group-hover:bg-cyan-400 transition-colors"></div>

                  <div className="flex flex-col h-full pl-4">
                    <h4 className="text-lg font-bold text-white font-mono mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex items-center text-sm text-gray-400 font-mono mb-3 space-x-4">
                      <div className="flex items-center">
                        <Building size={14} className="mr-2 text-purple-400" />
                        <span>{item.institution}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2 text-purple-400" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-gray-300 text-sm font-mono leading-relaxed mt-2">
                        {item.description}
                      </p>
                    )}

                    {(item.image || item.url) && (
                      <div className="mt-4 pt-4 border-t border-gray-700/50">
                        {item.image && (
                          <div className="mb-4 overflow-hidden rounded-lg border border-purple-500/20 bg-black/40 bg-white">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-48 object-contain p-2 hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        {item.url && (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline">
                            {item.button}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
