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

      // --- Hidden commands: filesystem ---
      case 'ls':
        output = [
          [seg('about.txt  ', 'cyan'), seg('skills.json  ', 'cyan'), seg('projects/  ', 'blue'), seg('contact.md  ', 'cyan'), seg('.secrets  ', 'purple')],
        ];
        break;
      case 'pwd':
        output = [[seg('/home/hiro/portfolio', 'cyan')]];
        break;
      case 'cd':
        output = [[seg('there is nowhere else to go.', 'yellow')]];
        break;
      case 'cat':
        output = args.length
          ? [[seg(`  meow. "${args[0]}" purred successfully.`, 'cyan')]]
          : [[seg('usage: cat <file> — but this cat just purrs.', 'yellow')]];
        break;
      case 'touch':
        output = [[seg('file created. just kidding, this is read-only.', 'yellow')]];
        break;
      case 'mkdir':
        output = [[seg('permission denied: the architecture is already perfect.', 'red')]];
        break;
      case 'cp':
      case 'mv':
        output = [[seg('nice try. files here are immutable.', 'yellow')]];
        break;
      case 'chmod':
        output = [[seg('permissions are fine. trust me.', 'yellow')]];
        break;
      case 'find':
        output = [[seg('you found it. you\'re already here.', 'green')]];
        break;

      // --- Hidden commands: system ---
      case 'echo':
        output = args.length
          ? [[seg(args.join(' '))]]
          : [plain('')];
        break;
      case 'man':
        output = [[seg('RTFM? in this economy? type ', 'yellow'), seg('help', 'green'), seg('.', 'yellow')]];
        break;
      case 'date':
        output = [[seg(new Date().toLocaleString(), 'cyan')]];
        break;
      case 'uname':
        output = [[seg('HiroOS 1.0.0 — Web Portfolio Runtime', 'cyan')]];
        break;
      case 'uptime':
        output = [[seg('up since you opened this tab. so... a while.', 'cyan')]];
        break;
      case 'history':
        // Resolved inside setHistory updater to avoid stale closure
        setHistory((prev) => {
          const histOutput = prev.length
            ? prev.slice(-5).map((e, i) => [seg(`  ${i + 1}  `, 'blue'), seg(e.input)])
            : [[seg('no history yet.', 'yellow')]];
          return [...prev, { input: trimmed, output: histOutput }];
        });
        return;
      case 'exit':
      case 'logout':
      case 'quit':
        output = [[seg('you can check out any time you like, but you can never leave.', 'purple')]];
        break;
      case 'reboot':
      case 'shutdown':
        output = [[seg('system is critical. shutdown aborted.', 'red')]];
        break;
      case 'top':
      case 'htop':
        output = [
          [seg('  PID  PROCESS        CPU%', 'blue')],
          [seg('  001  portfolio       99.9')],
          [seg('  002  creativity      88.4')],
          [seg('  003  coffee.daemon   100.0', 'yellow')],
        ];
        break;
      case 'ps':
        output = [
          [seg('  PID  TTY   CMD', 'blue')],
          [seg('  1    web   /bin/portfolio')],
          [seg('  2    web   react --serve')],
        ];
        break;
      case 'kill':
        output = [[seg('you can\'t kill what\'s already immortal.', 'red')]];
        break;
      case 'hostname':
        output = [[seg('hiro.dev', 'cyan')]];
        break;
      case 'ping':
        output = args.length
          ? [
              [seg(`PING ${args[0]}: `, 'cyan'), seg('64 bytes — time=1ms')],
              [seg(`PING ${args[0]}: `, 'cyan'), seg('64 bytes — time=<1ms')],
              [seg('2 packets sent, 2 received, ', 'green'), seg('0% loss')],
            ]
          : [[seg('usage: ping <host>', 'yellow')]];
        break;
      case 'curl':
      case 'wget':
        output = [[seg('HTTP/1.1 ', 'cyan'), seg('200 OK', 'green'), seg(' — you\'re already on the best site.')]];
        break;
      case 'ssh':
        output = [[seg('connection refused: this server only accepts visitors.', 'yellow')]];
        break;
      case 'ifconfig':
      case 'ip':
        output = [
          [seg('lo: ', 'cyan'), seg('127.0.0.1')],
          [seg('eth0: ', 'cyan'), seg('nice try. not leaking that.')],
        ];
        break;

      // --- Hidden commands: dev tools ---
      case 'git':
        if (args[0] === 'status') {
          output = [
            [seg('On branch ', 'cyan'), seg('main', 'green')],
            [seg('nothing to commit, portfolio is clean', 'green')],
          ];
        } else if (args[0] === 'log') {
          output = [
            [seg('* ', 'yellow'), seg('feat: add interactive console', 'green')],
            [seg('* ', 'yellow'), seg('feat: white cube redesign')],
            [seg('* ', 'yellow'), seg('init: portfolio v1')],
          ];
        } else if (args[0] === 'push') {
          output = [[seg('everything up-to-date. ', 'green'), seg('(already deployed)')]];
        } else {
          output = [[seg('git: ', 'cyan'), seg('the portfolio is already version-controlled.')]];
        }
        break;
      case 'node':
      case 'bun':
      case 'deno':
        output = [[seg(`${command} v∞.0.0 — `, 'green'), seg('this runtime never crashes.')]];
        break;
      case 'npm':
      case 'yarn':
      case 'pnpm':
        if (args[0] === 'install' || args[0] === 'i') {
          output = [
            [seg('added 1 package: ', 'green'), seg('talent.js')],
            [seg('0 vulnerabilities', 'green')],
          ];
        } else {
          output = [[seg(`${command}: `, 'cyan'), seg('all dependencies are already satisfied.', 'green')]];
        }
        break;
      case 'python':
      case 'python3':
        output = [[seg('Python 3.∞.0 ', 'yellow'), seg('— import antigravity')]];
        break;
      case 'pip':
        output = [[seg('requirement already satisfied: ', 'green'), seg('everything')]];
        break;
      case 'java':
        output = [[seg('Exception in thread "main": ', 'red'), seg('TooMuchBoilerplateException')]];
        break;
      case 'javac':
        output = [[seg('compiling... ', 'yellow'), seg('NullPointerException. as expected.', 'red')]];
        break;
      case 'gcc':
      case 'g++':
        output = [[seg('segmentation fault', 'red'), seg(' (core dumped). classic.')]];
        break;
      case 'cargo':
      case 'rustc':
        output = [[seg('compiling portfolio v1.0.0', 'cyan')], [seg('0 warnings. ', 'green'), seg('the borrow checker approves.')]];
        break;
      case 'go':
        output = [[seg('go: ', 'cyan'), seg('module portfolio is tidy. no changes needed.', 'green')]];
        break;
      case 'docker':
        if (args[0] === 'ps') {
          output = [
            [seg('CONTAINER ID  IMAGE           STATUS', 'blue')],
            [seg('a1b2c3d4      hiro/portfolio  Up since forever', 'green')],
          ];
        } else {
          output = [[seg('docker: ', 'cyan'), seg('this portfolio runs natively. no container needed.')]];
        }
        break;
      case 'make':
        output = [[seg('make: nothing to be done for \'all\'. portfolio is already built.', 'green')]];
        break;

      // --- Hidden commands: editors ---
      case 'vim':
      case 'nvim':
        output = [[seg('welcome to vim. good luck getting out. ', 'green'), seg('hint: :q!', 'yellow')]];
        break;
      case 'nano':
        output = [[seg('nano? really? use vim like a real dev.', 'purple')]];
        break;
      case 'emacs':
        output = [[seg('emacs is not an editor. it\'s an operating system.', 'purple')]];
        break;
      case 'code':
        output = [[seg('opening VS Code... ', 'blue'), seg('just kidding. you\'re already in a better environment.')]];
        break;

      // --- Hidden commands: apps ---
      case 'firefox':
      case 'chrome':
      case 'chromium':
      case 'brave':
      case 'safari':
        output = [[seg(`${command}: `, 'cyan'), seg('you\'re already using a browser. inception?')]];
        break;
      case 'spotify':
        output = [[seg('♪ now playing: ', 'green'), seg('lofi hip hop beats to code/relax to', 'purple')]];
        break;
      case 'discord':
        output = [[seg('discord: ', 'blue'), seg('DM me a project idea.')]];
        break;
      case 'slack':
        output = [[seg('slack: ', 'cyan'), seg('you have 47 unread messages. as usual.', 'yellow')]];
        break;
      case 'teams':
        output = [[seg('teams: ', 'blue'), seg('could not connect. and nothing of value was lost.', 'yellow')]];
        break;

      // --- Hidden commands: fun ---
      case 'cowsay':
        output = [
          plain('  _______________'),
          plain(' < hire hiro! >'),
          plain('  ---------------'),
          plain('         \\   ^__^'),
          plain('          \\  (oo)\\_______'),
          plain('             (__)\\       )\\/\\'),
          plain('                 ||----w |'),
          plain('                 ||     ||'),
        ];
        break;
      case 'fortune':
        output = [[seg('"The best code is no code at all."', 'purple'), seg(' — Jeff Atwood')]];
        break;
      case 'matrix':
        output = [
          [seg('wake up, Neo...', 'green')],
          [seg('the Matrix has you...', 'green')],
          [seg('follow the white rabbit.', 'green')],
        ];
        break;
      case 'hack':
      case 'nmap':
      case 'metasploit':
      case 'burpsuite':
      case 'wireshark':
        output = [
          [seg('ACCESS GRANTED', 'green')],
          [seg('just kidding. but nice taste in tools.', 'cyan')],
        ];
        break;
      case 'apt':
      case 'pacman':
      case 'brew':
      case 'dnf':
      case 'yum':
        output = [[seg('0 upgrades, 0 installs. ', 'green'), seg('this system is perfectly configured.')]];
        break;
      case 'alias':
        output = [[seg('alias ', 'cyan'), seg('hire', 'green'), seg('='), seg('"send offer to hiro"', 'yellow')]];
        break;
      case 'lolcat':
        output = [[seg('r', 'red'), seg('a', 'yellow'), seg('i', 'green'), seg('n', 'cyan'), seg('b', 'blue'), seg('o', 'purple'), seg('w')]];
        break;
      case 'yes':
        output = [[seg('yes yes yes yes yes yes yes', 'green')]];
        break;
      case 'no':
        output = [[seg('no is not a valid command. try yes.', 'yellow')]];
        break;
      case 'hello':
      case 'hi':
      case 'hola':
        output = [[seg('hey! ', 'green'), seg('type '), seg('help', 'cyan'), seg(' to see what I can do.')]];
        break;
      case 'thanks':
      case 'gracias':
      case 'thx':
        output = [[seg('you\'re welcome! ', 'green'), seg('enjoy the portfolio.')]];
        break;

      default:
        output = [[seg(t.unknownCommand(command), 'yellow')]];
    }

    setHistory((prev) => [...prev, { input: trimmed, output }]);
  }, [t, texts, language, setLanguage, theme, toggleTheme, setActiveSection]);

  const clearHistory = useCallback(() => setHistory([]), []);

  return { history, execute, clearHistory };
};
