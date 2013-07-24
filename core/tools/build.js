#!/usr/bin/node

'use strict';

var browserify = require('browserify');
var shim = require('browserify-shim');
var coreShims = require('../config/shims');
var path = require('path');
var fs = require('fs');
var mold = require('mold-source-map');
var extend = require('util')._extend;
var concatStream = require('concat-stream');

var root = path.join(__dirname, '..', '..');

var build = module.exports = function (opts, cb) {
  if (!opts || !opts.entry)
    throw new Error('Need opts that have at least the entry path');

  if (cb && typeof cb !== 'function')
    throw new Error('Second arg needs to be a callback function');

  var shims = extend(coreShims, (opts.shims || {}));

  var stream = shim(browserify(), shims)
    .transform(require.resolve('hbsfy'))
    .require(opts.entry, { entry: true })
    .bundle({ debug: opts.debug });

  // mold sourcemaps to get shorter paths in chrome
  // in the future we may replace these with an actual fullPath map file
  // especially if in the browser editing is desired
  if (opts.debug) stream = stream.pipe(mold.transformSourcesRelativeTo(root));

  function bufferNcallback() {
    return stream
      .on('error', cb)
      .pipe(concatStream(function (res) { cb(null, res); }));
  }

  return cb ? bufferNcallback() : stream;
};
