const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o Db
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useUnifiedTopology: true, useNewUrlParser: true });

 requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3386,()=>{
  console.log('Back-end Started! 🚀');
})