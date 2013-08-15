'use strict';

var AteView = require('./ate');
var FoodsView = require('./foods');
var FoodsModel = require('../models/foods');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  initialize: function () {
    this.ateView = new AteView({
      el: this.$('.ses-see-ate')
    });

    this.foodsView = new FoodsView({
      el: this.$('.ses-see-foods'),
      model: new FoodsModel()
    });
  }
});
