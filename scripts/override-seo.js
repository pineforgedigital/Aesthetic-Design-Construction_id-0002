const fs = require('fs');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src/app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('const title =') && !content.includes('under construction')) {
    content = content.replace(/const title = (.*?);/, 'let title = $1;');
    content = content.replace(/const description = (.*?);/, 'let description = $1;');
    content = content.replace(/const image = (.*)/, 'const image = $1\n\n  if (title?.toLowerCase().includes("under construction")) {\n    title = "Aesthetic Design & Construction";\n  }\n  if (description?.toLowerCase().includes("under construction")) {\n    description = "Bringing design, construction, and craftsmanship together for your home.";\n  }\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
