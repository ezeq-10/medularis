module.exports = function(models, request, twilio) {
  'use_strict';

  return {

    get: function(req, res) {

      var id = req.params.id;
      
      if(! id || id == 'undefined')
        return res.status(500).json(500, {err: 'empty id param'});

      console.log('[sms.get] id: %s', id)

      // find by id
      models.Sms.find(id)
        .then(function (data) {
          console.log('[sms.get] data: %s', JSON.stringify(data))
          return res.status(200).json({ data: data.twilio_response });
        },
        function (err) {
            console.error(err.message, err)
            return res.status(500).json({ err: 'No data available' })
        });        
    },

    send: function(req, res) {

      message = req.body.message;
      console.log('[sms.send] params: %s', message)

      if(! message)
        return res.status(500).json(500, {err: 'empty message param'});

      //console.log('[sms.send] twilio: %s', twilio)

      // request to twilio API      
      var url = "https://api.twilio.com/2010-04-01/Accounts/"+ twilio.twilio_id +"/SMS/Messages.json";
      var auth = "Basic " + new Buffer(twilio.twilio_id + ":" + twilio.twilio_token).toString("base64");
      
      console.log('[sms.send] twilio url: %s', url)

      var options = {
        method: 'POST',
        url: url,
        headers : {
          'Authorization': auth
        },
        form: {
          From: twilio.twilio_default_number,
          To: twilio.twilio_default_number,
          Body: message
        }
      };

      var twilio_response;

      // make request
      request(options, function(err, httpResponse, body) {
        
        //console.log('[sms.send] request err:%s res:%s body:%s', err, res, body)

        if(err)   
          twilio_response = JSON.parse(error);
        else
          twilio_response = JSON.parse(body);

        console.log('[sms.send] twilio_response: %s', twilio_response)

        // save object
        models.Sms.create({ message: message, twilio_response: twilio_response })
          .success(function (data) {
            console.log('[sms.send] last id: %s', data.id);
            return res.status(200).json({ message: 'data created', data: data.id });  
          })
          .error(function (err) {
            console.log('[sms.send] err: %s', err);
            return res.status(500).json({ err: err, message: 'data not created'});  
          });
      });      
    }

  }

};