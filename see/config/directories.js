'use strict';

var path = require('path');

var client = path.join(__dirname, '..', 'client');

exports.templates =  path.join(__dirname, '..', 'templates');
exports.partials  =  path.join(exports.templates, 'partials');
exports.css       =  path.join(client, 'css');
exports.test      =  path.join(client, 'test');
