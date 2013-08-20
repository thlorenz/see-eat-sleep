'use strict';

var Backbone = require('backbone');
var hist = Backbone.history;

var AppRouter = Backbone.Router.extend({
  visibilityController: undefined,

  initialize: function (opts) {
    this.visibilityController = opts.visibilityController;
  },

  routes: {
    'feature/:app': 'feature'
  },

  feature: function (feat) {
    console.log('navigating to', feat);
    console.log('ctrl', this.visibilityController);
    this.visibilityController.showOnly(feat);
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
 * To ensure that the router is only instantiated once we only call this from the app view.
 *
 * Additionally it starts the backbone history.
 *
 * @name 
 * @function
 */
exports = module.exports = function (opts) {
  var router = new AppRouter(opts);

  hist.start({ pushState: true });
  return router;
};
