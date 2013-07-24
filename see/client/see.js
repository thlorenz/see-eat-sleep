'use strict';

var noncjs = require('noncjs');
var core = require('ses-core');

console.log('sourcing see');

console.log('noncjs is same instance as core.noncjs', noncjs === core.noncjsThing);
console.log('Whats that noncjs thing?\n >> ', core.noncjsThing());

exports.init = function () {
  console.log('initializing see');
};
