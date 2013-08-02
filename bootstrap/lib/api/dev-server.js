'use strict';

var logRequest = require('log-request');

var restify = require('../../').restify;
var app = require('./app');

// this needs to be added before any routes so we do it right away
app.use(restify.CORS());

var go = module.exports = function (apiOpts) {

  app.get('/', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ msg: 'Welcome to the see-eat-sleep - API server' });
  });

  var server = app.listen(apiOpts.port);

  server
    .on('listening', function () {
      console.log('API server listening on http://localhost:%d in debug mode', apiOpts.port);
    })
    .on('request', logRequest);

  return { app: app, server: server };
};

