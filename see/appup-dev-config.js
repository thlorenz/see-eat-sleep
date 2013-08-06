'use strict';

var path = require('path');
var core = require('ses-core');
var dirs = require('./config/directories');

var servers = require('./servers');

var viewPath = path.join(dirs.templates, 'index.hbs');

exports.initPages = function (pagesApp, express, apiServerInfo) {
  servers.initPages(pagesApp, express, apiServerInfo);
  pagesApp.use(core.renderViewMiddleware(viewPath, { title: 'see' }));
};

exports.initApi = function (apiApp, restify) {
  servers.initApi(apiApp, restify);
};
