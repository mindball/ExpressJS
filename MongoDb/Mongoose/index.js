const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {
    if(err) {
        console.log(err);
        return;
    }

    let Cat = mongoose.model('Cat', {
        name: { type: String, require: true},
        age: { type: Number, default: 0}
    });

    // let cat = new Cat( {
    //     name: 'Bai Ivan',
    //     age: 14
    // });

    // cat
    // .save()
    // .then(cat => {
    //     console.log(cat)
    // });

    // Cat
    // .find({})
    // .exec()
    // .then(cats => {
    //     console.log(cats)
    // });

    // Cat
    // .find({id: '6139a8d284c7510b1621d0e7'})
    // .exec()
    // .then(cat => {
    //     console.log(cat)
    // });

    // Cat
    // .find({name: 'Vankata'})
    // .exec()
    // .then(cat => {
    //     console.log(cat)
    // });

    // Cat
    // .findOne({name: 'Bai Ivan'})
    // .exec()
    // .then(cat => {
    //     console.log(cat)
    // });

    let Owner = mongoose.model('Owner', {
        name: { type: String, required: true, index: true, unique: true },        
        cats: [Cat.schema]        
   });

   
    let myrkins = new Cat({ name: 'Myrkins', age: 1 });
    let malcho = new Cat({ name: 'Malcho', age: 1 });   
    var newObj = new Owner({ name: 'bar', cats: [myrkins, malcho]});

    newObj
        .save()
        .then((obj) => {
            console.log(obj)
        });
});