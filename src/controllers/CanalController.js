const mongoose = require('mongoose');
const Canal = mongoose.model('Canal');

module.exports = {
 async index(req, res){
    const canais = await Canal.find();
    return res.json(canais);
  },

 async create(req, res){
    const canal = await Canal.create(req.body);

    return res.json(canal);
  }
}