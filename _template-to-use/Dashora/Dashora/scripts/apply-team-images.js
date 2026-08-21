const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = [
  ...fs.readdirSync(root).filter((file) => file.endsWith('.html')),
  'assets/js/main.js'
];

const imageByInitials = {
  JD: 'team-1.jpg',
  SA: 'team-2.jpg',
  MR: 'team-3.jpg',
  JL: 'team-4.jpg',
  PS: 'team-5.jpg',
  AR: 'team-6.jpg',
  DR: 'team-1.jpg',
  JB: 'team-2.jpg',
  CA: 'team-3.jpg',
  WP: 'team-4.jpg',
  NR: 'team-5.jpg',
  CF: 'team-6.jpg',
  PW: 'team-5.jpg',
  BH: 'team-6.jpg',
  PM: 'team-4.jpg',
  MC: 'team-3.jpg',
  LR: 'team-2.jpg',
  AH: 'team-6.jpg',
  SC: 'team-5.jpg',
  TN: 'team-1.jpg',
  NB: 'team-2.jpg',
  ZM: 'team-3.jpg',
  CM: 'team-4.jpg',
  EA: 'team-5.jpg',
  CJ: 'team-6.jpg',
  SH: 'team-1.jpg',
  HW: 'team-2.jpg',
  VR: 'team-3.jpg',
  LC: 'team-4.jpg',
  SG: 'team-5.jpg',
  OT: 'team-6.jpg'
};

const labelByInitials = {
  JD: 'John Doe',
  SA: 'Sara Ahmed',
  MR: 'Maya Rahman',
  JL: 'Jon Lee',
  PS: 'Priya Shah',
  AR: 'Ariana Reed',
  DR: 'Donald Risher',
  JB: 'Jansh Brown',
  CA: 'Carroll Adams',
  WP: 'William Pinto',
  NR: 'Natalie Reed',
  CF: 'Charles Franklin',
  PW: 'Prezy William',
  BH: 'Boonie Hoynas',
  PM: 'Pauline Moll',
  MC: 'Marketing Coordinator',
  LR: 'Luis Rocha',
  AH: 'Ayaan Hudda',
  SC: 'Sofia Cunha',
  TN: 'Tonya Noble',
  NB: 'Nicholas Ball',
  ZM: 'Zynthia Marrow',
  CM: 'Cheryl Moore',
  EA: 'Elizabeth Allen',
  CJ: 'Cassian Jenning',
  SH: 'Scott Holt',
  HW: 'Harley Watkins',
  VR: 'Vitoria Rodrigues',
  LC: 'Lettie Carson',
  SG: 'System Guard',
  OT: 'Ops Team'
};

const avatarClassPattern = [
  'profile-photo',
  'profile-avatar',
  'notify-avatar',
  'rep-avatar',
  'avatar'
].join('|');

function imageMarkup(initials) {
  const file = imageByInitials[initials];
  if (!file) return initials;
  const alt = labelByInitials[initials] || initials;
  return `<img src="assets/img/team/${file}" alt="${alt}">`;
}

let total = 0;

for (const file of files) {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  const before = content;

  content = content.replace(
    new RegExp(`<span([^>]*class="[^"]*(?:${avatarClassPattern})[^"]*"[^>]*)>([A-Z]{2})(<i><\\/i>)?<\\/span>`, 'g'),
    (match, attrs, initials, status) => {
      if (!imageByInitials[initials]) return match;
      total += 1;
      const updatedAttrs = attrs.includes('has-photo') ? attrs : attrs.replace(/class="([^"]*)"/, 'class="$1 has-photo"');
      return `<span${updatedAttrs}>${imageMarkup(initials)}${status || ''}</span>`;
    }
  );

  content = content.replace(
    /(<div class="avatar-stack"[^>]*>[\s\S]*?)(<\/div>)/g,
    (stackMatch, inner, close) => {
      const updatedInner = inner.replace(/<span>([A-Z]{2})<\/span>/g, (match, initials) => {
        if (!imageByInitials[initials]) return match;
        total += 1;
        return `<span class="has-photo">${imageMarkup(initials)}</span>`;
      });
      return `${updatedInner}${close}`;
    }
  );

  if (content !== before) {
    fs.writeFileSync(filePath, content);
  }
}

console.log(`Applied team images to ${total} avatar placeholders.`);
