'use strict';

var path = require('path');
var core = require('ses-core');
var dirs = require('./config/directories');

var asideCtx = require('./app/pages/contexts/aside');

var app = require('./app');

var viewPath = path.join(dirs.templates, 'index.hbs');

// The core browserify instance exposes jquery, backbone and underscore
exports.initBrowserify = core.initBrowserify;
exports.bundleOpts = core.bundleOpts;

exports.initPages = function (pagesApp, express, apiServerInfo) {
  app.initPages(pagesApp, express, apiServerInfo);
  var context = {
    title: 'see-eat-sleep',
    aside: asideCtx,
    see: { },
    eat: { clazz: 'ses-hidden' },
    sleep: { clazz: 'ses-hidden' }
  };

  pagesApp.use(core.renderViewMiddleware(viewPath, context));
};

exports.postInitPages = app.postInitPages;

exports.initApi = app.initApi;

exports.postInitApi = app.postInitApi;
