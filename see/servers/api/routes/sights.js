'use strict';

var go = module.exports = function (app) {
  app.get('/data/sights', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send([ 'url1', 'url2', 'url2' ]);
  });
};
