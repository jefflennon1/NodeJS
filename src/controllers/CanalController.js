const mongoose = require('mongoose');
const { update } = require('./ProductController');
const Canal = mongoose.model('Canal');

module.exports = {
 async index(req, res){
    const canais = await Canal.find();
    return res.json(canais);
  },

 async create(req, res){
    const canal = await Canal.create(req.body);
    return res.json(canal);
  },

  async update(req,res){
    const canal = await Canal.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.json(canal);
  },

  async remove(req, res){
    await Canal.findByIdAndDelete(req.params.id);
    return res.json('Canal deletado com sucesso!');
  }
}