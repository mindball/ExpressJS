const Car = require("../data/Car")
const Renting = require("../data/Renting")
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
    },
    searchGet: (req, res) => {
      let search = req.query.search.trim().toLowerCase()
      Car.find({make: new RegExp('^'+search+'$', "i")}).lean()
        .then(cars => {
          res.render('cars/all', {
            cars: cars
          })
        })
    },
    rentPost: (req, res) => {
        let carId = req.params.id
        let userId = req.user.id
        let rentDays = parseInt(req.body.days)

        //Add validations
        if(rentDays < 1 ) {
          res.locals.globalError = 'Rent day cannot be less than 1'
          res.render('cars/all', reqCar)
          return;
        }
         //Check existing car & it was rented
        Car.findById(carId)
          .then(car => {
            if(car.isRented) {
              res.locals.globalError = 'Car is already rented'
              res.render('cars/all')
              return;
            }

            Renting.create({
                user: userId,
                car: carId,
                days: rentDays,
                totalPrice: rentDays * car.pricePerDay
            })
            .then(rent => {
              car.isRented = true;
              car.save() //ако това fail-не car.isRented трябва да му върнат стойността + 
                        // в рентин документа трябва да изтриеем записа които сме направили по горе
                .then(c => {
                  res.redirect('cars/someThankyPage')
                })
                .catch(err => {
                  //Ако случайно не може да се запише че колата е rented трябва да имам правилни данни
                  //Тоест трябва да изтрием записа по горе.
                })
            })
            .catch(err => {
              let message = errorHandler.handleMongooseError(err)
              res.render('cars/all')      
            })
          })
          .catch(err => {
            let message = errorHandler.handleMongooseError(err)
            res.render('cars/all', reqCar)            
          })

    }
}