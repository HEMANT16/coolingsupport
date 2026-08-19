const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function check() {
  try {
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    const out1 = await ssh.execCommand('zgrep " 404 " /var/log/nginx/access.log* | awk \'{print $7}\' | sort | uniq -c | sort -nr | head -n 30');
    console.log('Top 404 URLs:\\n', out1.stdout);

    ssh.dispose();
  } catch (error) {
    console.error('Failed:', error);
  }
}

check();
