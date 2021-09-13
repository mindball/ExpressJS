const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {

let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 0}    
});

catSchema.path('age').validate(value => {
    return value >= 0 && value < 20
}, 'Age must be a number between 0 and 20');

let Cat = mongoose.model('Cat', catSchema);    
let cat = new Cat({
    name: 'somethings',
    age: -1
});

cat
    .save()
    .then(cat => {
        console.log(cat)
    })
    .catch(err => {
        console.log(err)
    });
    
});