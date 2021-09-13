const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {

let catSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, default: 0}    
});

catSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.secondName} ${this.lastName}`
});

let Cat = mongoose.model('Cat', catSchema);    

let cat = new Cat({
    firstName: 'Goshko',
    secondName: 'Ivanov',
    lastName: 'Radukanov',
    age: 12
});

cat
    .save()
    .then((cat => {
        console.log(cat.fullName);
    }))

});