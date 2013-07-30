'use strict';

// TODO: move into bootstrap or core and call test-runner.js
var $ = require('jquery');

// runner
/* global mocha  */
mocha.ui('bdd');
mocha.reporter('html');

// the client side app
require('../../client/see');


// ensure dom is ready and that our test files have been sourced
$(function () {

  /* global mochaPhantomJS  */
  if (window.mochaPhantomJS) mochaPhantomJS.run();
  else { mocha.run(); }

});
