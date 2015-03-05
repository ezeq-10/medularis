module.exports = function(app, models, request, twilio) {
  'use_strict';

  return {
    sms: require('./sms')(models, request, twilio)
  }

};