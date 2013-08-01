'use strict';

var path =  require('path');
var fs   =  require('fs');
var dirs =  require('../../config/directories');
var logRequest = require('log-request');

var app   =  require('./app');

var go = module.exports = function (opts) {


  app.get('/', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ msg: 'Welcome to the see-eat-sleep - API server' });
  });

  var server = app.listen(opts.port);

  server
    .on('listening', function () {
      console.log('API server listening on http://localhost:%d in debug mode', opts.port);
    })
    .on('request', logRequest);

  return { app: app, server: server };
};
