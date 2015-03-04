'use_strict';

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('sent_sms', {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message_body: {
      type: sequelize.TEXT,
      allowNull: false
    },
    twilio_response: {
      type: sequelize.TEXT,
      allowNull: false
    }
  },
  instanceMethods: {


  } 
  );

};
