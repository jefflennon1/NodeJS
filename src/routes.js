const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
const PessoaController = require('./controllers/PessoaController');

routes.get('/products', ProductController.index);

routes.get('/pessoas', PessoaController.indexPessoas);

module.exports = routes;