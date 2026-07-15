const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /RACLAB Team/gi, replace: match => match.replace(/UAV /i, '') },
  { search: /RACLAB tak�m�/gi, replace: match => match.replace(/�HA /i, '') },
  { search: /RACLAB TAKIMI/g, replace: 'RACLAB TAKIMI' },
  { search: /autonomous systems/gi, replace: match => match.replace(/UAV /i, '') },
  { search: /otonom sistemler/gi, replace: 'otonom sistemler' },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        processDirectory(fullPath);
      }
    } else {
      if (['.html', '.js', '.json'].includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        for (const { search, replace } of replacements) {
          if (search.test(content)) {
            content = content.replace(search, replace);
            modified = true;
          }
        }
        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log('Modified:', fullPath);
        }
      }
    }
  }
}

processDirectory('.');
