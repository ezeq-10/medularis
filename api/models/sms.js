module.exports = function(sequelize) {
  'use_strict';

  // to get datatypes
  var DataType = require('sequelize');

  var Sms = sequelize.define('sent_sms', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      type: DataType.TEXT,
      allowNull: false
    },
    twilio_response: {
      type: DataType.TEXT
    }
  },{
    timestamps: false,
  });

  return Sms;

};