'use strict';

var Backbone = require('backbone');

var go = module.exports = Backbone.Router.extend({
  routes: {
    'navigate/:app': 'navigateApp'
  },

  navigateApp: function (app) {
    console.log('navigating to', app);
  }
});
