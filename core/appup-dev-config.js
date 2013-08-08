'use strict';

var path = require('path');
var core = require('./servers/index');
var dirs = require('./config/directories');

var servers = require('./servers');

var viewPath = path.join(dirs.templates, 'index.hbs');

// Use a browserify instance that exposes jquery, backbone and underscore
exports.browserify = core.browserify;
exports.bundleOpts = { debug: true, insertGlobals: false };


exports.initPages = function (pagesApp, express, apiServerInfo) {
  servers.initPages(pagesApp, express, apiServerInfo);
  pagesApp.use(core.renderViewMiddleware(viewPath, { title: 'core' }));
};

exports.initApi = function (apiApp, restify) {
  servers.initApi(apiApp, restify);
};