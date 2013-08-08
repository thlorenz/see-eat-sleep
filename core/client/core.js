'use strict';

var jquery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

Backbone.$ = jquery;

exports.globalBus =  require('./lib/global-bus');

exports.init = function () {
  console.log('versions:\n ', JSON.stringify({ jquery: jquery().jquery, backbone: Backbone.VERSION, underscore: _.VERSION }));
};
