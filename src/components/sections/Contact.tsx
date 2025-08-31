import React from 'react';
import { CONTACT_METHODS } from '@/constants/data';

export const Contact: React.FC = () => {
    return (
        <section className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-mono font-bold text-white mb-12 border-b border-purple-400 pb-4">
            CONTACT.EXE
            </h2>
            
            <div className="mb-12">
            <p className="text-xl font-mono text-gray-300 mb-8">
                &gt; ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {CONTACT_METHODS.map(({ href, icon: Icon, title, subtitle, color }) => (
                <a key={title} href={href} className="group">
                    <div className={`border border-${color}-400/50 p-6 bg-${color}-400/5 hover:bg-${color}-400/10 transition-all`}>
                    <Icon className={`mx-auto mb-4 text-${color}-400`} size={32} />
                    <div className={`font-mono text-${color}-400`}>{title}</div>
                    <div className="font-mono text-gray-300 text-sm">{subtitle}</div>
                    </div>
                </a>
                ))}
            </div>
            </div>

            <div className="border border-purple-500/50 p-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
            <div className="text-2xl font-mono text-white mb-4">
                READY TO <span className="text-cyan-400">COLLABORATE</span>?
            </div>
            <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300">
                INICIAR PROYECTO
            </button>
            </div>
        </div>
        </section>
    );
};