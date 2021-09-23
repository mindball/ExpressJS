const mongoose = require('mongoose')


const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    power: { type: Number },
    image: { type: String, require: true },
    pricePerDay: { type: Number, required: true }
})

let Car = mongoose.model('Car', carSchema)

module.exports = Car