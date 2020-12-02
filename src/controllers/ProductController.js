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
    const productFilter = await Product.findById(req.params.id);
    return res.json(productFilter);
  },

//POST
  async store(req, res){
     const product = await Product.create(req.body);

     return res.json(product);
  }
  
}
