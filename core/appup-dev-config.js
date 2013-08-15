'use strict';

var path = require('path');
var core = require('./app/index');
var dirs = require('./config/directories');

var viewPath = path.join(dirs.templates, 'index.hbs');

// Use a browserify instance that exposes jquery, backbone and underscore
exports.initBrowserify = core.initBrowserify;
exports.bundleOpts = core.bundleOpts;

exports.initPages = function (pagesApp, express, apiServerInfo) {
  core.initPages(pagesApp, express, apiServerInfo);
  pagesApp.use(core.renderViewMiddleware(viewPath, { title: 'core' }));
};
exports.postInitPages = core.postInitPages;

exports.initApi = function (apiApp, restify) {
  core.initApi(apiApp, restify);
};
exports.postInitApi = core.postInitApi;
