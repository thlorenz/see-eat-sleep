'use strict';

var sights = require('../data/sights');

var go = module.exports = function (app) {
  app.get('/data/sights', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(sights);
  });
};
