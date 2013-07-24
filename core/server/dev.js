'use strict';

var express = require('express');
var app = express();
var concatStream = require('concat-stream');

var build = require('../tools/build');

var go = module.exports = function (opts) {
  if (!opts.build) throw new Error('need to have build config on opts');
  if (typeof opts.build.debug === 'undefined') opts.build.debug = true;

  app.get('/bundle.js', function (req, res, next) {
    build(opts.build).concatStream(function (err, bundle) {
      if (err) return next(err);
      res.setHeader('Content-Type', 'application/javascript');
      res.send(bundle);
      next();
    });
  });

  app.listen(3000);
  console.log('Listening on http://localhost:3000 in debug mode');
};
