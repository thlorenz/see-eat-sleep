'use strict';

var Backbone = require('backbone');
var localBus = require('../lib/local-bus');

var SawView = module.exports = Backbone.View.extend({

  events: {
    'click': 'onclicked'
  },

  onclicked: function () {
    localBus.trigger('saw');
  },

  initialize: function () {
    console.log('initializing saw view');
  }
});
