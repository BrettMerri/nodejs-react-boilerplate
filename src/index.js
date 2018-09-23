const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/echo/:response', (req, res) => {
  res.send(req.params)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
