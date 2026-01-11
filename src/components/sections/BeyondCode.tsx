import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const BeyondCode: React.FC = () => {
    const { texts } = useLanguage();

    return (
        <div className="mt-20 pt-10 border-t border-purple-500/20">
            <h2 className="text-3xl font-mono font-bold text-white mb-16 text-center">
                {texts.BEYOND_CODE_TEXTS.title}
            </h2>

            <div className="relative max-w-4xl mx-auto px-4">
                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/50 via-cyan-400/50 to-purple-500/50 rounded-full hidden md:block"></div>
                
                {/* Mobile Line (Left side) */}
                <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-purple-500/50 via-cyan-400/50 to-purple-500/50 rounded-full md:hidden"></div>

                <div className="space-y-12">
                    {texts.BEYOND_CODE_ITEMS.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`relative flex items-center md:justify-between ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Content Box */}
                                <div className="ml-16 md:ml-0 md:w-[45%]">
                                    <div className={`p-6 bg-black/40 border border-purple-500/30 rounded-lg hover:border-cyan-400/50 transition-all duration-300 group`}>
                                        <div className="flex items-center mb-3">
                                            {Icon && <Icon className="w-6 h-6 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />}
                                            <h3 className="text-xl font-bold text-white font-mono">{item.title}</h3>
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-mono mb-3 border border-purple-500/30">
                                            {item.year}
                                        </span>
                                        <p className="text-gray-400 text-sm font-mono leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                        
                                        {item.image && (
                                            <div className="overflow-hidden rounded-lg border border-purple-500/20 bg-black/40">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                                    <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-0 hover:opacity-100 animate-ping"></div>
                                </div>

                                {/* Empty space for the other side (Desktop only) */}
                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
