'use strict';

var pagesServer = require('./pages/dev-server');
var apiServer = require('./api/dev-server');

var go = module.exports = function (opts, cb) {
  if (!opts.build) throw new Error('need to have build config on opts');
  if (!opts.servers) throw new Error('need to have servers config on opts');
  if (!opts.servers.pages) throw new Error('need to have servers pages config on opts');
  if (!opts.servers.api) throw new Error('need to have servers api config on opts');

  if (typeof opts.build.debug === 'undefined') opts.build.debug = true;
  opts.servers.pages.port = opts.servers.pages.port || 3000;
  opts.servers.api.port = opts.servers.api.port || 4000;
  opts.servers.api.host = opts.servers.api.host || 'http://localhost';

  // stand up api server, then pages server
  var api = apiServer(opts.servers.api);
  api.server.on('listening', function () {
    var pages = pagesServer(opts.servers.pages, opts.build);
    if (cb) cb({ pages: pages, api: api });
  });
};
