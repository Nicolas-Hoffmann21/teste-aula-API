function formatLog(msg) {
  const data = new Date().toLocaleDateString('pt-BR');
  return `[${data}] - ${msg}\n`;
}

module.exports = { formatLog };