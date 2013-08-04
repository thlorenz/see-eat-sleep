'use strict';

var $ = require('ses-core').jquery;

var MainView = require('./views/main');

console.log('sourcing see');

exports.init = function () {
  return new MainView({ el: $('#ses-see-main') });
};
