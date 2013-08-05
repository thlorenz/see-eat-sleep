'use strict';

var go = module.exports = function (app, express) {
  app.get('/routes', function (req, res) {
    res.json(app.routes);
  });
};
