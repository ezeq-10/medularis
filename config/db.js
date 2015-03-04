'use_strict'

// IMPORT MODELS
// =============================================================================
var Sequelize = require('sequelize');


// db config
/*
var pg_dbname = process.env.PGSQL_DBNAME || 'medularis_sms',
  pg_user = process.env.PGSQL_DBUSER || 'postgres',
  pg_passwd = process.env.PGSQL_DBPSWD,
  pg_host = process.env.PGSQL_DBHOST || '127.0.0.1',
  pg_port = process.env.PGSQL_DBPORT || 5432;
*/

var config = {
  database: 'medularis_sms',
  user: 'postgres',
  password: '',
  port: 5432
}  

// initialize database connection
var sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    dialect: 'postgres',
    port: config.port
    logging: console.log,
    define: {
      timestamps: false
    }
  }
);

var DataTypes = require("sequelize");
 
/*
sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })
*/
module.exports = sequelize;
