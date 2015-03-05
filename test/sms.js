// test/sms.js
'use_strict';

// force the test environment to 'test'
process.env.NODE_ENV = 'test';

// load modules
var supertest = require('supertest'),
  expect = require('chai').expect,
  util = require('util');


// application & model
var app = require('../server').app


// test data
var smsObject = { 
  message_body: "Testing twilio.com",
  twilio_response: "Twilio response"
};
var responseId = 1;

//Testing
describe('Model testing with Postgresql.', function () {

  /*    
  beforeEach(function (done) {
    sequelize.sync({ force : true })
    .then(function () {
      done();
    })
    .catch(function (err) {
      console.log(err)
    });
  });
  */

  describe('SMS Model:', function() {
    it('should create a sent sms.', function (done) {
      supertest(app)
        .post('/api/v1/sms')
        .send(smsObject)
        .expect(200)
        .end(function(err, res) {
          //console.log('err:%s res:%s', err, res);
          if(! err)
            done();
        });
    });

    
    it('should return sms data', function (done) {
      supertest(app)
        .get('/api/v1/sms/' + responseId)
        .expect(200)
        .end(function(err, res) {
          //console.log('err:%s res:%s', err, res)
          if(! err)
            done();
        });
    });

  });

});
