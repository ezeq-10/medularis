'use_strict'

var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    port = process.env.PORT || 3000,
    express_env = process.env.NODE_ENV || 'production',
    host = process.env.HOST || '127.0.0.1',
    app = express();

// express config
app.use(logger());
// parse application/x-www-form-urlencoded:
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json:
app.use(bodyParser.json());
app.use(methodOverride());


require('./config/db');


// routing
var routes = express.Router();
require('./api/routes')(app, routes);


// server init
app.listen(port)
console.log('Listening on port %d', port)

module.exports.app = app;