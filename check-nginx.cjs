const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function checkNginx() {
  try {
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    const config = await ssh.execCommand('cat /etc/nginx/sites-available/coolingsupport');
    console.log('Nginx Config:', config.stdout);

    ssh.dispose();
  } catch (error) {
    console.error('Failed:', error);
    ssh.dispose();
  }
}

checkNginx();
