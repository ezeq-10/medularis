'use_strict';

module.exports = function(app, routes) {

    
    var sms = require('./controllers/sms');

    routes.post('/api/v1/sms', sms.send_sms);
    routes.get('/api/v1/sms/:id', sms.get_sms);

    app.use(routes)
};