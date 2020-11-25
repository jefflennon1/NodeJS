const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o Db
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useUnifiedTopology: true, useNewUrlParser: true });

 requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/lista', (request, response)=>{
  Product.create({
    title: 'React native',
    description: 'Curso de react native para iniciantes',
    url: 'www.rocketseat.com.br',
  });

  return response.json(`qualquer coisa`);
});

app.listen(3386,()=>{
  console.log('Back-end Started! 🚀');
})