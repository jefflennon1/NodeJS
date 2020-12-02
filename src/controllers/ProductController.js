const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {
  //GET ALL
  async index(req, res){
    const products = await Product.find();
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

  
  
}
