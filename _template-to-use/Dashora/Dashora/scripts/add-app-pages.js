const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith('.html'));

const apps = [
  ['projects.html', 'Projects', 'bi-kanban'],
  ['tasks.html', 'Tasks', 'bi-check2-square'],
  ['kanban.html', 'Kanban', 'bi-columns-gap'],
  ['file-manager.html', 'File Manager', 'bi-folder2-open'],
  ['calendar.html', 'Calendar', 'bi-calendar3'],
  ['chat.html', 'Chat', 'bi-chat-dots'],
  ['inbox.html', 'Inbox', 'bi-inbox'],
  ['comments.html', 'Comments', 'bi-chat-left-text']
];

const pageMeta = {
  'file-manager.html': {
    title: 'File Manager',
    action: '<div class="page-actions"><button class="btn btn-primary"><i class="bi bi-cloud-arrow-up"></i> Upload File</button></div>',
    body: `
        <div class="file-manager-hero panel">
          <div>
            <span class="eyebrow">Workspace Storage</span>
            <h2>Manage shared files, folders, and team documents.</h2>
            <p>Track storage usage, recent uploads, and important folders from one responsive file workspace.</p>
          </div>
          <div class="storage-card">
            <span>Storage Used</span>
            <strong>68%</strong>
            <div class="mini-track"><i style="width:68%"></i></div>
            <small>42.8 GB of 64 GB used</small>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-sm-6 col-xl-3"><div class="summary-tile blue"><i class="bi bi-folder2-open"></i><div><strong>128</strong><span>Folders</span></div></div></div>
          <div class="col-sm-6 col-xl-3"><div class="summary-tile green"><i class="bi bi-file-earmark-text"></i><div><strong>2,486</strong><span>Documents</span></div></div></div>
          <div class="col-sm-6 col-xl-3"><div class="summary-tile amber"><i class="bi bi-image"></i><div><strong>742</strong><span>Media Files</span></div></div></div>
          <div class="col-sm-6 col-xl-3"><div class="summary-tile violet"><i class="bi bi-share"></i><div><strong>64</strong><span>Shared Items</span></div></div></div>
        </div>
        <div class="row g-4 mt-1">
          <div class="col-xl-8">
            <div class="panel">
              <div class="panel-head"><div><h2>Folders</h2><p>Quick access to active workspace folders</p></div><button class="btn btn-sm btn-light">New Folder</button></div>
              <div class="file-folder-grid">
                <article class="file-folder-card"><i class="bi bi-folder2-open"></i><div><strong>Product Design</strong><span>148 files</span></div><em>12.4 GB</em></article>
                <article class="file-folder-card"><i class="bi bi-folder2-open"></i><div><strong>Marketing Assets</strong><span>326 files</span></div><em>18.2 GB</em></article>
                <article class="file-folder-card"><i class="bi bi-folder2-open"></i><div><strong>Finance Reports</strong><span>84 files</span></div><em>6.8 GB</em></article>
                <article class="file-folder-card"><i class="bi bi-folder2-open"></i><div><strong>Client Handoffs</strong><span>212 files</span></div><em>9.6 GB</em></article>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="panel upload-panel">
              <div class="panel-head"><div><h2>Upload Queue</h2><p>Recently added files</p></div></div>
              <div class="upload-drop"><i class="bi bi-cloud-arrow-up"></i><strong>Drop files here</strong><span>PNG, PDF, ZIP, DOCX up to 80 MB</span></div>
              <div class="file-type-list">
                <span><i class="bi bi-file-earmark-pdf"></i><strong>Brand-guide.pdf</strong><em>4.8 MB</em></span>
                <span><i class="bi bi-file-earmark-zip"></i><strong>Landing-assets.zip</strong><em>28 MB</em></span>
                <span><i class="bi bi-file-earmark-spreadsheet"></i><strong>Q2-report.xlsx</strong><em>1.7 MB</em></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-4 mt-1">
          <div class="col-12">
            <div class="panel">
              <div class="panel-head"><div><h2>Recent Files</h2><p>Latest files shared with the team</p></div><div class="segmented"><button>All</button><button class="active">Shared</button><button>Starred</button></div></div>
              <div class="table-responsive"><table class="table align-middle dash-table"><thead><tr><th>Name</th><th>Owner</th><th>Modified</th><th>Size</th><th>Status</th></tr></thead><tbody><tr><td><strong>Dashboard-wireframe.fig</strong></td><td><span class="person-line"><span class="rep-avatar has-photo"><img src="assets/img/team/team-2.jpg" alt="Sara Ahmed"></span><span>Sara Ahmed</span></span></td><td>Today, 10:24</td><td>18.4 MB</td><td><span class="status paid">Shared</span></td></tr><tr><td><strong>Sales-export.csv</strong></td><td><span class="person-line"><span class="rep-avatar has-photo"><img src="assets/img/team/team-1.jpg" alt="Donald Risher"></span><span>Donald Risher</span></span></td><td>Yesterday</td><td>2.2 MB</td><td><span class="status pending">Review</span></td></tr><tr><td><strong>Product-roadmap.pdf</strong></td><td><span class="person-line"><span class="rep-avatar has-photo"><img src="assets/img/team/team-4.jpg" alt="Jon Lee"></span><span>Jon Lee</span></span></td><td>Jun 14, 2026</td><td>9.1 MB</td><td><span class="status paid">Shared</span></td></tr></tbody></table></div>
            </div>
          </div>
        </div>`
  },
  'kanban.html': {
    title: 'Kanban',
    action: '<div class="page-actions"><button class="btn btn-primary" data-create-open data-create-type="tasks" data-create-label="Create Card"><i class="bi bi-plus-lg"></i> Create Card</button></div>',
    body: `
        <div class="kanban-hero panel">
          <div><span class="eyebrow">Workflow Board</span><h2>Plan, prioritize, and move work through every stage.</h2><p>A focused kanban page with sprint metrics, board columns, owners, and due dates.</p></div>
          <div class="kanban-meta"><span><strong>12</strong>Open Cards</span><span><strong>4</strong>Blocked</span><span><strong>86%</strong>On Track</span></div>
        </div>
        <div class="task-summary">
          <div class="summary-tile blue"><i class="bi bi-list-task"></i><div><strong>18</strong><span>Backlog</span></div></div><div class="summary-tile amber"><i class="bi bi-hourglass-split"></i><div><strong>9</strong><span>In Progress</span></div></div><div class="summary-tile violet"><i class="bi bi-search"></i><div><strong>6</strong><span>Review</span></div></div><div class="summary-tile green"><i class="bi bi-check2-circle"></i><div><strong>31</strong><span>Done</span></div></div>
        </div>
        <div class="task-board mt-4 kanban-board">
          <div class="task-column"><div class="task-column-head"><strong>Backlog</strong><span>3</span></div><div class="task-card"><div class="task-card-top"><span>Research</span><em class="medium">Medium</em></div><h3>Map file manager empty states</h3><p>Create states for empty folders, upload errors, and locked files.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-2.jpg" alt="Sara Ahmed"></span><span class="has-photo"><img src="assets/img/team/team-5.jpg" alt="Priya Shah"></span></div><small><i class="bi bi-clock"></i> Jun 20</small></div></div><div class="task-card"><div class="task-card-top"><span>Content</span><em class="low">Low</em></div><h3>Draft onboarding checklist copy</h3><p>Shorten helper text and prepare tooltip language for users.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-4.jpg" alt="Jon Lee"></span></div><small><i class="bi bi-clock"></i> Jun 22</small></div></div></div>
          <div class="task-column"><div class="task-column-head"><strong>In Progress</strong><span>3</span></div><div class="task-card"><div class="task-card-top"><span>Frontend</span><em class="high">High</em></div><h3>Build responsive kanban board</h3><p>Keep columns scrollable on desktop and stacked on phone screens.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-1.jpg" alt="Donald Risher"></span><span class="has-photo"><img src="assets/img/team/team-3.jpg" alt="Maya Rahman"></span></div><small><i class="bi bi-clock"></i> Today</small></div></div><div class="task-card"><div class="task-card-top"><span>Design</span><em class="medium">Medium</em></div><h3>Polish card labels and avatars</h3><p>Align priority chips, date labels, and team avatar spacing.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-2.jpg" alt="Sara Ahmed"></span></div><small><i class="bi bi-clock"></i> Today</small></div></div></div>
          <div class="task-column"><div class="task-column-head"><strong>Review</strong><span>2</span></div><div class="task-card"><div class="task-card-top"><span>QA</span><em class="high">High</em></div><h3>Validate mobile navigation</h3><p>Confirm menu links, search modal, and active states across layouts.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-6.jpg" alt="Ariana Reed"></span><span class="has-photo"><img src="assets/img/team/team-5.jpg" alt="Priya Shah"></span></div><small><i class="bi bi-clock"></i> Tomorrow</small></div></div><div class="task-card"><div class="task-card-top"><span>Docs</span><em class="low">Low</em></div><h3>Review component page links</h3><p>Check sidebar and command search entries after new app pages.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-4.jpg" alt="Jon Lee"></span></div><small><i class="bi bi-clock"></i> Jun 21</small></div></div></div>
          <div class="task-column"><div class="task-column-head"><strong>Done</strong><span>2</span></div><div class="task-card"><div class="task-card-top"><span>Layout</span><em class="medium">Medium</em></div><h3>Finalize compact page title</h3><p>Breadcrumb-only page titles now match the rest of the template.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-3.jpg" alt="Maya Rahman"></span></div><small><i class="bi bi-check2-circle"></i> Done</small></div></div><div class="task-card"><div class="task-card-top"><span>UI</span><em class="low">Low</em></div><h3>Add footer links</h3><p>Dashboard footer is consistent across admin pages.</p><div class="task-card-foot"><div class="avatar-stack"><span class="has-photo"><img src="assets/img/team/team-1.jpg" alt="Donald Risher"></span></div><small><i class="bi bi-check2-circle"></i> Done</small></div></div></div>
        </div>`
  }
};

