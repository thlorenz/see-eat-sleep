'use strict';

var registerPartials = require('../utils/register-partials');
var registerEndpoints = require('../utils/register-endpoints');
var renderView = require('../utils/render-view');
var renderViewMiddleware = require('../utils/render-view-middleware');

var pagesServer = require('./pages');
var apiServer = require('./api');

exports.initPages = function (pagesApp, express, apiServerInfo) {
  pagesServer.init(pagesApp, express, apiServerInfo);
};

exports.initApi = function (apiApp, restify) {
  apiServer.init(apiApp, restify);
};

exports.registerPartials = registerPartials;
exports.registerEndpoints = registerEndpoints;
exports.renderView = renderView;
exports.renderViewMiddleware = renderViewMiddleware;

exports.browserify = require('../config/browserify');
