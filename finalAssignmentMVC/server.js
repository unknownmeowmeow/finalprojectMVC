const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');  
app.use('/', userRoutes);

app.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
