const mongoose = require('mongoose');
const Sites = mongoose.model('Site');

module.exports = {
    async index(req, res){
      const site = await Sites.find();

      return res.json(site);
    },
    async create(req, res){
      const site = await Sites.create(req.body);
      return res.json(site);
    }
};