'use strict';

var renderView = require('./render-view');

var go = module.exports = function (viewPath, context) {
  return function (req, res, next) {
    renderView(viewPath, context, function (err, html) {
      if (err) return next(err);
      res.set({ 'Content-Type': 'text/html' });
      res.send(200, html);
    });
  };
};
