module.exports = {
  apps : [{
    script: 'npm start',
  
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '206.238.113.198',
      ref  : 'origin/main',
      repo : 'git@github.com:zedxxvii/idle-msg.git',
      path : 'home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
