'use strict';

var Backbone = require('backbone');
var sightTemplate = require('../../templates/partials/sight.hbs');
var localBus = require('../lib/local-bus');

// TODO: get sights via backbone model

var sights = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg'
];

var sightsIdx = 0;

var SightsView = module.exports = Backbone.View.extend({

  initialize: function () {
    localBus.on('saw', this.addSight, this);
  },

  addSight: function () {
    var url = sights[sightsIdx++];
    if (!url) url = sights[sightsIdx = 0];
    var html = sightTemplate({ url: url});
    this.$el.append(html);
  }

});
