let Recipe = require('../models/Recipe')

module.exports =  {    
    about: (req, res) => res.render('home/about'),
    contactUs: (req, res) => res.render('home/contact-us'),
}

//upper same syntax
module.exports.index = (req, res) => {
    Recipe.find()
        .then(recipes => {
            res.render('home/index', {recipes: recipes})
        });
}    

// module.exports.about = (req, res) => {
//     res.render('about/about')
// }    