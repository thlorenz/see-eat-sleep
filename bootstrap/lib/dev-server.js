'use strict';

var pagesServer = require('./pages/dev-server');

var go = module.exports = function (opts) {
  if (!opts.build) throw new Error('need to have build config on opts');
  if (!opts.server) throw new Error('need to have server config on opts');
  if (!opts.server.pages) throw new Error('need to have server pages config on opts');
  if (!opts.server.api) throw new Error('need to have server api config on opts');

  if (typeof opts.build.debug === 'undefined') opts.build.debug = true;
  opts.server.pages.port = opts.server.pages.port || 3000;
  opts.server.api.port = opts.server.api.port || 4000;

  // TODO: stand up api server first

  var pages = pagesServer(opts.server.pages, opts.build);
  return { pages: pages };
};
