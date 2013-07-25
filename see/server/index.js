'use strict';
var core = require('ses-core');
var dirs = require('../config/directories');

core.registerPartials(dirs.partials, 'ses-see-');
