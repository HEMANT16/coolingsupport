const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, 'src', 'pages', 'tools');
const files = fs.readdirSync(toolsDir).filter(file => file.endsWith('.astro'));

let updatedCount = 0;

files.forEach(file => {
  const filePath = path.join(toolsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add the import statement
  if (!content.includes('AuthorBadge.astro')) {
    content = content.replace(/^---\r?\n([\s\S]*?)\r?\n---/, (match, frontmatter) => {
      return `---\n${frontmatter}\nimport AuthorBadge from '../../components/AuthorBadge.astro';\n---`;
    });
  }

  // 2. Add the <AuthorBadge /> after </h1>
  if (!content.includes('<AuthorBadge')) {
    content = content.replace(/<\/h1>/i, `</h1>\n      <div class="mt-8 mb-4 max-w-2xl mx-auto"><AuthorBadge name="Mike Reynolds" role="HVAC Expert" image="/images/mike-reynolds.png" date="June 14, 2026" /></div>`);
  }

  // 3. Add to WebApplication Schema
  if (!content.includes('"author": { "@type": "Person"')) {
    content = content.replace(/"@type":\s*"WebApplication",\r?\n\s*"name":\s*"([^"]+)",/, (match) => {
      return `${match}\n    "author": { "@type": "Person", "name": "Mike Reynolds" },`;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
  updatedCount++;
});

console.log(`Successfully updated ${updatedCount} tool files.`);
