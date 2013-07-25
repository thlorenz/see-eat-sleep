'use strict';

// This module is required by a sub app at which point it initializes itself

var dirs = require('../config/directories');

// to test if core is hooked up correctly
exports.hello = function () { return 'world'; };

exports.devServer        =  require('../dev');
exports.registerPartials =  require('./lib/register-partials');

// may not need to expose this (except maybe to register helpers
exports.Handlebars       =  require('handlebars');

exports.registerPartials(dirs.partials, 'ses-core-');
