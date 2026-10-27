import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { texts } = useLanguage();

    const handleNavClick = (id: string) => {
        setActiveSection(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-off-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-14">
            {/* Brand */}
            <button
                onClick={() => handleNavClick('home')}
                className="text-sm font-semibold tracking-widest uppercase text-charcoal dark:text-warm-gray hover:text-accent transition-colors duration-300"
            >
                {texts.NAVBAR_TEXTS.logo}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {texts.NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`flex items-center space-x-2 text-xs uppercase tracking-[0.2em] py-1 transition-all duration-300 border-b ${
                    activeSection === id
                        ? 'text-charcoal dark:text-warm-gray border-accent'
                        : 'text-muted-wc border-transparent hover:text-charcoal dark:hover:text-warm-gray'
                    }`}
                >
                    <Icon size={14} />
                    <span>{label}</span>
                </button>
                ))}
                <LanguageSelector />
                <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
            >
                <div className={`w-5 h-0.5 bg-charcoal dark:bg-warm-gray transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-charcoal dark:bg-warm-gray transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-5 h-0.5 bg-charcoal dark:bg-warm-gray transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
            </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-800 mt-4">
                {texts.NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-300 border-l-2 ${
                    activeSection === id
                        ? 'text-charcoal dark:text-warm-gray border-l-accent'
                        : 'text-muted-wc border-l-transparent hover:text-charcoal dark:hover:text-warm-gray hover:border-l-accent'
                    }`}
                >
                    <Icon size={16} />
                    <span>{label}</span>
                </button>
                ))}
                <div className="pt-4 flex items-center gap-4">
                    <LanguageSelector />
                    <ThemeToggle />
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
};
