const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {
  //GET ALL
  async index(req, res){
    const { page = 1} = req.query;
    const products = await Product.paginate({}, { page, limit: 5});
    return res.json(products);
  },
// GET WITH FILTER
  async show(req, res){
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

//POST
  async store(req, res){
     const product = await Product.create(req.body);
     return res.json(product);
  },

  //UPDATE
  async update(req, res){
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(product);
  },

  //DELETE
  async destroy(req, res){
    await Product.findByIdAndDelete(req.params.id);
    return res.json('Projeto deletado!');
  }
}
