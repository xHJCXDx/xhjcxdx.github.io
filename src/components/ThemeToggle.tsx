import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-1.5 rounded-sm border transition-colors duration-300 flex items-center justify-center ${
        theme === 'light'
          ? 'text-yellow-500 border-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20'
          : 'text-gray-400 border-transparent hover:text-blue-400 hover:border-blue-400/50'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
