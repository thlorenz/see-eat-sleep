'use strict';

var path = require('path');
var core = require('ses-core');
var dirs = require('./config/directories');

var servers = require('./servers');

var viewPath = path.join(dirs.templates, 'index.hbs');

exports.initApp = function (app, express) {
  servers.init(app, express);
  app.use(core.renderViewMiddleware(viewPath, { title: 'see' }));
};
