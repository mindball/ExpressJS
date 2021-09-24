const mongoose = require('mongoose')


const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    power: { type: Number },
    image: { type: String, require: true },
    createdAt: {type: Date, default: Date.now()},
    pricePerDay: { type: Number, required: true },
    isRented: { type: Boolean, default: false }
})

mongoose.model('Car', carSchema)

module.exports = mongoose.model('Car')