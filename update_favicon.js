const fs = require('fs');
const path = require('path');

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
      if (['.html'].includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        if (fullPath.endsWith('index.html')) {
            content = content.replace(/<link rel="icon".*href="public\/img\/background\/raclab\.png">/i, '<link rel="icon" type="image/png" sizes="512x512" href="https://www.rac-lab.com/public/img/background/raclab.png">');
            modified = true;
        } else {
            content = content.replace(/<link rel="icon".*href="\.\.\/public\/img\/background\/raclab\.png">/i, '<link rel="icon" type="image/png" sizes="512x512" href="https://www.rac-lab.com/public/img/background/raclab.png">');
            modified = true;
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
