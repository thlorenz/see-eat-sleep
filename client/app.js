'use strict';

var Backbone = require('backbone');

var see = require('ses-see');
var eat = require('ses-eat');
var sleep = require('ses-sleep');
var aside = require('ses-aside');

var Router = require('./lib/router');
var Backbone = require('backbone');
var $ = require('jquery');

exports.init = function () {
  see.init();
  eat.init();
  sleep.init();
  aside.init();

  var router = new Router();
  Backbone.history.start({pushState: true});

  // Prevent default navigation
  $('body').on('click', 'a', function (evt) {
    var href = $(this).attr("href");
    evt.preventDefault();
    Backbone.history.navigate(href, true);
  });
};
