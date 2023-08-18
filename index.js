const { spawn } = require('child_process');

spawn('bash', ['-c', 'cd aleatory-bot && sh start.sh'], { stdio: 'inherit' });