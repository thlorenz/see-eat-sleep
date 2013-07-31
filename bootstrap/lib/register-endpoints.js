'use strict';

var path = require('path');
var requireAll = require('require-all');
var boot = require('../');

/**
 * Inits all modules found in the root/dir with the app and express.
 * Each module needs to export a function that takes (app, express) as parameters.
 *
 * @name exports
 * @function
 * @param root {String} full path to root directory
 * @param dir {String} name of subdirectory to initialize modules for
 */
var go = module.exports = function (root, dir) {
  var modules = requireAll({
    dirname     :  path.join(root, dir),
    filter      :  /.+\.js$/,
    excludeDirs :  /^\.(git|svn)$/
  });

  Object.keys(modules)
    .forEach(function (k) {
      var init = modules[k];
      init(boot.app, boot.express);
    });
};

