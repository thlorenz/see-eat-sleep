'use strict';

var path = require('path');
var core = require('ses-core');
var dirs = require('./config/directories');

var app = require('./app');

var viewPath = path.join(dirs.templates, 'index.hbs');

// The core browserify instance exposes jquery, backbone and underscore
exports.initBrowserify = core.initBrowserify;
exports.bundleOpts = { debug: true, insertGlobals: false };

exports.initPages = function (pagesApp, express, apiServerInfo) {
  app.initPages(pagesApp, express, apiServerInfo);
  pagesApp.use(core.renderViewMiddleware(viewPath, { title: 'see-eat-sleep' }));
};

exports.postInitPages = app.postInitPages;

exports.initApi = function (apiApp, restify) {
  app.initApi(apiApp, restify);
};

exports.postInitApi = app.postInitApi;
