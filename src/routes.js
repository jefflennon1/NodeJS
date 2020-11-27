const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
const PessoaController = require('./controllers/PessoaController');
const NotasFiscalController = require('./controllers/NotaFiscalController');


routes.get('/products', ProductController.index);

routes.get('/pessoas', PessoaController.indexPessoas);

routes.get('/notasFiscais',NotasFiscalController.index);

module.exports = routes;