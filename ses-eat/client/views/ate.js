'use strict';

var Backbone = require('backbone');
var localBus = require('../lib/local-bus');
var globalBus = require('ses-core').globalBus;

var SawView = module.exports = Backbone.View.extend({
  saw: 0,

  events: {
    'click': 'onclicked'
  },

  onclicked: function () {
    localBus.trigger('ate');
    globalBus.trigger('ses-eat-ate');
  },

  initilialize: function () {
    this.listenTo(globalBus, 'ses-see-saw', this.sawSight.bind(this));
  },

  sawSight: function () {
    console.log('saw one');
    if (++this.saw === 2) this.$('.ate').fadeIn();
  }

});
