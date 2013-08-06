'use strict';

var go = module.exports = function (app, restify) {
  app.get('/routes', function (req, res) {
    res.json(JSON.stringify(app.routes));
  });
};
