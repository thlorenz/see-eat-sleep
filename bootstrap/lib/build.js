#!/usr/bin/node

'use strict';

var browserify = require('browserify');
var shim = require('browserify-shim');
var path = require('path');
var fs = require('fs');
var mold = require('mold-source-map');
var concatStream = require('concat-stream');

var root = path.join(__dirname, '..', '..');

/**
 *
 *
 * @name exports
 * @function
 * @param opts {Object} with the following properties:
 *  - entry (required) the full path to the entry point into the client app or an {Array} of full paths if there are multiple entries
 *  - shims (optional) an {Object} containing shims with the following properties:
 *      { wrap: {Object} - files that need to be wrapped with browserify-shim to make them comonjs compatible
 *        expose: {Object} - files that expose a window property under an alias so they can be required under that alias
 *      }
 *     see ./config/shims in the core module for more information about shims
 * @param cb {Function} (optional) (err, bundle) called with the bundle string
 * @return {Stream} the bundle stream to be consumed unless a callback was supplied
 */
var build = module.exports = function (opts, cb) {
  if (!opts || !opts.entry)
    throw new Error('Need opts that have at least the entry path(s)');

  if (cb && typeof cb !== 'function')
    throw new Error('Second arg needs to be a callback function');

  var entries = Array.isArray(opts.entry) ? opts.entry : [ opts.entry ];

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

  entries.forEach(function (e) {
    bfy.require(e, { entry: true });
  });

  var stream = bfy.bundle({ debug: opts.debug });

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
