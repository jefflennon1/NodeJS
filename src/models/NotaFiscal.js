const mongoose = require('mongoose');

const NotaFiscalSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  value:{
    type: Number,
    required: true
  }
});

mongoose.model('NotaFiscal', NotaFiscalSchema);

