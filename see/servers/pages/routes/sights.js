'use strict';

var sightsData = require('../../api/data/sights');

var go = module.exports = function (app) {
  app.get('/data/ses-see/sights', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ images: sightsData });
  });
};
