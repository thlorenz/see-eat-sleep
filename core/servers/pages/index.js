'use strict';

// This module is required by a sub app at which point it initializes itself

var pages = require('ses-bootstrap').pages;
var dirs = require('../../config/directories');

pages.registerPartials(dirs.partials, 'ses-core-');

pages.registerEndpoints(__dirname, 'middleware');
pages.registerEndpoints(__dirname, 'routes');
