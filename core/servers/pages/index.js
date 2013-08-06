'use strict';

var dirs = require('../../config/directories');
var core = require('../index');

exports.init = function (app, express, apiServer) {
  core.registerPartials(dirs.partials, 'ses-core-');

  app.use(express.logger('dev'));
  app.set('view engine', 'hbs');

  // TODO: forward /data/* to api server

  core.registerEndpoints(__dirname, 'middleware', app, express);
  core.registerEndpoints(__dirname, 'routes', app, express);

  // TODO: possibly add hyperwatch here
};
