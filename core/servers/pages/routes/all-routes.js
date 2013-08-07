'use strict';
var renderRoutes = require('render-routes');

var go = module.exports = function (app, express) {
  app.get('/routes', function (req, res) {
    res.send(renderRoutes(app.routes));
  });
};
