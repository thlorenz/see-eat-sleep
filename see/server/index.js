'use strict';
var boot = require('ses-bootstrap');
var dirs = require('../config/directories');

boot.registerPartials(dirs.partials, 'ses-see-');

boot.app.use('/ses-see-css', boot.express.static(dirs.css));
