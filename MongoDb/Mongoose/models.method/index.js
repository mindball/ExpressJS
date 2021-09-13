const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {

//всичките функ-сти, се правят преди да се създаде модела

let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 0},
    owner: {type: ObjectId}
});

//Ако създадем arraw function. Example: () => 
catSchema.methods.sayHello = function () {
    return `Hello from ${this.name}. I am ${this.age} years old!`
};  

let Cat = mongoose.model('Cat', catSchema);    

Cat
    .find()
    .then(cats => {
        for (let cat of cats) {
            console.log(cat.sayHello());
        }
    });
});