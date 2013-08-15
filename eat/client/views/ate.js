'use strict';

var Backbone = require('backbone');
var localBus = require('../lib/local-bus');
var globalBus = require('ses-core').globalBus;

var SawView = module.exports = Backbone.View.extend({

  events: {
    'click': 'onclicked'
  },

  onclicked: function () {
    localBus.trigger('ate');
    globalBus.trigger('ses-eat-ate');
  }

});
