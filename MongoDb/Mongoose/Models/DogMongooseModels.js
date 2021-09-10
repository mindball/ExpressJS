const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const ObjectId = mongoose.ObjectId;

let modelSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, default: 0}
});

let Dog = mongoose.model('Dog', modelSchema); 

//valid model
let dog = new Dog ({
    name: 'bai vasko',
    age: 18
});
 //invalid model:
    // let dog = new Dog({
    //     age: 22
    // })

module.exports = dog;