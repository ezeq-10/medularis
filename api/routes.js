module.exports = function(app, router, controllers) {
  'use strict';

  router.post('/api/v1/sms', controllers.sms.send);
  router.get('/api/v1/sms/:id', controllers.sms.get);

  app.use(router)
};