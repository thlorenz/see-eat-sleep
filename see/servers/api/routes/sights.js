'use strict';

var sightsData = require('../data/sights');

var go = module.exports = function (app) {
  app.get('/ses-see/sights', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ images: sightsData });
  });
};
