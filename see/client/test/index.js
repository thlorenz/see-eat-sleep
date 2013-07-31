'use strict';

// TODO: move into bootstrap or core and call test-runner.js
var $ = require('jquery');

/* global mocha */
mocha.ui('bdd');
mocha.reporter('html');

// ensure dom is ready and that our test files have been sourced
$(function () {

  /* global mochaPhantomJS  */
  if (window.mochaPhantomJS) mochaPhantomJS.run();
  else { mocha.run(); }

});
