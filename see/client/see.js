'use strict';

var $ = require('ses-core').jquery;

var MainView = require('./views/main');

console.log('sourcing see');

var mainView;
exports.init = function () {
  if (mainView) {
    mainView.reset();
  } else {
    mainView = new MainView({ el: $('#ses-see-main') });
  }

  return mainView;
};
