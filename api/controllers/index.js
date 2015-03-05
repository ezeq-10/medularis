module.exports = function(app, models) {
  'use_strict';

  return {
    sms: require('./sms')(models)
  }

};