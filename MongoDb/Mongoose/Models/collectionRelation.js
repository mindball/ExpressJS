const mongoCrud = require('./mongooseCRUD');

module.exports = function(mongoose) {
     const ObjectId = mongoose.ObjectId;

     let catSchema = new mongoose.Schema({
        name: { type: String, required: true },
        age: { type: Number, default: 0},
        owner: {type: ObjectId}
    });

    let ownerSchema = new mongoose.Schema({
        name: { type: String, required: true }
    });

    let Cat = mongoose.model('Cat', catSchema);    
    let Owner = mongoose.model('Owner', ownerSchema);
    let newOwner = new Owner({
        name: 'bai toshko'
    });

    mongoCrud(newOwner)
        .then((o) => {
            new Cat({
                name: "Silvester",
                age: 111,
                owner: o._id
            })
            .save()
            .then((c) => {
                console.log(c)
            })
        })

}