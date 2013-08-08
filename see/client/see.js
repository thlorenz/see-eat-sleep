'use strict';

var $ = require('jquery');

var MainView = require('./views/main');

exports.init = function () {
  return new MainView({ el: $('#ses-see-main') });
};
