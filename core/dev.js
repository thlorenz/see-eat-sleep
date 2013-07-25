'use strict';

var express = require('express');
var Handlebars = require('handlebars');
var path = require('path');
var fs = require('fs');

var build = require('./tools/build');

var app = express();

var go = module.exports = function (opts) {
  if (!opts.build) throw new Error('need to have build config on opts');
  if (!opts.page) throw new Error('need to have page config on opts');

  if (typeof opts.build.debug === 'undefined') opts.build.debug = true;

  app.set('view engine', 'hbs');
  app.use('/ses-core-css', express.static(path.join(__dirname, 'client', 'css')));

  // serve the index file given to us by the app
  // it needs to include our partials in order to be setup correctly
  app.get('/', function (req, res, next) {

    // recompile template on every refresh in development to reflect any changes to ie
    fs.readFile(opts.page.index, 'utf8', function (err, tmpl) {
      if (err) return next(err);
      res.set({ 'Content-Type': 'text/html' });
      var html = Handlebars.compile(tmpl)(opts.page.context);
      res.send(200, html);
    });
  });

  // serve the bundle that we require in our script-body-js template
  app.get('/bundle.js', function (req, res, next) {
    build(opts.build, function (err, bundle) {
      if (err) return next(err);
      res.setHeader('Content-Type', 'application/javascript');
      res.send(200, bundle);
    });
  });

  app.listen(3000);
  console.log('Listening on http://localhost:3000 in debug mode');

  return app;
};
