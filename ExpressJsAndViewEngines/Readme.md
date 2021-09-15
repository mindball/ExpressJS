## Routes
### Paths(routes) can contain special characters
```javascript
//Special symbol * - може да се ползва всеки един route
//Може да се използва и за error handling но трябва да е на последен, след като
//всичките методи и маршрути са прихванати(match) това трябва да се изпълни последно
app.all('*', (req, res) => {
    res.send('Error 404');
})
```
```
//Use regex
//всичко което завършва на fly
app.get(/.*fly$/, (req, res) => {
  res.send('butterfly, dragonfly')
})
```
### Paths can have parameters
```js
//:userId, :bookId
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
```

## Static files
```js
app.use(express.static('public')) търси в root-директорията, public
app.use('/static', express.static('public')) търси в root-директорията /static/public/

```
