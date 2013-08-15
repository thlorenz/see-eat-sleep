'use strict';

var go = module.exports = function (app, restify) {
  app.get('/', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ msg: 'Welcome to the see-eat-sleep - API server' });
  });
};
