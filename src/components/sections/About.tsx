import React from 'react';

export const About: React.FC = () => {
    return (
        <section className="min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-mono font-bold text-white mb-8 border-b border-cyan-400 pb-4">
                ABOUT.EXE
                </h2>
                <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
                <p>
                    &gt; Contributing my bit to this world full of challenges.
                </p>
                <p>
                    &gt; Backend programmer
                </p>
                <p>
                    &gt; I like simple and functional things.
                </p>
                </div>
            </div>
            
            <div className="relative">
                <div className="border-2 border-purple-500/50 p-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="border border-cyan-400/30 p-4">
                    <div className="text-2xl font-mono font-bold text-cyan-400">6</div>
                    <div className="text-sm text-gray-400 font-mono">PROJECTS</div>
                    </div>
                    <div className="border border-purple-400/30 p-4">
                    <div className="text-2xl font-mono font-bold text-purple-400">6</div>
                    <div className="text-sm text-gray-400 font-mono">YEARS</div>
                    </div>
                    <div className="border border-cyan-400/30 p-4">
                    <div className="text-2xl font-mono font-bold text-cyan-400">166+</div>
                    <div className="text-sm text-gray-400 font-mono">CONTRIBUTIONS</div>
                    </div>
                    <div className="border border-purple-400/30 p-4">
                    <div className="text-2xl font-mono font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-400 font-mono">DEDICACIÓN</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};