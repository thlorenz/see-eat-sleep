'use strict';

var test = require('tap').test;
var pages = require('../');
var dirs = require('../../../config/directories');

// note: not testing core endpoints here since they are tested in core itself

test('registers static css middleware when initialized', function (t) {
  var used;
  var app = {
    use: function (route, static_) {
      used = { route: route, static: static_ };
    }
  };
  var express = {
    static: function (dir) {
      return dir;
    }
  };

  pages.init(app, express);

  t.equal(used.route, '/ses-see-css', 'registers css route');
  t.equal(used.static, dirs.css, 'for static css folder');
  t.end();
});
