import fs from 'fs';
import path from 'path';

const map = {
  'bg-white': 'bg-background',
  'bg-white/90': 'bg-background/90',
  'bg-white/80': 'bg-background/80',
  'bg-white/70': 'bg-background/70',
  'bg-slate-50': 'bg-surface',
  'bg-slate-100': 'bg-surface-hover',
  'text-slate-900': 'text-text-primary',
  'text-slate-800': 'text-text-primary',
  'text-slate-700': 'text-text-secondary',
  'text-slate-600': 'text-text-secondary',
  'text-slate-500': 'text-text-secondary',
  'text-slate-400': 'text-text-muted',
  'border-slate-100': 'border-border',
  'border-slate-200': 'border-border',
  'divide-slate-100': 'divide-border',
  'divide-slate-200': 'divide-border',
  'text-indigo-600': 'text-primary',
  'text-indigo-700': 'text-primary-hover',
  'bg-indigo-600': 'bg-primary',
  'bg-indigo-700': 'bg-primary-hover',
  'bg-indigo-50': 'bg-primary/10',
  'bg-indigo-100': 'bg-primary/20',
  'text-indigo-200': 'text-primary-light',
  'text-indigo-100': 'text-primary-light',
};

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // regex to replace word boundaries of these classes
      for (const [key, value] of Object.entries(map)) {
        // use regex to avoid partial matches
        const regex = new RegExp(`(?<=['"\\s\`])(${key.replace(/\//g, '\\/')})(?=['"\\s\`])`, 'g');
        content = content.replace(regex, value);
      }
      fs.writeFileSync(fullPath, content);
    }
  }
};

walk('src');
console.log('Replacement complete.');
