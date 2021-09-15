let mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;

let tagSchema = mongoose.Schema({
    name: {type: String, required: true},
    creationDate: {type: Date, default: Date.now()},
    images: [{type: ObjectId, ref: 'Image'}]
});

mongoose.model('Tag', tagSchema);

module.exports = mongoose.model('Tag');