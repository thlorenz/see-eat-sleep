'use strict';

var SawView = require('./saw');
var SightsView = require('./sights');
var Backbone = require('backbone');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  initialize: function () {
    this.sawView = new SawView({ el: this.$el.find('.ses-see-saw') });
    this.sightsView = new SightsView({ el: this.$el.find('.ses-see-sights') });
  }
});
