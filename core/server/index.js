'use strict';

// This module is required by a sub app at which point it initializes itself

var dirs = require('../config/directories');
var boot = require('ses-bootstrap');

boot.app.use('/ses-core-css', boot.express.static(dirs.css));
boot.registerPartials(dirs.partials, 'ses-core-');
