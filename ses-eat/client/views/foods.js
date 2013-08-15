'use strict';

var Backbone = require('backbone');
var foodTemplate = require('../../templates/partials/food.hbs');
var localBus = require('../lib/local-bus');

var FoodsView = module.exports = Backbone.View.extend({

  imgIdx: 0,
  ready: false,

  initialize: function () {
    var view = this;
    view.model.fetch({
      success: function (foods, res, opts) {
        view.foods = foods;
        view.ready = true;
        localBus.on('ate', view.addFood, view);
        localBus.trigger('foods:view:ready');
      },
      error: function (foods, res, opts) {
        console.error(res);
      }
    });
  },

  addFood: function () {
    var images = this.foods.get('images');
    var url = images[this.imgIdx++];
    if (!url) url = images[this.imgIdx = 0];
    var html = foodTemplate({ url: url});
    this.$el.append(html);
  }

});
