const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
},
  age:{
    type: String,
    required: true
  }
});

mongoose.model('Pessoa', PessoaSchema);