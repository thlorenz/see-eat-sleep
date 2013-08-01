'use strict';

var pages = require('ses-bootstrap').pages;
var dirs = require('../../config/directories');

pages.registerPartials(dirs.partials, 'ses-see-');

pages.registerEndpoints(__dirname, 'middleware');
pages.registerEndpoints(__dirname, 'routes');
