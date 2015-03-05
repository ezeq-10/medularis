module.exports = function(models) {
  'use_strict';

  return {

    get: function(req, res) {
      var id = req.params.id;
      console.log('[sms.get] id:'+ id)

      if(! id)
        return res.status(500).json(500, {err: 'empty id param'});
      
      res.status(200).json({ message: 'ok'})
    },

    send: function(req, res) {
      console.log('[sms.send]')

      if(! req.body)
        return res.status(500).json(500, {err: 'empty message params'});

      //Model.create

      return res.status(200).json({ message: 'ok'})
    }

  }

};