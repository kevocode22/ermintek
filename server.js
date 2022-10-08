const dotenv = require('dotenv');
const express = require('express');
const app = express();


require('dotenv').config()
require('./config/database')


dotenv.config();
app.get('/', (req, res) => {
  res.send('Server is running');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});