const fs = require('fs');
const path = require('path');
const { formatLog } = require('./utils');

// 3. Monta o caminho da pasta logs com path.join
const logsDir = path.join(__dirname, 'logs');

// 4. Se a pasta não existir, cria-a (fs.mkdirSync)
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// 5. Define o caminho do ficheiro e a mensagem formatada
const logFilePath = path.join(logsDir, 'system.log');
const mensagem = formatLog('Olá!');

// Grava a mensagem em logs/system.log
fs.appendFileSync(logFilePath, mensagem);

console.log('Log gravado com sucesso!');