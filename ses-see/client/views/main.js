'use strict';

var SawView = require('./saw');
var SightsView = require('./sights');
var SightsModel = require('../models/sights');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  initialize: function () {
    this.sawView = new SawView({
      el: this.$('.ses-see-saw')
    });

    this.sightsView = new SightsView({
      el: this.$('.ses-see-sights'),
      model: new SightsModel()
    });
  },
});
