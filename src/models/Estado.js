const mongoose = require('mongoose');

const EstadoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cep:{
    type: String,
    required: true
  }  
})

mongoose.model('Estado', EstadoSchema);