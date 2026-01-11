import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
    const { texts } = useLanguage();

    return (
        <footer className="border-t border-green-500/30 bg-black/80 py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
            {/* <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-6 h-6 border border-blue-400 bg-blue-600/35 rotate-45 bg-green-600/20"></div>
                <span className="font-mono text-blue-400">HIRO</span>
                <div className="w-6 h-6 border border-green-400 bg-green-600/35 rotate-45 bg-blue-600/20"></div>
            </div> */}
            <div className="font-mono text-gray-400 text-sm">
            {texts.FOOTER_TEXTS.copyright}
            </div>
        </div>
        </footer>
    );
};