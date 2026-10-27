import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const BeyondCode: React.FC = () => {
    const { texts } = useLanguage();

    return (
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
            <h2 className="font-serif text-3xl font-normal text-charcoal dark:text-warm-gray mb-16 text-center">
                {texts.BEYOND_CODE_TEXTS.title}
            </h2>

            <div className="relative max-w-4xl mx-auto px-4">
                {/* Central Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300 dark:bg-gray-700 hidden md:block" />

                {/* Mobile Line */}
                <div className="absolute left-8 w-px h-full bg-gray-300 dark:bg-gray-700 md:hidden" />

                <div className="space-y-12">
                    {texts.BEYOND_CODE_ITEMS.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`relative flex items-center md:justify-between ${!isEven ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Box */}
                                <div className="ml-16 md:ml-0 md:w-[45%]">
                                    <div className="p-6">
                                        <div className="flex items-center mb-3">
                                            {Icon && <Icon className="w-5 h-5 text-muted-wc mr-3" />}
                                            <h3 className="text-lg font-medium text-charcoal dark:text-warm-gray">{item.title}</h3>
                                        </div>
                                        <span className="inline-block text-xs text-muted-wc mb-3">
                                            {item.year}
                                        </span>
                                        <p className="text-sm text-charcoal dark:text-warm-gray leading-relaxed mb-4 whitespace-pre-line">
                                            {item.description}
                                        </p>

                                        {/* Mobile Images */}
                                        {item.images && item.images.length > 0 && (
                                            <div className="md:hidden mt-4 grid gap-4 grid-cols-1">
                                                {item.images.map((img, imgIndex) => (
                                                    <div key={imgIndex} className="border border-gray-200 dark:border-gray-800">
                                                        <img
                                                            src={img}
                                                            alt={`${item.title} ${imgIndex + 1}`}
                                                            className="w-full h-auto object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-2 h-2 bg-charcoal dark:bg-warm-gray rounded-full z-10" />

                                {/* Images Side (Desktop) */}
                                <div className="hidden md:block md:w-[45%]">
                                    {item.images && item.images.length > 0 && (
                                        <div className="grid gap-4 grid-cols-1">
                                            {item.images.map((img, imgIndex) => (
                                                <div key={imgIndex} className="border border-gray-200 dark:border-gray-800">
                                                    <img
                                                        src={img}
                                                        alt={`${item.title} ${imgIndex + 1}`}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
