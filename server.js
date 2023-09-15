const http = require("http");

const HOST = "localhost";
const PORT = 5000;

const server = http.createServer((req, res) => {
   res.end('inhaiii')
});

server.listen(PORT, HOST, () => {
  console.log(`servidor rodando: http://${HOST}:${PORT}/`);
});
