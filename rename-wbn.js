import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            if (content.includes('WBN Agency') || content.includes('WBN-Agency-Website')) {
                content = content.replace(/WBN Agency/g, 'NEFFTO');
                content = content.replace(/WBN-Agency-Website/g, 'NEFFTO');
                modified = true;
            }

            // Fix imports
            if (content.includes('import logo from "../assets/WBN Agency.png";')) {
                content = content.replace('import logo from "../assets/WBN Agency.png";', 'const logo = "/logo.svg";');
                modified = true;
            }
            if (content.includes('import Logo from "../assets/WBN Agency.png"')) {
                content = content.replace('import Logo from "../assets/WBN Agency.png"', 'const Logo = "/logo.svg";');
                modified = true;
            }
            if (content.includes('import logo from "../assets/footer-logo.png";')) {
                content = content.replace('import logo from "../assets/footer-logo.png";', 'const logo = "/logo-darkmode.svg";');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDirectory(SRC_DIR);

// Also do root level README
try {
    let readme = fs.readFileSync('README.md', 'utf8');
    if (readme.includes('WBN')) {
        readme = readme.replace(/WBN-Agency-Website/g, 'NEFFTO-Website');
        readme = readme.replace(/WBN Agency/g, 'NEFFTO');
        fs.writeFileSync('README.md', readme, 'utf8');
        console.log('Updated README.md');
    }
} catch (e) {}

console.log('Done replacing names.');
