const mongoose = require('mongoose');

const CanalSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  }
})

mongoose.model('Canal', CanalSchema);