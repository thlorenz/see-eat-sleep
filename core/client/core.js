'use strict';

console.log('sourcing core');

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var noncjs = require('noncjs');

exports.noncjsThing = noncjs;

console.log('versions:\n ', { jquery: $().jquery, backbone: Backbone.VERSION, underscore: _.VERSION });
