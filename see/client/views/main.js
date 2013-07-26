'use strict';

var SawView = require('./saw');
var Backbone = require('backbone');
var $ = require('jquery');

var MainView = module.exports = Backbone.View.extend({

  initialize: function () {
    this.sawView = new SawView({ el: this.$el.find('.ses-see-saw') });
  }

});

module.exports = MainView;
