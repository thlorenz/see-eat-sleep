'use strict';
var boot = require('ses-bootstrap');
var dirs = require('../config/directories');

// intit core partials, routes, etc.
var see = require('ses-core');

boot.registerPartials(dirs.partials, 'ses-see-');

boot.app.use('/ses-see-css', boot.express.static(dirs.css));
