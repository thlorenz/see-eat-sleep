'use strict';

var Backbone = require('backbone');
var bedTemplslept = require('../../templates/partials/bed.hbs');
var localBus = require('../lib/local-bus');
var globalBus = require('ses-core').globalBus;

var BedsView = module.exports = Backbone.View.extend({

  imgIdx: 0,
  ready: false,

  initialize: function () {
    var view = this;
    view.model.fetch({
      success: function (beds, res, opts) {
        view.beds = beds;
        view.ready = true;
        view.listenTo(globalBus, 'ses-eat:ate', view.showBed);
        localBus.trigger('beds:view:ready');
      },
      error: function (beds, res, opts) {
        console.error(res);
      }
    });

  },

  showBed: function () {
    var images = this.beds.get('images');
    var url = images[this.imgIdx++];
    if (!url) url = images[this.imgIdx = 0];
    var html = bedTemplslept({ url: url});
    this.$el.html(html);
  }

});
