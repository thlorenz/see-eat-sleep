'use strict';

var core = require('./servers');
var coreTestSupport = require('./servers/test-support');

// The core browserify instance exposes jquery, backbone and underscore
exports.initBrowserify = core.initBrowserify;
exports.bundleOpts = { debug: true, insertGlobals: false };

exports.fixture = coreTestSupport.fixture;

exports.initApp = coreTestSupport.initApp;
