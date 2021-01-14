const express = require('express');
const app = express();
const path = require('path');

const foodRouter = require('../routes/foodRoutes.js');

app.use(express.json());

app.use('/api', foodRouter);

app.use('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000);
