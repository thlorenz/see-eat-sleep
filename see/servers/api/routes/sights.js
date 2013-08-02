'use strict';

var sightsData = require('../data/sights');
var restify = require('ses-bootstrap').restify;

var go = module.exports = function (app) {
  app.use(restify.CORS());

  app.get('/data/ses-see/sights', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ images: sightsData });
  });
};
