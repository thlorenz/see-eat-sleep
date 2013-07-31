'use strict';

var boot = require('ses-bootstrap');
var dirs = require('../config/directories');

// init core partials, routes, etc.
require('ses-core');

boot.registerPartials(dirs.partials, 'ses-see-');

boot.registerEndpoints(__dirname, 'middleware');
boot.registerEndpoints(__dirname, 'routes');
