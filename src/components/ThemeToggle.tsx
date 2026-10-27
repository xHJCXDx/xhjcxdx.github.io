import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 text-charcoal dark:text-warm-gray hover:text-accent transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
