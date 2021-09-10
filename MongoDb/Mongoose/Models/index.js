const mongoose = require('mongoose');

const dogModel = require('./DogMongooseModels')

mongoose.Promise = global.Promise;
const ObjectId = mongoose.ObjectId;


mongoose.connect('mongodb://localhost:27017/catsdb', (err) => {
    if(err) {
        console.log(err);
        return;
    }

    
    dogModel.save()
        .then((d) => {
            console.log(d)
        })
        //common error
        // .catch(err => {
        //     console.log(err)
        // });
        //detailed error handler message
        .catch(err => {
            let errMsg = err.errors
            for (let errKey in errMsg) {
                console.log(errMsg[errKey].message)
        }
    });

    // let animalSchema = new mongoose.Schema({
    //     name: { type: String, required: true },
    //     age: { type: Number, default: 0},
    //     fish: {type: ObjectId}
    // });

    // let Animal = mongoose.model('Animal', animalSchema);

    // let fishSchema = new mongoose.Schema({
    //     name: { type: String, required: true }
    // });

    // let Fish = mongoose.model('Fish', fishSchema);

    // let fish = new Fish({
    //     name: 'Fish-Ton'
    // })
    // .save()
    // .then((f) => {
    //     new Animal({
    //         name: 'AnimalBigBoss',
    //         age: 15,
    //         owner: f._id
    //     })
    //     .save()
    //     .then((c) => {
    //         console.log(c)
    //     })
    // });
})