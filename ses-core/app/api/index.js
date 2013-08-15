'use strict';

var dirs = require('../../config/directories');
var core = require('../index');
var logRequest = require('log-request');

exports.init = function (app, restify) {
  // TODO: why is this not loggging?
  // app.use(restify.requestLogger());

  app.server.on('request', logRequest);
  core.registerEndpoints(__dirname, 'routes', app, restify);
};

exports.postInit = function (app, server, restify) {
};
