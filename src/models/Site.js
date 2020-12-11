const mongoose = require('mongoose');

const SiteSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  },
  location:{
    type:String,
    required: true
  },
  owner:{
    type: String,
    required: true
  }
});


mongoose.model('Site', SiteSchema);