'use strict';

var path = require('path');
var requireAll = require('require-all');

/**
 * Inits all modules found in the root/dir with the pages app and express.
 * Each module needs to export a function that takes (app, express) as parameters.
 *
 * @name exports
 * @function
 * @param root {String} full path to root directory
 * @param dir {String} name of subdirectory to initialize modules for
 * @param app {Object} app server instance
 * @param restify {Object} express or restify module
 */
var go = module.exports = function (root, dir, app, servermodule) {

  if (typeof root !== 'string') throw new Error('need to supply root path to endpoints directory');
  if (typeof dir !== 'string') throw new Error('need to supply sub dir name that contains endpoints (i.e. routes or middleware)');
  if (!app) throw new Error('need to supply the instance of the server app');


  // express has Route, restify has createServer
  // if (typeof servermodule !== 'object' || (!servermodule.Route && !servermodule.createServer)) {
  if (!servermodule) {
    throw new Error('need to supply the express or restify module');
  }

  var modules = requireAll({
    dirname     :  path.join(root, dir),
    filter      :  /(.+)\.js$/,
    excludeDirs :  /^\.(git|svn)$/
  });

  Object.keys(modules)
    .forEach(function (k) {
      var init = modules[k];
      init(app, servermodule);
    });
};
