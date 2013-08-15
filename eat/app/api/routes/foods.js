'use strict';

var foodsData = require('../data/foods');

var go = module.exports = function (app) {
  app.get('/ses-eat/foods', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ images: foodsData });
  });
};
