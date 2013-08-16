'use strict';

var BedsView = require('./beds');
var BedsModel = require('../models/beds');
var Backbone = require('backbone');

var globalBus = require('ses-core').globalBus;

module.exports = Backbone.View.extend({
  initialize: function () {
    this.bedsView = new BedsView({
      el: this.$('.ses-sleep-beds'),
      model: new BedsModel()
    });
  }
});
