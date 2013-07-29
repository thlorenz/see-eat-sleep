'use strict';

console.log('sourcing core');

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

// TODO: only use in development
require('hyperwatch')();

console.log('versions:\n ', { jquery: $().jquery, backbone: Backbone.VERSION, underscore: _.VERSION });

exports.noncjsThing =  require('noncjs');
exports.globalBus   =  require('./lib/global-bus');

