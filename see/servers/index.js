'use strict';

var core = require('ses-core');
var pagesServer = require('./pages');
var apiServer = require('./api');

exports.initPages = function (pagesApp, restify, apiServerInfo) {
  core.initPages(pagesApp, restify, apiServerInfo);

  pagesServer.init(pagesApp, restify, apiServerInfo);
};

exports.postInitPages = core.postInitPages;

exports.initApi = function (apiApp, restify) {
  core.initApi(apiApp, restify);

  apiServer.init(apiApp, restify);
};

exports.postInitApi = core.postInitApi;
