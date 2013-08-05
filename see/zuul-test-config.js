'use strict';

var fs = require('fs');
var path = require('path');
var dirs = require('./config/directories');
var testroot = path.join(__dirname, 'client', 'test');

var sinonpkg = path.join(path.dirname(require.resolve('sinon')), '..', 'pkg', 'sinon.js');

exports.fixture = function () {
  return fs.readFileSync(path.join(testroot, 'fixture.html'), 'utf8');
};

exports.initApp = function (app, express) {
  app.use(express.logger('dev'));
  app.use('/ses-see-css', express.static(dirs.css));

  app.get('/sinon.js', function (req, res) {
    res.sendfile(sinonpkg);
  });
};
