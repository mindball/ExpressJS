const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const ObjectId = mongoose.ObjectId;

let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 0},
    owner: {type: ObjectId}
});

catSchema.path('age').validate(value => {
    return value >= 0 && value < 20
}, 'Age must be a number between 0 and 20');

catSchema.methods.sayHello = function () {
    return `Hello from ${this.name}. I am ${this.age} years old!`
};

mongoose.model('Cat', catSchema);

module.exports = mongoose.model('Cat');

