const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = fs.readdirSync(root).filter((file) => file.endsWith('.html'));

function findClosingDiv(html, start) {
  const tagPattern = /<\/?div\b[^>]*>/gi;
  tagPattern.lastIndex = start;
  let depth = 0;
  let match;

  while ((match = tagPattern.exec(html))) {
    depth += match[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return tagPattern.lastIndex;
  }

  return -1;
}

let changed = 0;

for (const file of files) {
  const filePath = path.join(root, file);
  let html = fs.readFileSync(filePath, 'utf8');
  const marker = '<div class="page-title">';
  const start = html.indexOf(marker);
  if (start === -1) continue;

  const end = findClosingDiv(html, start);
  if (end === -1) throw new Error(`Could not find page-title closing div in ${file}`);

  const block = html.slice(start, end);
  const titleMatch = block.match(/<h1>([\s\S]*?)<\/h1>/i);
  if (!titleMatch) throw new Error(`Could not find page title in ${file}`);

  const title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
  const actionsStart = block.indexOf('<div class="page-actions">');
  let actions = '';
  if (actionsStart !== -1) {
    const actionsEnd = findClosingDiv(block, actionsStart);
    actions = `\n          ${block.slice(actionsStart, actionsEnd)}`;
  }

  const replacement = `<div class="page-title">
          <nav class="page-breadcrumb" aria-label="breadcrumb">
            <ol>
              <li><a class="page-breadcrumb-home" href="index.html"><i class="bi bi-house-door"></i><span>Home</span></a></li>
              <li class="page-breadcrumb-separator" aria-hidden="true"><i class="bi bi-chevron-right"></i></li>
              <li aria-current="page"><h1>${title}</h1></li>
            </ol>
          </nav>${actions}
        </div>`;

  html = html.slice(0, start) + replacement + html.slice(end);
  fs.writeFileSync(filePath, html);
  changed += 1;
}

console.log(`Converted ${changed} page headings.`);
