const express = require('express');
const config = require('./config/config');

let env = process.env.NODE_ENV || 'development';

const port = 12000;
let app = express();

require('./config/database.config')(config[env]);
require('./config/express')(app, config[env]);
require('./config/routes')(app);

app.listen(port);
