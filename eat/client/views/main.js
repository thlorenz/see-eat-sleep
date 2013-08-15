'use strict';

var AteView = require('./ate');
var FoodsView = require('./foods');
var FoodsModel = require('../models/foods');
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  initialize: function () {
    this.ateView = new AteView({
      el: this.$('.ses-eat-ate')
    });

    this.foodsView = new FoodsView({
      el: this.$('.ses-eat-foods'),
      model: new FoodsModel()
    });
  }
});
