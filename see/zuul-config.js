'use strict';
var fs = require('fs');
var path = require('path');
var testroot = path.join(__dirname, 'client', 'test');

exports.fixture = function () {
  return fs.readFileSync(path.join(testroot, 'fixture.html'), 'utf8');
};
