'use strict';

var core = require('ses-core');
var pagesServer = require('./pages');
var apiServer = require('./api');

exports.init = function (pagesApp, express, apiApp, restify) {
  core.init(pagesApp, express, apiApp, restify);

  pagesServer.init(pagesApp, express);
  // apiServer.init(apiApp, restify);
};
