const mongoose = require('mongoose');
const Estados = mongoose.model('Estado');

module.exports = {
    async index(req, res){
        const estado = await Estados.find();
        return res.json(estado);
    }
}