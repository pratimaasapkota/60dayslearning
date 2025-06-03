// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from Node.js backend!");
    res.end();
  } else if (req.url === "/api") {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: "This is JSON data" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
