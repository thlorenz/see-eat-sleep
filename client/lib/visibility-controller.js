'use strict';

var views;

function VisibilityController (views) {
  if(!(this instanceof VisibilityController)) return new VisibilityController(views);
  this.views = views;
}

VisibilityController.prototype.hide = function (names, cb) {
  cb = cb || function () {};

  var views = this.views;

  Object.keys(views)
    .filter(function (k) { return ~names.indexOf(k); })
    .forEach(function (k) {
      views[k].$el.slideUp({ duration: 200, queue: true });
    });
};

VisibilityController.prototype.show = function (name) {
  this.views[name].$el.slideDown({ duration: 200, queue: true });
};

VisibilityController.prototype.showOnly = function (name) {
  var hide = Object.keys(this.views)
    .filter(function (k) { return k !== name; });

  this.hide(hide);
  this.show(name);
};

module.exports = VisibilityController;
