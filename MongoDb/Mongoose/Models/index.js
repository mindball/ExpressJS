const mongoose = require('mongoose');

const mongooseModel = require('./mongooseModels');
const mongoCrud = require('./mongooseCRUD');
const collectionRelation = require('./collectionRelation');


mongoose.Promise = global.Promise;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {
    if(err) {
        console.log(err);
        return;
    }

    //valid model
    let dog = new mongooseModel(mongoose, 'Dog') ({
        name: 'bai zlatko',
        age: 18
    });
    //invalid model:
    // let dog = new Dog({
    //     age: 22
    // })    
    mongoCrud(dog)
        .then((d) => {
            console.log(d)
        });

///////////////Relation collections////////////////////////////
    collectionRelation(mongoose);
})