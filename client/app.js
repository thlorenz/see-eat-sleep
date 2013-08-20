'use strict';

var $ = require('jquery');

var see = require('ses-see');
var eat = require('ses-eat');
var sleep = require('ses-sleep');
var aside = require('ses-aside');

var initVisibilityController = require('./lib/visibility-controller');

var AppView = require('./views/app');

exports.init = function () {
  var seeView = see.init();
  var eatView = eat.init();
  var sleepView = sleep.init();
  var asideView = aside.init();

  var vctrl = initVisibilityController({
    see   :  seeView,
    eat   :  eatView,
    sleep :  sleepView
  });

  console.log('vctrl', vctrl);
  
  var appView = new AppView({
    el : $(document),
    visibilityController: vctrl
  });
};
