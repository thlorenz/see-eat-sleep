'use strict';

var Backbone = require('backbone');
var _ = require('underscore');

var jquery = window.jQuery;
Backbone.$ = jquery;

exports.jquery    =  jquery;
exports.globalBus =  require('./lib/global-bus');

exports.init = function () {
  console.log('versions:\n ', JSON.stringify({ jquery: jquery().jquery, backbone: Backbone.VERSION, underscore: _.VERSION }));
};
