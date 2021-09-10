const mongodb = require('mongodb');

let connection = 'mongodb://localhost:27020/cats';
let dbObj = new mongodb.MongoClient();

dbObj.connect(, (err, db) => {
    if(err) {
        console.log(err);
        return;
    }

    let cats = [
        { name: 'Vankata', age: 15 },
        { name: 'Pesho', age: 1 },
        { name: 'Bai ivan', age: 122, color: 'Yellow'}       
    ];

    const options = { ordered: true };
   
    db.cats.insertMany(cats, options, (err, result) => {
        if(err) {
            console.log(err);
            return;
        }

        console.log(result.insertedCount);
    })
});


