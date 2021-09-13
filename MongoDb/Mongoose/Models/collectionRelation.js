const mongoCrud = require('./mongooseCRUD');

function findCats (owner, cat) {
    owner.find({})
        .then(owners => {
            console.log(owners)

            for (let o of owners) {
                cat.find({owner: o._id})
                .then(cats => {
                    console.log(cats)
                })
            }
        })
}

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

    findCats(Owner, Cat);
}