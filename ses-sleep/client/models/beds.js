'use strict';

var Backbone = require('backbone');

var bedsModel = module.exports = Backbone.Model.extend({
  id: 'beds',
  urlRoot: '/data/ses-sleep/',
  defaults: {
    images: [ ]
  },
  initialize: function () {
  }
});
