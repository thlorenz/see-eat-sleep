'use strict';

var core = require('ses-core');
var pagesServer = require('./pages');
var apiServer = require('./api');

exports.initPages = function (pagesApp, restify, apiServer) {
  core.initPages(pagesApp, restify, apiServer);

  pagesServer.init(pagesApp, restify);
};

exports.initApi = function (apiApp, restify) {
  core.initApi(apiApp, restify);

  // apiServer.init(apiApp, restify);
};
