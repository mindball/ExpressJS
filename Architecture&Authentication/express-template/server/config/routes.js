const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  //достъп до about само от регистрирани потребители
  //app.get('/about', auth.isAuthenticated, controllers.home.about)

  //достъп до about само от регистрирани потребители с роля 'Admin'
  app.get('/about', auth.isInRole('Admin'), controllers.home.about)

  app.get('/users/register', controllers.users.registerGet)
  app.post('/users/register', controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.post('/users/logout', controllers.users.logout)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
