const mongoose = require('mongoose');

const CidadeEschema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  estado:{
    type: String,
    required: true
  }
})

mongoose.model('Cidade', CidadeEschema);