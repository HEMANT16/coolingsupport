const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function fixNginx() {
  try {
    await ssh.connect({
      host: '192.46.211.158',
      username: 'root',
      password: 'Thefbreturn@A'
    });

    const config = `server {
    server_name coolingsupport.com www.coolingsupport.com;
    root /var/www/coolingsupport;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 404 = @redirect_home;
    location @redirect_home {
        return 301 https://$host/;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/coolingsupport.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/coolingsupport.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = www.coolingsupport.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = coolingsupport.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name coolingsupport.com www.coolingsupport.com;
    return 404; # managed by Certbot
}
`;

    // Upload config
    await ssh.execCommand(`cat << 'EOF' > /etc/nginx/sites-available/coolingsupport\n${config}\nEOF`);
    
    await ssh.execCommand('systemctl reload nginx');
    console.log('Nginx config fixed and reloaded.');

    ssh.dispose();
  } catch (error) {
    console.error('Failed:', error);
    ssh.dispose();
  }
}

fixNginx();
