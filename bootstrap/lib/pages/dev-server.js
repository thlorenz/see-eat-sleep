'use strict';

var path             =  require('path');
var fs               =  require('fs');
var Handlebars       =  require('handlebars');
var express          =  require('express');
var hyperwatch       =  require('hyperwatch');

var registerPartials =  require('./register-partials');
var dirs             =  require('../../config/directories');
var launchPhantomJS  =  require('./../launch-phantomjs');

var build =  require('./../build');
var app   =  require('./app');

var go = module.exports = function (pagesOpts, buildOpts) {

  app.use(express.logger('dev'));

  app.set('view engine', 'hbs');

  // serve the bundle that we require in our script-body-js template
  app.get('/bundle.js', function (req, res, next) {
    build(buildOpts, function (err, bundle) {
      if (err) return next(err);
      res.setHeader('Content-Type', 'application/javascript');
      res.send(200, bundle);
    });
  });

  var server = app.listen(pagesOpts.port);
  server
    .on('listening', function () {
      console.log('Pages server listening on http://localhost:%d in debug mode', pagesOpts.port);
    });

  // provide test support if needed
  if (buildOpts.test) {
    app.use('/mocha', express.static(path.dirname(require.resolve('mocha'))));

    // at this point we only have a partial here that is needed to support tests
    registerPartials(dirs.partials, 'ses-bootstrap-');

    if (~process.argv.indexOf('--phantomjs')) launchPhantomJS(server);
  }


  hyperwatch(server);

  return { app: app, server: server };
};
