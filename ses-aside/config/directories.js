'use strict';

var path = require('path');

var root = path.join(__dirname, '..');
var client = path.join(root, 'client');

exports.templates  =  path.join(root, 'templates');
exports.partials   =  path.join(exports.templates, 'partials');
exports.css        =  path.join(client, 'css');
exports.clientTest =  path.join(client, 'test');
