import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useConsoleCommands } from './useConsoleCommands';

interface ConsoleProps {
  setActiveSection: (section: string) => void;
}

const colorClass: Record<string, string> = {
  green: 'text-green-500 dark:text-green-400',
  yellow: 'text-yellow-600 dark:text-yellow-400',
  cyan: 'text-cyan-600 dark:text-cyan-400',
  red: 'text-red-500 dark:text-red-400',
  blue: 'text-blue-500 dark:text-blue-400',
  purple: 'text-purple-500 dark:text-purple-400',
};

export const Console: React.FC<ConsoleProps> = ({ setActiveSection }) => {
  const { texts } = useLanguage();
  const { history, execute } = useConsoleCommands(setActiveSection);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    execute(input);
    setInput('');
  };

  return (
    <div
      className="w-full max-w-lg mx-auto text-left font-mono text-sm border border-gray-200 dark:border-gray-800 p-4"
      onClick={() => inputRef.current?.focus()}
    >
      {history.length > 0 && (
        <div
          ref={outputRef}
          aria-live="polite"
          className="max-h-40 overflow-y-auto mb-3 space-y-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {history.map((entry, i) => (
            <div key={i} className="space-y-1">
              <div className="text-charcoal dark:text-warm-gray">
                <span className="text-accent font-bold">&gt; </span>
                {entry.input}
              </div>
              {entry.output.map((segments, j) => (
                <div key={j} className="pl-4 whitespace-pre-wrap break-words text-charcoal dark:text-warm-gray">
                  {segments.map((s, k) => (
                    <span key={k} className={s.color ? colorClass[s.color] : undefined}>{s.text}</span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span className="text-accent font-bold">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={texts.CONSOLE_TEXTS.placeholder}
          className="flex-1 bg-transparent border-none outline-none text-charcoal dark:text-warm-gray placeholder-gray-400 dark:placeholder-gray-600 caret-accent"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
};
