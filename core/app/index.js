'use strict';

var registerPartials = require('../utils/register-partials');
var registerEndpoints = require('../utils/register-endpoints');
var renderView = require('../utils/render-view');
var renderViewMiddleware = require('../utils/render-view-middleware');
var testSupport = require('../utils/test-support');

var pagesServer = require('./pages');
var apiServer = require('./api');

// utility functions
exports.registerPartials     =  registerPartials;
exports.registerEndpoints    =  registerEndpoints;
exports.renderView           =  renderView;
exports.renderViewMiddleware =  renderViewMiddleware;

// test support
exports.testFixture = testSupport.fixture;
exports.testInitApp = testSupport.initApp;

// browserify
exports.initBrowserify =  require('../config/init-browserify');
exports.bundleOpts     =  require('../config/bundle-opts');

// server initilization
var once = require('once');

// wrapping init functions in once to make sure they only execute once,
// even if multiple modules initialize core as their dependency

exports.initPages = once(function (pagesApp, express, apiServerInfo) {
  pagesServer.init(pagesApp, express, apiServerInfo);
});

exports.postInitPages = once(function (pagesApp, server, express) {
  pagesServer.postInit(pagesApp, server, express);
});

exports.initApi = once(function (apiApp, restify) {
  apiServer.init(apiApp, restify);
});

exports.postInitApi = once(function (apiApp, server, restify) {
  apiServer.postInit(apiApp, server, restify);
});

