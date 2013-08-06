'use strict';

var core = require('ses-core');
var dirs = require('../../config/directories');

exports.init = function (app, restify) {
  core.registerEndpoints(__dirname, 'middleware', app, restify);
  core.registerEndpoints(__dirname, 'routes', app, restify);
  core.registerPartials(dirs.partials, 'ses-see-');
};
