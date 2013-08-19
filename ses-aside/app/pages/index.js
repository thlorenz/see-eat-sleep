'use strict';

var core = require('ses-core');
var dirs = require('../../config/directories');

exports.init = function (app, express) {
  core.registerEndpoints(__dirname, 'middleware', app, express);
  core.registerEndpoints(__dirname, 'routes', app, express);
  core.registerPartials(dirs.partials, 'ses-aside-');
};
