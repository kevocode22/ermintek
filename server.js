require('dotenv').config();
require('./config/database');

const express = require('express');
const app = express();
const Router = require('./routes/routes');
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api', Router);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});