const sidebarLinks = (current) => apps.map(([href, label, icon]) => {
  const active = href === current ? ' active' : ' ';
  return `            <a class="nav-link${active}" href="${href}"><i class="bi ${icon}"></i><span>${label}</span></a>`;
}).join('\n');

const horizontalLinks = (current) => apps.map(([href, label, icon]) => {
  const active = href === current ? ' active' : ' ';
  return `<a class="dropdown-item${active}" href="${href}"><i class="bi ${icon}"></i>${label}</a>`;
}).join('');

const commandApps = '<section class="command-group"><h3>Apps & Pages</h3><div class="command-list"><a href="calendar.html" data-command-item data-search-text="calendar"><i class="bi bi-calendar3"></i><span>Calendar</span></a><a href="file-manager.html" data-command-item data-search-text="file manager files folders storage"><i class="bi bi-folder2-open"></i><span>File Manager</span></a><a href="kanban.html" data-command-item data-search-text="kanban board workflow cards"><i class="bi bi-columns-gap"></i><span>Kanban</span></a><a href="invoice-list.html" data-command-item data-search-text="invoice list"><i class="bi bi-list-ol"></i><span>Invoice List</span></a><a href="settings.html" data-command-item data-search-text="account settings"><i class="bi bi-person-gear"></i><span>Account Settings</span></a><a href="orders.html" data-command-item data-search-text="orders"><i class="bi bi-receipt"></i><span>Orders</span></a></div></section>';

