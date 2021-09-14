const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {
    if(err) {
        console.log(err);
        return;
    }

    let catSchema = new mongoose.Schema({
        name: { type: String, required: true },
        age: { type: Number, default: 0}        
    });

    let Cat = mongoose.model('Cat', catSchema);
   
    Cat.find({})
        .where('age').gt(1)
        .then(cats => {
            console.log(cats)
        });

    Cat.find({})
        .where('age').gt(20)
        .where('name').equals('Silvester')
        .then(cats => {
            console.log(cats)
    });

    Cat.find({})
        .where('age').gt(1)
        .limit(10)
        .then(cats => {
            console.log(cats)
        });

});