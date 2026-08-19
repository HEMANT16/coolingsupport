const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function check() {
  try {
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    const out1 = await ssh.execCommand('curl -vI https://127.0.0.1 --header "Host: coolingsupport.com" -k');
    console.log('Curl output:\\n', out1.stderr);

    ssh.dispose();
  } catch (error) {
    console.error('Failed:', error);
  }
}

check();
