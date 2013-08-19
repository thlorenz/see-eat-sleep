'use strict';

var core = require('ses-core');
var pagesServer = require('./pages');

exports.initPages = function (pagesApp, express, apiServerInfo) {
  core.initPages(pagesApp, express, apiServerInfo);

  pagesServer.init(pagesApp, express, apiServerInfo);
};

exports.postInitPages = function (pagesApp, pagesServer, express) {
  core.postInitPages(pagesApp, pagesServer, express);
};

exports.initApi = function (apiApp, restify) {
  core.initApi(apiApp, restify);
};

exports.postInitApi = function (apiApp, apiServer, restify) {
  core.postInitApi(apiApp, apiServer, restify);
};
