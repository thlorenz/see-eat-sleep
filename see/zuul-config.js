'use strict';
var fs = require('fs');
var path = require('path');
var testroot = path.join(__dirname, 'client', 'test');

exports.fixture = function () {
  return fs.readFileSync(path.join(testroot, 'fixture.html'), 'utf8');
};

exports.initApp = function (app, express) {
  var sinonlib = path.dirname(require.resolve('sinon'));
  console.error('adding "/sinon" static folder pointing at %s', sinonlib);
  
  app.use('/sinon', express.static(sinonlib));
};
