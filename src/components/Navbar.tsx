import React, { useState } from 'react';
import { NAV_ITEMS } from '@/constants/data';

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (id: string) => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-cyan-400 rotate-45 bg-purple-600/20"></div>
                <span className="text-cyan-400 font-mono text-sm sm:text-lg font-bold">LEGADO.EXE</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
                {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`flex items-center space-x-2 px-3 py-2 font-mono text-sm transition-all duration-300 border ${
                    activeSection === id 
                        ? 'text-purple-400 border-purple-400 bg-purple-400/10' 
                        : 'text-gray-400 border-transparent hover:text-cyan-400 hover:border-cyan-400/50'
                    }`}
                >
                    <Icon size={16} />
                    <span>{label}</span>
                </button>
                ))}
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
            >
                <div className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
            </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="py-4 space-y-2 border-t border-purple-500/30 mt-4">
                {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 font-mono text-sm transition-all duration-300 border-l-2 ${
                    activeSection === id 
                        ? 'text-purple-400 border-l-purple-400 bg-purple-400/10' 
                        : 'text-gray-400 border-l-transparent hover:text-cyan-400 hover:border-l-cyan-400 hover:bg-cyan-400/5'
                    }`}
                >
                    <Icon size={18} />
                    <span>{label}</span>
                </button>
                ))}
            </div>
            </div>
        </div>
        </nav>
    );
};