'use strict';

var Backbone = require('backbone');

var foodsModel = module.exports = Backbone.Model.extend({
  id: 'foods',
  urlRoot: '/data/ses-eat/',
  defaults: {
    images: [ ]
  },
  initialize: function () {
  }
});
