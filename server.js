const dotenv = require('dotenv');
const express = require('express');
const app = express();
const Router = require('./routes/routes');

require('dotenv').config()
require('./config/database')

const port = process.env.PORT;

dotenv.config();
app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use(express.json())
app.use('/api', Router)
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});