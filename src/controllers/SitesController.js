const mongoose = require('mongoose');
const Sites = mongoose.model('Site');

module.exports = {
    async index(req, res){
      const { page = 1 } = req.query;
      const site = await Sites.paginate({}, {page, limit: 5});
      return res.json(site);
    },
    async create(req, res){
      const site = await Sites.create(req.body);
      return res.json(site);
    },
    async update(req, res){
      const { id }  = req.params;
      const site = await Sites.findByIdAndUpdate(id, req.body, { new: true });
      res.json(site);
    },
    async destroy(req, res){
      await Sites.findByIdAndDelete(req.params.id);
      res.json('Site deletado com sucesso!') 
    }
}
  