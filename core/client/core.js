'use strict';

var jquery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
//var hyperwatch = require('hyperwatch');

Backbone.$ = jquery;

exports.globalBus =  require('./lib/global-bus');

exports.init = function () {
  /*try {
    hyperwatch({ mini: { position: 'bottom-left' } });
  } catch (e) {}*/

  console.log('versions:\n ', JSON.stringify({ jquery: jquery().jquery, backbone: Backbone.VERSION, underscore: _.VERSION }));
};
