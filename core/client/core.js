'use strict';

console.log('sourcing core');

var $ = require('jquery');
var noncjs = require('noncjs');

exports.noncjsThing = noncjs;

console.log('using jquery version: ', $().jquery);
