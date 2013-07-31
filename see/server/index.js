'use strict';

var path = require('path');
var boot = require('ses-bootstrap');
var dirs = require('../config/directories');
var requireAll = require('require-all');

function initWithApp (dir) {
  var modules = requireAll({
    dirname: path.join(__dirname, dir),
    excludeDirs :  /^\.(git|svn)$/
  });

  Object.keys(modules)
    .forEach(function (k) {
      var init = modules[k];
      init(boot.app, boot.express);
    });

}

// init core partials, routes, etc.
require('ses-core');

boot.registerPartials(dirs.partials, 'ses-see-');

initWithApp('middleware');
initWithApp('routes');
