'use strict';

var core = require('./app');

// The core browserify instance exposes jquery, backbone and underscore
exports.initBrowserify = core.initBrowserify;
exports.bundleOpts = { debug: true, insertGlobals: false };

exports.fixture = core.testFixture;

exports.initApp = core.testInitApp;
