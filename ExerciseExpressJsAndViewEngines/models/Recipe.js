const mongoose = require('mongoose');

let recipeShcema = mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    image: String
})

mongoose.model('Recipe', recipeShcema);
module.exports = mongoose.model('Recipe');
