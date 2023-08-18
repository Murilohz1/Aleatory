const { spawn } = require('child_process');

spawn('bash', ['-c', 'cd aleatory-bot && node iniciar.js'], { stdio: 'inherit' });
