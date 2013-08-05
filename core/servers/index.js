'use strict';

var registerPartials = require('../utils/register-partials');
var registerEndpoints = require('../utils/register-endpoints');
var renderView = require('../utils/render-view');
var renderViewMiddleware = require('../utils/render-view-middleware');

var pagesServer = require('./pages');
var apiServer = require('./api');

exports.init = function (pagesApp, express, apiApp, restify) {
  pagesServer.init(pagesApp, express);
//  apiServer.init(apiApp, restify);
};

exports.registerPartials = registerPartials;
exports.registerEndpoints = registerEndpoints;
exports.renderView = renderView;
exports.renderViewMiddleware = renderViewMiddleware;
