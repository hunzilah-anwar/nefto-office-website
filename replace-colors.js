import fs from 'fs';
import path from 'path';

const map = {
  'secondary-dark': 'surface',
  'secondery': 'primary',
  'medium-gray-blue': 'secondary',
  'muted-steel': 'secondary',
  'light-gray-blue': 'secondary',
  'light-surface': 'surface',
  'dark-blue-gray': 'surface'
};

function walkDir(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walkDir(fullPath));
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = walkDir('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const [oldVal, newVal] of Object.entries(map)) {
    const regex = new RegExp(oldVal, 'g');
    content = content.replace(regex, newVal);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
console.log('All done!');
