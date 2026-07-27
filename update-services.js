import fs from 'fs';

let content = fs.readFileSync('src/data/serviceData.js', 'utf8');

const s1 = content.indexOf('  // 1. Web Development');
const s2 = content.indexOf('  // 2. E-Commerce Solutions');
const s3 = content.indexOf('  // 3. Digital Marketing');
const s4 = content.indexOf('  // 4. Tool Development');
const s5 = content.indexOf('  // 5. AI & Machine Learning');
const s6 = content.indexOf('  // 6. Graphic Design');
const s7 = content.indexOf('  // 7. Video Editing');
const s8 = content.indexOf('  // 8. WordPress Website');
const end = content.lastIndexOf('];');

let part1 = content.substring(0, s2);
let part3 = content.substring(s3, s4);
let part4 = content.substring(s4, s5);
let part5 = content.substring(s5, s6);
let part6 = content.substring(s6, s7);
let part8 = content.substring(s8, end);

let newContent = part1 + part3 + part4 + part5 + part6 + part8 + '\n];\n';

newContent = newContent.replace(/title: "Web Development",/g, 'title: "Web Development (Coding)",');
newContent = newContent.replace(/slug: "tool-development",\s*title: "Tool Development",/g, 'slug: "app-development",\n    title: "App Development",');
newContent = newContent.replace(/slug: "python-ml-ai",\s*title: "Python, ML & AI",/g, 'slug: "ai-ml",\n    title: "AI & ML",');
newContent = newContent.replace(/slug: "graphic-design",\s*title: "Graphic Design",/g, 'slug: "graphic-design",\n    title: "Graphic Designing",');
newContent = newContent.replace(/slug: "wordpress-website",\s*title: "WordPress Website",/g, 'slug: "seo",\n    title: "SEO",');

fs.writeFileSync('src/data/serviceData.js', newContent, 'utf8');
console.log('Services updated successfully!');
