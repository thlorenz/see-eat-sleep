'use strict';

var core = require('ses-core');

// The core browserify instance exposes jquery, backbone and underscore
exports.initBrowserify = core.initBrowserify;
exports.bundleOpts = core.bundleOpts;

exports.fixture = core.testFixture;

exports.initApp = core.testInitApp;
