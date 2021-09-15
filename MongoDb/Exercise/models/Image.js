let mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

let imageSchema = mongoose.Schema({
    url: {type: String, required: true},
    creationData: {type: Date, default: Date.now()},
    description: {type: String},
    tag: [{type: ObjectId, ref: 'Tag'}]
});

mongoose.model('Image', imageSchema);

module.exports = mongoose.model('Image');