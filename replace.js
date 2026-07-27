import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

// We want to map known hex values found in the project to our new semantic tailwind variables
const colorMap = {
    '#00042A': 'main-bg',
    '#00042a': 'main-bg',
    '#050505': 'secondary-dark',
    '#1a1a1a': 'dark-blue-gray',
    '#0a0a0a': 'dark-blue-gray',
    '#03042a': 'main-bg',
    '#0a021a': 'main-bg',
    '#0b0b0b': 'secondary-dark',
    '#c82fff': 'medium-gray-blue', // glow
    '#020817': 'secondary-dark',
    '#132435': 'secondary-dark',
};

// Also catch any generic hex replacement logic:
function getReplacement(hex) {
    if (colorMap[hex]) return colorMap[hex];
    if (colorMap[hex.toLowerCase()]) return colorMap[hex.toLowerCase()];
    // Fallback based on lightness
    return 'secondary-dark'; 
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Replace instances like bg-[#00042A] to bg-main-bg
            // Match prefixes like bg-, text-, border-, from-, to-, via-
            const regex = /([a-z-]+)-\[#([a-fA-F0-9]{3,6})\]/g;
            const newContent = content.replace(regex, (match, prefix, hex) => {
                const fullHex = '#' + hex;
                const rep = getReplacement(fullHex);
                modified = true;
                return `${prefix}-${rep}`;
            });

            if (modified) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(SRC_DIR);
console.log('Done replacing colors.');
