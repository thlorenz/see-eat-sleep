'use strict';

var $ = require('jquery');

var see = require('ses-see');
var eat = require('ses-eat');
var sleep = require('ses-sleep');
var aside = require('ses-aside');

var AppView = require('./views/app');

exports.init = function () {
  see.init();
  eat.init();
  sleep.init();
  aside.init();

  var appView = new AppView({ el: $(document) });
};
