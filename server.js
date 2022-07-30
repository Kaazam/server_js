const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('jebie mnie to .com.pl (etnie)');
}

const server = http.createServer(requestListener);
server.listen(port);
