const express = require('express');
const app = express();
const port = 3000
const path    = require("path");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  } else {
    return console.log(`server is listening on ${port}`);
  }
});
