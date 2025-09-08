import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-gray-200/30 dark:border-purple-500/30 bg-white/80 dark:bg-black/80 py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
            {/* <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-6 h-6 border border-cyan-400 bg-cyan-600/35 rotate-45 bg-purple-600/20"></div>
                <span className="font-mono text-cyan-400">HIRO</span>
                <div className="w-6 h-6 border border-purple-400 bg-purple-600/35 rotate-45 bg-cyan-600/20"></div>
            </div> */}
            <div className="font-mono text-gray-600 dark:text-gray-400 text-sm">
            © 2025 xHJCXDx Developer. All rights reserved.
            </div>
        </div>
        </footer>
    );
};