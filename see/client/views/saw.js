'use strict';

var Backbone = require('backbone');

var SawView = module.exports = Backbone.View.extend({

  events: {
    'click': 'onclicked'
  },

  onclicked: function () {
    console.log('so you saw?');
  },
});
