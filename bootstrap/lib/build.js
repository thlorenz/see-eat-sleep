#!/usr/bin/node

'use strict';

var browserify = require('browserify');
var shim = require('browserify-shim');
var path = require('path');
var fs = require('fs');
var mold = require('mold-source-map');
var concatStream = require('concat-stream');

var root = path.join(__dirname, '..', '..');

var build = module.exports = function (opts, cb) {
  if (!opts || !opts.entry)
    throw new Error('Need opts that have at least the entry path');

  if (cb && typeof cb !== 'function')
    throw new Error('Second arg needs to be a callback function');

  opts.shims = opts.shims || {};

  /* jshint laxbreak: true */
  var bfy = opts.shims.wrap
    ? shim(browserify(), opts.shims.wrap)
    : browserify();

  var expose = opts.shims.expose;
  if (expose) {
    Object.keys(expose).forEach(function (k) {
      bfy.require(expose[k], { expose: k });
    });
  }

  var stream = bfy
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
