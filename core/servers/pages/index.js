'use strict';

var dirs = require('../../config/directories');
var core = require('../index');

exports.init = function (app, express) {
  core.registerPartials(dirs.partials, 'ses-core-');

  app.use(express.logger('dev'));
  app.set('view engine', 'hbs');

  core.registerEndpoints(__dirname, 'middleware', app, express);
  core.registerEndpoints(__dirname, 'routes', app, express);

  // TODO: possibly add hyperwatch here
};
