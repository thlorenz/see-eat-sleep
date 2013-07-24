'use strict';

var noncjs = require('noncjs');
var core = require('ses-core');

console.log('noncjs is same instance as core.noncjs', noncjs === core.noncjsThing);

console.log('Whats that noncjs thing?\n >> ', core.noncjsThing());
