'use strict';

var core = require('ses-core');

exports.init = function (app, restify) {
  core.registerEndpoints(__dirname, 'routes', app, restify);
};
