'use strict';

// This module is required by a sub app at which point it initializes itself

var dirs = require('../config/directories');
var boot = require('ses-bootstrap');

boot.registerPartials(dirs.partials, 'ses-core-');

boot.registerEndpoints(__dirname, 'middleware');
boot.registerEndpoints(__dirname, 'routes');
