'use strict';

var jquery = window.jQuery;
var Backbone = require('backbone');
var _ = require('underscore');

console.log('versions:\n ', JSON.stringify({ jquery: jquery().jquery, backbone: Backbone.VERSION, underscore: _.VERSION }));

exports.jquery    =  jquery;
exports.globalBus =  require('./lib/global-bus');

Backbone.$ = jquery;
