module.exports = function(mongoose, collectionName) {
    let modelSchema = new mongoose.Schema({
        name: {type: String, required: true},
        age: {type: Number, default: 0}
    });

    let model = mongoose.model(collectionName, modelSchema); 

    return model;
}