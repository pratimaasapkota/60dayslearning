const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Express!");
});

app.get('/api', (req, res) => {
  res.json({ message: "API route working!" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
