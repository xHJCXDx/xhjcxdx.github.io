import { useState, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

interface ConsoleEntry {
  input: string;
  output: string[];
}

const VALID_SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'] as const;

export const useConsoleCommands = (
  setActiveSection: (section: string) => void
) => {
  const [history, setHistory] = useState<ConsoleEntry[]>([]);
  const { texts, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const t = texts.CONSOLE_TEXTS;

  const execute = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const [command, ...args] = trimmed.toLowerCase().split(/\s+/);
    let output: string[];

    switch (command) {
      case 'help':
        output = t.help;
        break;

      case 'about':
        output = t.about;
        break;

      case 'skills':
        output = texts.SKILL_CATEGORIES.map(
          (cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`
        );
        break;

      case 'projects':
        output = texts.PROJECTS.map(
          (p) => `${p.title} — ${p.description} [${p.status}]`
        );
        break;

      case 'contact':
        output = texts.CONTACT_METHODS.map(
          (c) => `${c.title}: ${c.subtitle}`
        );
        break;

      case 'goto': {
        const section = args[0];
        if (!section) {
          output = [t.gotoUsage];
        } else if (VALID_SECTIONS.includes(section as typeof VALID_SECTIONS[number])) {
          output = [t.gotoSuccess(section)];
          setTimeout(() => setActiveSection(section), 300);
        } else {
          output = [t.gotoInvalid(section)];
        }
        break;
      }

      case 'whoami':
        output = [t.whoami];
        break;

      case 'lang': {
        const lang = args[0];
        if (!lang) {
          output = [t.langCurrent(language)];
        } else if (lang === 'en' || lang === 'es') {
          setLanguage(lang);
          output = [t.langSwitched(lang)];
        } else {
          output = [t.langInvalid];
        }
        break;
      }

      case 'theme':
        toggleTheme();
        output = [t.themeToggled(theme === 'dark' ? 'light' : 'dark')];
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        output = [t.unknownCommand(command)];
    }

    setHistory((prev) => [...prev, { input: trimmed, output }]);
  }, [t, texts, language, setLanguage, theme, toggleTheme, setActiveSection]);

  const clearHistory = useCallback(() => setHistory([]), []);

  return { history, execute, clearHistory };
};
