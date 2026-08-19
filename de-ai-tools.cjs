const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, 'src', 'pages', 'tools');

function deAIFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove standard emojis wrapped in span
  content = content.replace(/<span class="text-[a-z]+-\d+">[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]+<\/span>\s*/gu, '');
  // Also remove bare emojis in headers or spans if any
  content = content.replace(/[\u{1F300}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E0}-\u{1F1FF}]+/gu, '');

  // 2. Reduce rounding
  content = content.replace(/rounded-3xl/g, 'rounded-sm');
  content = content.replace(/rounded-2xl/g, 'rounded-sm');
  content = content.replace(/rounded-xl/g, 'rounded-sm');
  content = content.replace(/rounded-full/g, 'rounded-md');

  // 3. Flatten shadows
  content = content.replace(/shadow-2xl/g, 'shadow-md');
  content = content.replace(/shadow-xl/g, 'shadow-md');

  // 4. Remove gradient backgrounds and replace with solid slate
  content = content.replace(/bg-gradient-to-[a-z]{1,2} from-[a-z]+-\d+ to-[a-z]+-\d+/g, 'bg-slate-800');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`De-AI'd: ${path.basename(filePath)}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.astro')) {
      deAIFile(fullPath);
    }
  }
}

processDirectory(toolsDir);
console.log('Finished De-AI process on all tools.');
