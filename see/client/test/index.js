'use strict';

//var mocha = require('mocha/mocha.js');

/* global mocha  */
mocha.ui('bdd');
mocha.reporter('html');

// the test(s)
require('./views/saw');

/* global mochaPhantomJS  */
if (window.mochaPhantomJS) mochaPhantomJS.run();
else { mocha.run(); }
