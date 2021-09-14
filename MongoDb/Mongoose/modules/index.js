const mongoose = require('mongoose');
const { where } = require('./models/Cat');
const catModule = require('./models/Cat')
const ownerModule = require('./models/Owner')

mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {
    if(err) {
        console.log(err);
        return;
    }

    let Cat = catModule;    

    let Owner = ownerModule;

    Cat.find({})
        .where('age').gt(10)
        .select('name')
        .then(c => {
            console.log(c)
        });
   
    Owner.find({})
        where('name').equals('bai toshko')
        .then(o => {
            console.log(o)
        });
});