const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');


module.exports = {
  async indexPessoas(req, res) {
    const pessoas =  await Pessoa.find();

    return res.json(pessoas);
  }
}


