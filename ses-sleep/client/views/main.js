'use strict';

var SleptView = require('./slept');
var BedsView = require('./beds');
var BedsModel = require('../models/beds');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  initialize: function () {
    this.sleptView = new SleptView({
      el: this.$('.ses-sleep-slept')
    });

    this.bedsView = new BedsView({
      el: this.$('.ses-sleep-beds'),
      model: new BedsModel()
    });
  }
});
