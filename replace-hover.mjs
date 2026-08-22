import fs from 'fs';
import path from 'path';

const map = {
  'hover:bg-slate-50': 'hover:bg-surface',
  'hover:bg-slate-100': 'hover:bg-surface-hover',
  'hover:text-slate-900': 'hover:text-text-primary',
  'hover:text-slate-700': 'hover:text-text-secondary',
  'hover:text-slate-600': 'hover:text-text-secondary',
  'hover:text-slate-500': 'hover:text-text-secondary',
  'hover:border-slate-100': 'hover:border-border',
  'hover:border-slate-200': 'hover:border-border',
  'hover:text-indigo-600': 'hover:text-primary',
  'hover:text-indigo-700': 'hover:text-primary-hover',
  'hover:bg-indigo-600': 'hover:bg-primary',
  'hover:bg-indigo-700': 'hover:bg-primary-hover',
  'hover:bg-indigo-50': 'hover:bg-primary/10',
  'hover:bg-indigo-100': 'hover:bg-primary/20',
};

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      for (const [key, value] of Object.entries(map)) {
        // match key when preceded by space, quote, or backtick
        const regex = new RegExp(`(?<=['"\\s\`])(${key.replace(/\//g, '\\/')})(?=['"\\s\`])`, 'g');
        content = content.replace(regex, value);
      }
      fs.writeFileSync(fullPath, content);
    }
  }
};

walk('src');
console.log('Hover replacement complete.');
