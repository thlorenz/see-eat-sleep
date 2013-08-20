'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var router = require('../lib/router');

/**
 * The main app view which handles routing and control of featur apps
 *
 * @name 
 * @function
 */
var AppView = module.exports = Backbone.View.extend({

  initialize: function () {
    // Prevent default navigation for routes defined in the backbone router
    this.$el.on('click', 'a', function (evt) {
      var href = $(this).attr("href");
      if (router.match(href)) {
        evt.preventDefault();
        Backbone.history.navigate(href, { trigger: false });
      }
    });
  }
});