const updateNavigation = (html, current) => {
  const appOpen = apps.some(([href]) => href === current) ? 'open' : '';
  const commercePages = ['customers.html', 'customer-details.html', 'products.html', 'orders.html', 'invoice-list.html', 'invoice-details.html'];
  const commerceActive = commercePages.includes(current) ? ' active' : ' ';
  html = html.replace(
    /<div class="nav-section nav-accordion [^"]*">\s*<button class="nav-accordion-toggle" type="button" data-nav-accordion aria-expanded="(?:true|false)"><span><i class="bi bi-grid"><\/i>Apps<\/span><i class="bi bi-chevron-down"><\/i><\/button>\s*<div class="nav-accordion-panel">[\s\S]*?\s*<\/div>\s*<\/div>/,
    `<div class="nav-section nav-accordion ${appOpen}">\n          <button class="nav-accordion-toggle" type="button" data-nav-accordion aria-expanded="${appOpen ? 'true' : 'false'}"><span><i class="bi bi-grid"></i>Apps</span><i class="bi bi-chevron-down"></i></button>\n          <div class="nav-accordion-panel">\n${sidebarLinks(current)}\n            \n          </div>\n        </div>`
  );
  const horizontalActive = apps.some(([href]) => href === current) ? ' active' : ' ';
  html = html.replace(
    /<div class="horizontal-dropdown">\s*<button class="nav-link [^"]*" type="button" data-bs-toggle="dropdown" data-bs-display="static"><i class="bi bi-grid"><\/i><span>Apps<\/span><i class="bi bi-chevron-down"><\/i><\/button>\s*<div class="dropdown-menu soft-dropdown horizontal-menu">[\s\S]*?\s*<\/div>\s*<\/div><div class="horizontal-dropdown">\s*<button class="nav-link [^"]*" type="button" data-bs-toggle="dropdown" data-bs-display="static"><i class="bi bi-bag"><\/i><span>Commerce<\/span>/,
    `<div class="horizontal-dropdown">\n        <button class="nav-link${horizontalActive}" type="button" data-bs-toggle="dropdown" data-bs-display="static"><i class="bi bi-grid"></i><span>Apps</span><i class="bi bi-chevron-down"></i></button>\n        <div class="dropdown-menu soft-dropdown horizontal-menu">\n          ${horizontalLinks(current)}\n          \n        </div>\n      </div><div class="horizontal-dropdown">\n        <button class="nav-link${commerceActive}" type="button" data-bs-toggle="dropdown" data-bs-display="static"><i class="bi bi-bag"></i><span>Commerce</span>`
  );
  html = html.replace(/<section class="command-group"><h3>Apps & Pages<\/h3><div class="command-list">[\s\S]*?<\/div><\/section><section class="command-group"><h3>User Interface<\/h3>/, `${commandApps}<section class="command-group"><h3>User Interface</h3>`);
  return html;
};

