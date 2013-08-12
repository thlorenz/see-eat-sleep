'use strict';

var fs = require('fs');
var path = require('path');
var core = require('ses-core');

var dirs = require('./config/directories');
var testroot = path.join(__dirname, 'client', 'test');

var sinonpkg = path.join(path.dirname(require.resolve('sinon')), '..', 'pkg', 'sinon.js');

// The core browserify instance exposes jquery, backbone and underscore
exports.initBrowserify = core.initBrowserify;
exports.bundleOpts = { debug: true, insertGlobals: false };

exports.fixture = core.testFixture;

exports.initApp = core.testInitApp;
