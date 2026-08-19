const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function checkCertbot() {
  try {
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    const certbotCheck = await ssh.execCommand('certbot --version');
    console.log('Certbot:', certbotCheck.stdout || certbotCheck.stderr);
    ssh.dispose();
  } catch (error) {
    console.error('SSH Connection failed:', error);
  }
}

checkCertbot();
