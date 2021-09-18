let Recipe = require('../models/Recipe');

//Добра практика е когато имам достъп до форма метода, които я достъпва да се изписва add-recipeGet 
module.exports.addGet = (req, res) => {
    res.render('recipe/add');
};

module.exports.addPost = (req, res) => {
    let recipeObj = req.body;
    recipeObj.image = `/public/images/${req.file.filename}`;
    
    Recipe.create(recipeObj)
        .then(() => {
            res.redirect('/');
        });
};