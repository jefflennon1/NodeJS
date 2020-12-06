const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
const PessoaController = require('./controllers/PessoaController');
const NotasFiscalController = require('./controllers/NotaFiscalController');
const CidadesController = require('./controllers/CidadeController');
const EstadosController = require('./controllers/EstadoController');
const CanalController = require('./controllers/CanalController');


routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store)
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/pessoas', PessoaController.indexPessoas);

routes.get('/notasFiscais',NotasFiscalController.index);

routes.get('/cidades', CidadesController.index);

routes.get('/estados',EstadosController.index);

routes.get('/canais',CanalController.index);
routes.post('/canais', CanalController.create);
routes.put('/canais/:id', CanalController.update);
routes.delete('/canais/:id', CanalController.remove);


module.exports = routes;