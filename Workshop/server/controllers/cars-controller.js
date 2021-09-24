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
      let pageSize = 2 //след време може и да са 10
      let page = parseInt(req.query.page) || 1

      Car.find().lean()
        .sort( {
          createdAt: -1
        })
        .skip((page-1) * pageSize)
        .limit(pageSize)
        .then(cars => {
          res.render('cars/all', {
            cars: cars,
            hasPrevPage: page > 1,
            hasNextPage: cars.length > 0,
            prevPage: page - 1,
            nextPage: page + 1
          })
        })
    }
}