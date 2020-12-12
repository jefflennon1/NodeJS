const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

SiteSchema.plugin(mongoosePaginate);
mongoose.model('Site', SiteSchema);