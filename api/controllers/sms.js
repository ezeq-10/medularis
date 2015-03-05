module.exports = function(models) {
  'use_strict';

  return {

    get: function(req, res) {

      var id = req.params.id;
      
      if(! id)
        return res.status(500).json(500, {err: 'empty id param'});

      console.log('[sms.get] id: %s', id)

      // find by id
      models.Sms.find(id)
        .then(function (data) {
          console.log('[sms.get] data: %s', data)
          return res.status(200).json({ data: JSON.stringify(data) });
        },
        function (err) {
            console.error(err.message, err);
            return res.status(500).json({ err: 'No data available' })
        });        
    },

    send: function(req, res) {

      message = req.body.message;

      console.log('[sms.send] params: %s', message);

      if(! message)
        return res.status(500).json(500, {err: 'empty message param'});

      // save object
      models.Sms.create({ message: message })
        .then(function (data) {
          console.log('[sms.get] data: %s', data)
          return res.status(200).json({ data: JSON.stringify(data) });
        },
        function (err) {
            console.error('[sms.get] err: %s', err.message);
            return res.status(500).json({ err: 'No data available' })
        });   
    }

  }

};