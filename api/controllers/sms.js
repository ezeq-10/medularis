'use_strict';
var request = require('request'),
    util = require('util');

// model
//var Model = require('../models/sms');

exports.send_sms = function (req, res) {

    console.log('post method ok')

    if(! req.body)
      return res.status(500).json(500, {err: 'no data'});

    //Model.create

    return res.status(200).json({ message: 'ok'})
};

exports.get_sms = function (req, res) {

    var id = req.params.id;
    console.log('[get_sms] id:'+ id)
    res.status(200).json({ message: 'ok'})

};