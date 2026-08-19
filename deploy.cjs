const { NodeSSH } = require('node-ssh');
const path = require('path');
const ssh = new NodeSSH();

async function deploy() {
  try {
    console.log('Connecting to server...');
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    console.log('Creating web directory...');
    await ssh.execCommand('mkdir -p /var/www/coolingsupport');

    console.log('Uploading dist directory...');
    const localDir = path.join(__dirname, 'dist');
    const remoteDir = '/var/www/coolingsupport';
    
    // Clear old files
    await ssh.execCommand('rm -rf /var/www/coolingsupport/*');

    await ssh.putDirectory(localDir, remoteDir, {
      recursive: true,
      concurrency: 10
    });
    console.log('Upload complete.');

    // Reload Nginx just in case
    const nginxTest = await ssh.execCommand('nginx -t');
    if (nginxTest.stderr.includes('successful')) {
      await ssh.execCommand('systemctl reload nginx');
      console.log('Nginx reloaded successfully.');
    } else {
      console.error('Nginx config test failed. Not reloading.');
    }

    ssh.dispose();
    console.log('Deployment complete!');
  } catch (error) {
    console.error('Deployment failed:', error);
    ssh.dispose();
  }
}

deploy();
