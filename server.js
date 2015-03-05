'use_strict'

/**
 * Module dependencies.
 */

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var util = require('util');

// init express
var port = process.env.PORT || 3000;
var express_env = process.env.NODE_ENV || 'production';
var app = express();

// express config
app.use(logger());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// db config
var sequelize = require('./config/db');

// load models
var models = require('./api/models')(sequelize);

// load controllers
var controllers = require('./api/controllers')(app, models);

// routing
var router = express.Router();
require('./api/routes')(app, router, controllers);


// server init
app.listen(port)
console.log('Listening on port %d', port)

module.exports = app;