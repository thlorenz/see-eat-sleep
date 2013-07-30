'use strict';

//var mocha = require('mocha/mocha.js');

/* global mocha  */
mocha.ui('bdd');
mocha.reporter('html');

// the client side app
require('../../client/see');

// the test(s)
require('./views/main');
require('./views/saw');
require('./views/sights');
require('./views/integration-saw-sights');

/* global mochaPhantomJS  */
if (window.mochaPhantomJS) mochaPhantomJS.run();
else { mocha.run(); }
