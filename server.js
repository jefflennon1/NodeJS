const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o Db
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useUnifiedTopology: true, useNewUrlParser: true });

 requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3386,()=>{
  console.log('Back-end Started! 🚀');
})