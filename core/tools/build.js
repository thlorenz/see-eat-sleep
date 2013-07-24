#!/usr/bin/node

'use strict';

var browserify = require('browserify');
var shim = require('browserify-shim');
var coreShims = require('../config/shims');
var path = require('path');
var fs = require('fs');
var extend = require('util')._extend;
var bundlePath = path.join(__dirname, '..', 'bundle.js');

var build = module.exports = function (opts) {
  if (!opts || !opts.entry) throw new Error('Need opts that have at least the entry path');

  var shims = extend(coreShims, (opts.shims || {}));

  return shim(browserify(), shims)
    .transform('hbsfy')
    .require(opts.entry, { entry: true })
    .bundle({ debug: true });
};

if (module === require.main)
  build().pipe(fs.createWriteStream(bundlePath));
