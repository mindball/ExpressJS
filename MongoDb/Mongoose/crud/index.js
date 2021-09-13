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
   
    let cat = new Cat({
        name: 'bai Iwan',
        age: 22
    }); 

    //Read
    //i patterns case insensitive
    Cat
        .find({name: { $regex: 'Bai', $options: 'i'}})
        .then(cats => 
            console.log(cats));

    Cat
        .findOne({name: { $regex: 'Bai', $options: 'i'}})
        .then((cat) => {
            console.log(cat)
        });        
    
    //Update
    Cat
        .findById('6139a95d54c63f1ab3062686')       
        .then(cat => {
          cat.name = 'NewCatName2'
          cat
            .save()
            .then(c => {
                console.log(c.name)
            })
        });
    //this query depend on .find({name: { $regex: 'Bai'}}) and  .findOne({name: { $regex: 'Bai', $options: 'i'}})
    Cat
        .findByIdAndUpdate('6139a95d54c63f1ab3062686', {
          $set: { name: 'Kotangens' }
        })
        .then(c => {
            console.log(c.name)
        });

    Cat
        .updateMany(
          { name: { $regex: 'NoMoreKittens', $options: 'i'} },
          { $set: { name: 'Bai' } },
          { multi: true })
          .then((cat) => {
            console.log(cat.name)
        });

    //Count
    Cat
        .count()
        .then(console.log);

    Cat
        .count({ age: { $gt: 15 } })
        .then(console.log);
});