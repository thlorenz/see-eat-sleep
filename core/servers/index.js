'use strict';

var registerPartials = require('../utils/register-partials');
var registerEndpoints = require('../utils/register-endpoints');
var renderView = require('../utils/render-view');
var renderViewMiddleware = require('../utils/render-view-middleware');
var testSupport = require('../utils/test-support');

var pagesServer = require('./pages');
var apiServer = require('./api');

// utility functions
exports.registerPartials = registerPartials;
exports.registerEndpoints = registerEndpoints;
exports.renderView = renderView;
exports.renderViewMiddleware = renderViewMiddleware;

// test support
exports.testFixture = testSupport.fixture;
exports.testInitApp = testSupport.initApp;


// server initilization
exports.initPages = function (pagesApp, express, apiServerInfo) {
  pagesServer.init(pagesApp, express, apiServerInfo);
};

exports.postInitPages = function (pagesApp, server, express) {
  pagesServer.postInit(pagesApp, server, express);
};

exports.initApi = function (apiApp, restify) {
  apiServer.init(apiApp, restify);
};

exports.postInitApi = function (apiApp, server, restify) {
  apiServer.postInit(apiApp, server, restify);
};

exports.initBrowserify = require('../config/init-browserify');
