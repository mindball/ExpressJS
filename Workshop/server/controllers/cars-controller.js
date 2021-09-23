const Car = require("../data/Car")
const errorHandler = require('../utilities/error-handler')

module.exports = {
    addGet: (req, res) => {
      res.render('cars/add')
    },
    addPost: (req, res) => {
      let reqCar = req.body
      // Add validations!
      if( reqCar.pricePerDay <= 0) {
        res.locals.globalError = 'Price per day cannot be less than 0'
        res.render('cars/add', reqCar)
        return;
      }

      //Добра практика е винаги да създаваме нов обект и ние да контролираме какво се създава и да се записва.
      Car.create({
          make: reqCar.make,
          model: reqCar.model,
          year: reqCar.year,
          power: reqCar.power,
          image: reqCar.image,
          pricePerDay: reqCar.pricePerDay
      })
      .then(car => {
          res.redirect('/cars/all')
      })
      .catch(err => {
        res.locals.globalError = errorHandler.handleMongooseError(err)
        console.log(err)
        res.render('cars/add', reqCar)
      })
    },
    allGet: (req, res) => {
      Car.find()
        .then(cars => {
          res.render('cars/all', {cars: cars})
        })
    }
}