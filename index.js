const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Finally you have a live CI/CD pipeline!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
