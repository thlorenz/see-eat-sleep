'use strict';

var bedsData = require('../data/beds');

var go = module.exports = function (app) {
  app.get('/ses-sleep/beds', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ images: bedsData });
  });
};
