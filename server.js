const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o Db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });


app.get('/lista', (request, response)=>{
  response.json(`qualquer coisa`);
});

app.listen(3386,()=>{
  console.log('Back-end Started! 🚀');
})