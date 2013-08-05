'use strict';

var jquery = require('../vendor/jquery');
var Backbone = require('backbone');
var _ = require('underscore');

// TODO: only use in development
// breaks zuul currently
// require('hyperwatch')();

console.log('versions:\n ', JSON.stringify({ jquery: jquery().jquery, backbone: Backbone.VERSION, underscore: _.VERSION }));

exports.jquery = jquery;
exports.globalBus   =  require('./lib/global-bus');

Backbone.$ = jquery;
