'use strict';

var Backbone = require('backbone');
var sightTemplate = require('../templates/partials/sight.hbs');
var localBus = require('../lib/local-bus');

var sights = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg',
  'http://upload.wikimedia.org/wikipedia/commons/e/e0/Nauener_Tor_Potsdam.JPG',
  'http://fc02.deviantart.net/fs70/i/2011/173/9/a/potsdam___sanssouci_park_by_pingallery-d3jniwc.jpg',
  'http://www.germanplaces.com/templates/berlin-germany/images/berlin-germany-museum-small.jpg',
  'http://www.reise-abc.ch/berlin/images/spree-berlin-3.jpg',
  'http://www.detlef-henke.de/wp-content/uploads/friedrich_schiller_berlin_konzerthaus_denkmal.jpg',
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
