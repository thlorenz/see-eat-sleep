'use strict';

var path = require('path');
var dirs = require('../../config/directories');
var core = require('../index');
var hyperquest = require('hyperquest');

var hyperwatch = require('hyperwatch');

exports.init = function (app, express, apiServerInfo) {
  var addr = apiServerInfo.address.address;
  var port = apiServerInfo.address.port;
  var apiRoot = addr + ':' + port;

  core.registerPartials(dirs.partials, 'ses-core-');

  app.use(express.logger('dev'));
  app.set('view engine', 'hbs');

  app.all('/data/*', function (req, res) {
    var url = 'http://' + path.join(apiRoot, req.params[0] || '');
    hyperquest(url).pipe(res);
  });

  core.registerEndpoints(__dirname, 'middleware', app, express);
  core.registerEndpoints(__dirname, 'routes', app, express);
};

exports.postInit = function (app, server, express) {
  hyperwatch(server);
};
