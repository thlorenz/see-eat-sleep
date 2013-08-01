'use strict';

var pages = require('ses-bootstrap').pages;
var dirs = require('../../config/directories');

// init core partials, routes, etc.
require('ses-core');

pages.registerPartials(dirs.partials, 'ses-see-');

pages.registerEndpoints(__dirname, 'middleware');
pages.registerEndpoints(__dirname, 'routes');
