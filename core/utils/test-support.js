'use strict';

var path = require('path');
var fs = require('fs');
var Handlebars = require('handlebars');

var registerPartials = require('./register-partials');

var dirs = require('../config/directories');

exports.fixture = function () {
  registerPartials(dirs.partials, 'ses-core-');

  var tmpl = fs.readFileSync(path.join(dirs.templates, 'index-test.hbs'), 'utf8');
  return Handlebars.compile(tmpl)({});
};

exports.initApp = function (app, express) {
  app.use(express.logger('dev'));

  var sinonpkg = path.join(path.dirname(require.resolve('sinon')), '..', 'pkg', 'sinon.js');
  app.get('/sinon.js', function (req, res) {
    res.sendfile(sinonpkg);
  });

};