const makePage = (template, file, meta) => {
  let html = template;
  html = html.replace(/<title>[^<]+<\/title>/, `<title>${meta.title} | Dashora Admin Dashboard</title>`);
  html = html.replace(/<li aria-current="page"><h1>[^<]+<\/h1><\/li>/, `<li aria-current="page"><h1>${meta.title}</h1></li>`);
  html = html.replace(/<div class="page-actions">[\s\S]*?<\/div>\s*<\/div>\s*<h2 class="visually-hidden">Overview<\/h2>\s*[\s\S]*?\s*<\/section>/, `${meta.action}\n        </div>\n        <h2 class="visually-hidden">Overview</h2>\n${meta.body}\n      </section>`);
  return updateNavigation(html, file);
};

const template = fs.readFileSync(path.join(root, 'tasks.html'), 'utf8');
for (const [file, meta] of Object.entries(pageMeta)) {
  fs.writeFileSync(path.join(root, file), makePage(template, file, meta));
}

for (const file of htmlFiles) {
  const fullPath = path.join(root, file);
  const current = path.basename(file);
  let html = fs.readFileSync(fullPath, 'utf8');
  const next = updateNavigation(html, current);
  if (next !== html) fs.writeFileSync(fullPath, next);
}

console.log('Added File Manager and Kanban app pages and navigation.');
