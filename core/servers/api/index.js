'use strict';

var dirs = require('../../config/directories');
var core = require('../index');

exports.init = function (app, restify) {
  core.registerEndpoints(__dirname, 'routes', app, restify);
};
