'use strict';

var dirs = require('../../config/directories');
var core = require('../index');

exports.init = function (app, restify, apiServer) {
  core.registerPartials(dirs.partials, 'ses-core-');

  // TODO: logger
  // app.use(restify.logger('dev'));
  app.set('view engine', 'hbs');

  // TODO: forward /data/* to api server

  core.registerEndpoints(__dirname, 'middleware', app, restify);
  core.registerEndpoints(__dirname, 'routes', app, restify);

  // TODO: possibly add hyperwatch here
};
