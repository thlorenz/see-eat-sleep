'use strict';

var Backbone = require('backbone');

var SightsModel = module.exports = Backbone.Model.extend({
  id: 'sights',
  urlRoot: '/data/ses-see/',
  defaults: {
    images: [ 'http://stevewebel.com/photographer/wp-content/uploads/2012/12/SteveGallery-7531-800x531.jpg' ]
  },
  initialize: function () {
  }
});
