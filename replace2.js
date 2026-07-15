const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /RACLAB/g, replace: 'RACLAB' },
  { search: /RACLAB/g, replace: 'RACLAB' },
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
      if (['.html', '.js', '.json', '.css'].includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        for (const { search, replace } of replacements) {
          if (search.test(content)) {
            content = content.replace(search, replace);
            modified = true;
          }
        }
        // Restorations
        if (fullPath.endsWith('index.html')) {
           content = content.replace(/>RACLAB<\/h3>/g, '>RACLAB</h3>');
        }
        if (fullPath.endsWith('en.json')) {
           content = content.replace(/"mission_uav_title": "RACLAB"/g, '"mission_uav_title": "RACLAB"');
        }
        if (fullPath.endsWith('tr.json')) {
           content = content.replace(/"mission_uav_title": "RACLAB"/g, '"mission_uav_title": "RACLAB"');
        }
        
        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }
}
processDirectory('.');
