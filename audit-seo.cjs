const http = require('http');
const https = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      resolve({
        url,
        statusCode: res.statusCode,
        location: res.headers.location || 'none',
      });
    }).on('error', (err) => {
      resolve({ url, error: err.message });
    });
  });
}

async function audit() {
  const tests = [
    // WWW vs Non-WWW
    'http://www.coolingsupport.com',
    'https://www.coolingsupport.com',
    'http://coolingsupport.com',
    
    // Trailing slash vs Non-trailing slash
    'https://coolingsupport.com/portable-ac',
    'https://coolingsupport.com/portable-ac/',
    'https://coolingsupport.com/portable-ac/sacc-sizing',
    'https://coolingsupport.com/portable-ac/sacc-sizing/'
  ];

  console.log('--- Canonicalization Audit ---');
  for (const url of tests) {
    const result = await checkUrl(url);
    console.log(`GET ${result.url}`);
    if (result.error) {
      console.log(`  -> ERROR: ${result.error}`);
    } else {
      console.log(`  -> HTTP ${result.statusCode} | Redirects to: ${result.location}`);
    }
  }
}

audit();
