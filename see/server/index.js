'use strict';
var core = require('ses-core');

var path = require('path');
var fs = require('fs');

var templatesDir = path.join(__dirname, '..', 'client', 'templates');
var partialsDir = path.join(templatesDir, 'partials');

core.registerPartials(partialsDir, 'ses-see-');

exports.templatesDir = templatesDir;
exports.partialsDir = partialsDir;
