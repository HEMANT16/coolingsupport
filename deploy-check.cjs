const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function checkServer() {
  try {
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    console.log('SSH Connected successfully.');
    
    // Check OS
    const osResult = await ssh.execCommand('cat /etc/os-release | grep PRETTY_NAME');
    console.log('OS:', osResult.stdout);

    // List Nginx sites
    const nginxSites = await ssh.execCommand('ls -la /etc/nginx/sites-available/');
    console.log('Nginx Sites Available:', nginxSites.stdout);
    
    const nginxEnabled = await ssh.execCommand('ls -la /etc/nginx/sites-enabled/');
    console.log('Nginx Sites Enabled:', nginxEnabled.stdout);

    ssh.dispose();
  } catch (error) {
    console.error('SSH Connection failed:', error);
  }
}

checkServer();
