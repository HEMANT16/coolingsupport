const https = require('https');

async function fetchWaybackUrls() {
  const url = 'https://web.archive.org/cdx/search/cdx?url=coolingsupport.com/*&output=json&fl=original,mimetype,statuscode&collapse=urlkey&filter=statuscode:200&limit=500';
  
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const parsed = JSON.parse(data);
        const htmlUrls = parsed
          .filter(row => row[1] === 'text/html') // Only HTML pages
          .map(row => row[0])
          .filter(u => !u.includes('wp-admin') && !u.includes('wp-content') && !u.includes('wp-json'));
        
        console.log(`Found ${htmlUrls.length} historical URLs from Wayback Machine:\\n`);
        console.log(htmlUrls.slice(0, 30).join('\\n'));
        if (htmlUrls.length > 30) console.log('...and more.');
      } catch(e) {
        console.error('Error parsing response:', e);
      }
    });
  }).on('error', (e) => {
    console.error('Request error:', e);
  });
}

fetchWaybackUrls();
