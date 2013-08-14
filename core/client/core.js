'use strict';

var jquery = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var once = require('once');
var hyperwatch = require('hyperwatch');

Backbone.$ = jquery;

exports.globalBus =  require('./lib/global-bus');

// init should run only once per app start even if multiple dependents call core.init()
exports.init = once(function () {
  try {
    hyperwatch({ mini: { position: 'bottom right', size: '150x150' } });
  } catch (e) {}

  console.log('versions:\n ', JSON.stringify({ jquery: jquery().jquery, backbone: Backbone.VERSION, underscore: _.VERSION }));
});
