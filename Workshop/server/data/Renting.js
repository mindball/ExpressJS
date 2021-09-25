const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let rentSchema = new mongoose.Schema({
    user: {type: ObjectId, required: true, ref: 'User'},
    car: {type: ObjectId, required: true, ref: 'Car'},
    days: {type: Number, required: true},
    rentedOn: { type: Date, default: Date.now() },
    totalPrice: {type: Number, required: true }
})

mongoose.model('Renting', rentSchema)

module.exports = mongoose.model('Renting')
