'use strict';

var Backbone = require('backbone');
var hist = Backbone.history;

var AppRouter = Backbone.Router.extend({
  routes: {
    'feature/:app': 'feature'
  },

  feature: function (feat) {
    console.log('navigating to', feat);
  },

  match: function (url) {
    var fragment = hist.getFragment(url);

    return Object.keys(hist.handlers)
      .some(function(k) {
        var handler = hist.handlers[k];
        return handler.route.test(fragment);
      });
  }
});

/**
 * Instantiates and returns the application router and returns it.
 * This ensures that the router is only instantiated once.
 *
 * Additionally it starts the backbone history.
 *
 * @name 
 * @function
 */
exports = module.exports = (function () {
  var router = new AppRouter();

  hist.start({ pushState: true });
  return router;
})();
