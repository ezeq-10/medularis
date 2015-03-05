'use_strict'

var Sequelize = require('sequelize');

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
    port: config.port,
    sync: { force: true },
    omitNull: true
  }
);

sequelize
  .authenticate()
  .complete(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })

module.exports = sequelize;
