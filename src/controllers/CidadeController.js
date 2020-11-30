const mongoose = require('mongoose');
const Cidades = mongoose.model('Cidade');


module.exports = {
  async index(req, res){
    const cidade = await Cidades.find();

    return res.json(cidade);
  }
}