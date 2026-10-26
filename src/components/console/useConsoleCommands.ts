import { useState, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

type Color = 'green' | 'yellow' | 'cyan' | 'red' | 'blue' | 'purple';

export interface ConsoleSegment {
  text: string;
  color?: Color;
}

export type ConsoleLine = ConsoleSegment[];

export interface ConsoleEntry {
  input: string;
  output: ConsoleLine[];
}

const VALID_SECTIONS = ['home', 'about', 'skills', 'projects', 'contact'] as const;

const seg = (text: string, color?: Color): ConsoleSegment => ({ text, color });
const plain = (text: string): ConsoleLine => [seg(text)];

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
    let output: ConsoleLine[];

    switch (command) {
      case 'help':
        output = t.help.map((h) => {
          const match = h.match(/^(\s*\S+)(\s+\.+\s+)(.+)$/);
          if (match) {
            return [seg(match[1], 'green'), seg(match[2]), seg(match[3])];
          }
          return [seg(h, h.includes(':') ? 'cyan' : undefined)];
        });
        break;

      case 'about':
        output = t.about.map((a) => [seg(a, 'cyan')]);
        break;

      case 'skills':
        output = texts.SKILL_CATEGORIES.map((cat) => [
          seg(`${cat.title}: `, 'cyan'),
          seg(cat.skills.map((s) => s.name).join(', ')),
        ]);
        break;

      case 'projects':
        output = texts.PROJECTS.map((p) => [
          seg(p.title, 'blue'),
          seg(' — '),
          seg(p.description),
          seg(` [${p.status}]`, p.status === 'COMPLETED' || p.status === 'COMPLETADO' ? 'green' : 'yellow'),
        ]);
        break;

      case 'contact':
        output = texts.CONTACT_METHODS.map((c) => [
          seg(`${c.title}: `, 'purple'),
          seg(c.subtitle),
        ]);
        break;

      case 'goto': {
        const section = args[0];
        if (!section) {
          output = [[seg('usage: ', 'yellow'), seg('goto <section>'), seg(' (home, about, skills, projects, contact)', 'yellow')]];
        } else if (VALID_SECTIONS.includes(section as typeof VALID_SECTIONS[number])) {
          output = [[seg(t.gotoSuccess(section), 'green')]];
          setTimeout(() => setActiveSection(section), 300);
        } else {
          output = [[seg(t.gotoInvalid(section), 'yellow')]];
        }
        break;
      }

      case 'whoami':
        output = [[seg(t.whoami, 'cyan')]];
        break;

      case 'lang': {
        const lang = args[0];
        if (!lang) {
          output = [[seg(t.langCurrent(language), 'cyan')]];
        } else if (lang === 'en' || lang === 'es') {
          setLanguage(lang);
          output = [[seg(t.langSwitched(lang), 'green')]];
        } else {
          output = [[seg(t.langInvalid, 'yellow')]];
        }
        break;
      }

      case 'theme':
        toggleTheme();
        output = [[seg(t.themeToggled(theme === 'dark' ? 'light' : 'dark'), 'green')]];
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'sudo':
        output = [[seg(t.sudo, 'red')]];
        break;

      case 'rm':
        if (args.join(' ') === '-rf /') {
          output = t.rmrf.map((l) => [seg(l, 'red')]);
        } else {
          output = [plain(t.unknownCommand(trimmed))];
        }
        break;

      case 'neofetch':
        output = t.neofetch.map((l) => {
          const match = l.match(/^(\s*\w+:)(\s+.+)$/);
          if (match) {
            return [seg(match[1], 'blue'), seg(match[2])];
          }
          return [seg(l, 'cyan')];
        });
        break;

      default:
        output = [[seg(t.unknownCommand(command), 'yellow')]];
    }

    setHistory((prev) => [...prev, { input: trimmed, output }]);
  }, [t, texts, language, setLanguage, theme, toggleTheme, setActiveSection]);

  const clearHistory = useCallback(() => setHistory([]), []);

  return { history, execute, clearHistory };
};
