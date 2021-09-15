let express = require('express');
let app = express();
const port = 1337;

app.use(express.static('public'))
//app.use('/static', express.static('public'))

// app.all('/', (req, res) => {
//     let method = req.method;
//     res.send(`All method - typeof httpmethod: ${method}`);
// })

//get and all have same route but all match first and send response, get not match
app.get('/', (req, res) => {
    res.send('H1!');
});

// app.all('/all', (req, res) => {
//     let method = req.method;
//     res.send(`All method - typeof httpmethod: ${method}`);
// })

//Use regex http://localhost:1337/butterfly, http://localhost:1337/fly, http://localhost:1337/dragonfly
app.get(/.*fly$/, (req, res) => {
    res.send('butterfly, dragonfly');
});

//Use parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
    console.log(req.params);
    res.send(req.params);
  });  

//may use error handle
app.all('*', (req, res) => {
    res.send('Error 404');
});

app.listen(port, () => {
    console.log(`Express running on port ${port}...`);
});