const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function installSSL() {
  try {
    console.log('Connecting to server to install SSL...');
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    console.log('Running Certbot...');
    const certbotResult = await ssh.execCommand('certbot --nginx -d coolingsupport.com -d www.coolingsupport.com --non-interactive --agree-tos -m support@coolingsupport.com');
    
    console.log('Certbot Output:', certbotResult.stdout);
    if (certbotResult.stderr) {
      console.log('Certbot Errors/Warnings:', certbotResult.stderr);
    }

    ssh.dispose();
  } catch (error) {
    console.error('SSL Installation failed:', error);
    ssh.dispose();
  }
}

installSSL();
