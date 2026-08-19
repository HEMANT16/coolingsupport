import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist');
const distClientPath = path.join(process.cwd(), 'dist', 'client');

function injectXSLT(fileName) {
  const paths = [
    path.join(distPath, fileName),
    path.join(distClientPath, fileName)
  ];
  for (const filePath of paths) {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      const xmlDecl = '<?xml version="1.0" encoding="UTF-8"?>';
      const xsltDecl = '\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
      
      if (content.startsWith(xmlDecl) && !content.includes('xml-stylesheet')) {
        content = content.replace(xmlDecl, xmlDecl + xsltDecl);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Injected XSLT into ${filePath}`);
      }
    }
  }
}

injectXSLT('sitemap-index.xml');
injectXSLT('sitemap-0.xml');
