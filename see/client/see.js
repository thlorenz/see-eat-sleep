'use strict';

var core = require('ses-core');
var MainView = require('./views/main');

exports.init = function () {
  core.init();
  return new MainView({ el: '#ses-see-main' });
};
