const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function check() {
  try {
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    const out1 = await ssh.execCommand('certbot certificates');
    console.log('Certbot certificates:\\n', out1.stdout);

    const out2 = await ssh.execCommand('systemctl status nginx --no-pager');
    console.log('\\nNginx status:\\n', out2.stdout || out2.stderr);

    const out3 = await ssh.execCommand('ufw status');
    console.log('\\nUFW status:\\n', out3.stdout);

    ssh.dispose();
  } catch (error) {
    console.error('Failed:', error);
  }
}

check();
