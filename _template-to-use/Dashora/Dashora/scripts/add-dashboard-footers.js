const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = fs.readdirSync(root).filter((file) => file.endsWith('.html'));
const footer = `      <footer class="dashboard-footer" id="dashboardFooter">
        <p>&copy; <span data-current-year>2026</span> All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <a href="index.html">Home</a>
          <a href="faq.html">FAQ</a>
          <a href="mailto:support@dashora.com">Support</a>
        </nav>
      </footer>
`;

let changed = 0;

for (const file of files) {
  const filePath = path.join(root, file);
  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('<section class="content">')) continue;
  if (html.includes('class="dashboard-footer"')) {
    html = html.replace(/\s*<footer class="dashboard-footer"[\s\S]*?<\/footer>\n/, `\n${footer}`);
    fs.writeFileSync(filePath, html);
    changed += 1;
    continue;
  }

  const marker = '      </section>\n    </main>';
  const index = html.lastIndexOf(marker);
  if (index === -1) throw new Error(`Could not find dashboard main closing in ${file}`);

  html = html.slice(0, index + '      </section>\n'.length) + footer + html.slice(index + '      </section>\n'.length);
  fs.writeFileSync(filePath, html);
  changed += 1;
}

console.log(`Added ${changed} dashboard footers.`);
