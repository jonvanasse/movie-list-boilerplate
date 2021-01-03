const express = require('express');
/* const db = require('./db.js') */

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`)
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
