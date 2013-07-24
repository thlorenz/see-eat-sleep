'use strict';

var express = require('express');
var Handlebars = require('handlebars');
var path = require('path');

var registerPartials = require('./server/lib/register-partials');

var build = require('./tools/build');

var partialsDir = path.join(__dirname, 'client', 'templates', 'partials');
registerPartials(partialsDir, 'ses-core-');

var app = express();

var go = module.exports = function (opts) {
  if (!opts.build) throw new Error('need to have build config on opts');
  if (typeof opts.build.debug === 'undefined') opts.build.debug = true;

  app.set('view engine', 'hbs');
  app.use('/css', express.static(path.join(__dirname, 'client', 'css')));

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
