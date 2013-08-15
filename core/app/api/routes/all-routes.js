'use strict';

var renderRoutes = require('render-routes');

var go = module.exports = function (app, restify) {
  app.get('/routes', function (req, res) {
    res.header('ContentType', 'text/html');
    res.end(renderRoutes(app.router.routes));
  });
};
