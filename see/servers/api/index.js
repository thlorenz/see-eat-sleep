'use strict';

var api = require('ses-bootstrap').api;
var dirs = require('../../config/directories');

api.registerEndpoints(__dirname, 'routes');
