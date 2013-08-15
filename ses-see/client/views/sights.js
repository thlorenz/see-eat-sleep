'use strict';

var Backbone = require('backbone');
var sightTemplate = require('../../templates/partials/sight.hbs');
var localBus = require('../lib/local-bus');

var SightsView = module.exports = Backbone.View.extend({

  imgIdx: 0,
  ready: false,

  initialize: function () {
    var view = this;
    view.model.fetch({
      success: function (sights, res, opts) {
        view.sights = sights;
        view.ready = true;
        localBus.on('saw', view.addSight, view);
        localBus.trigger('sights:view:ready');
      },
      error: function (sights, res, opts) {
        console.error(res);
      }
    });
  },

  addSight: function () {
    var images = this.sights.get('images');
    var url = images[this.imgIdx++];
    if (!url) url = images[this.imgIdx = 0];
    var html = sightTemplate({ url: url});
    this.$el.append(html);
  }

});
