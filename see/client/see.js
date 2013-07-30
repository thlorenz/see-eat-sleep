'use strict';

var $ = require('jquery');
var noncjs = require('noncjs');
var core = require('ses-core');

var MainView = require('./views/main');

console.log('sourcing see');

console.log('noncjs is same instance as core.noncjs', noncjs === core.noncjsThing);
console.log('Whats that noncjs thing?\n >> ', core.noncjsThing());

exports.mainView = new MainView({ el: $('#ses-see-main') });
