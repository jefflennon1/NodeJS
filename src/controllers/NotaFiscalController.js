const mongoose = require('mongoose');
const NotaFiscal = mongoose.model('NotaFiscal');

module.exports = {
  async index(req, res){
    const nota = await NotaFiscal.find();
    return res.json(nota);
  }
}