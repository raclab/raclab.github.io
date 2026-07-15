const fs = require('fs');
const path = require('path');

const domain = 'https://www.rac-lab.com';

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
      if (['.html', '.xml'].includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;

        // Replace old domain
        if (content.includes('https://bitter-heart-30c2.pages.dev')) {
            content = content.replace(/https:\/\/bitter-heart-30c2\.pages\.dev/g, domain);
            modified = true;
        }
        if (content.includes('https://rac-lab.com')) {
            content = content.replace(/https:\/\/rac-lab\.com/g, domain);
            modified = true;
        }
        content = content.replace(/https:\/\/www\.www\.rac-lab\.com/g, domain);

        // Add canonical if it's a static page
        if (path.extname(fullPath) === '.html' && !fullPath.includes('details') && !fullPath.includes('detail') && !fullPath.includes('error')) {
            if (!content.includes('rel="canonical"')) {
                let canonicalUrl = domain;
                if (!fullPath.endsWith('index.html')) {
                    const relativePath = fullPath.replace(/\\/g, '/');
                    canonicalUrl = domain + '/' + relativePath;
                } else {
                    canonicalUrl = domain + '/';
                }
                const canonicalTag = `<link rel="canonical" href="${canonicalUrl}">\n</head>`;
                content = content.replace('</head>', canonicalTag);
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
