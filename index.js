// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/welcome', (req, res) => {
  res.send('Welcome to your Express server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
