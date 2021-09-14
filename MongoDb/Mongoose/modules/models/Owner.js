const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let ownerSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

mongoose.model('Owner', ownerSchema);

module.exports = mongoose.model('Owner');
