'use strict';
var fs = require('fs');
var path = require('path');
var testroot = path.join(__dirname, 'client', 'test');


exports.fixture = function () {
  return fs.readFileSync(path.join(testroot, 'fixture.html'), 'utf8');
};

exports.initApp = function (app, express) {
  app.use(express.logger('dev'));

  var sinonpkg = path.join(path.dirname(require.resolve('sinon')), '..', 'pkg', 'sinon.js');

  app.get('/sinon.js', function (req, res) {
    res.sendfile(sinonpkg);
  });
};
