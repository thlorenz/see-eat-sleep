'use strict';

var core = require('ses-core');
var dirs = require('../../../config/directories');
var path = require('path');

var asideCtx = require('../contexts/aside');

module.exports = function (app, express) {
  app.get('/feature/see', function (req, res, next) {
    var context = {
      title :  'see-eat-sleep',
      aside :  asideCtx,
      see: { },
      eat: { clazz: 'ses-hidden' },
      sleep: { clazz: 'ses-hidden' }
    };

    core.renderView(path.join(dirs.templates, 'index.hbs'), context, function (err, html) {
      if (err) return next(err);
      res.html(200, html);
    });
  });
};
