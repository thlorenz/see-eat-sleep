'use strict';

var path             =  require('path');
var fs               =  require('fs');
var Handlebars       =  require('handlebars');
var express          =  require('express');
var hyperwatch       =  require('hyperwatch');
var dirs             =  require('../config/directories');
var registerPartials =  require('./register-partials');
var launchPhantomJS  =  require('./launch-phantomjs');

var build =  require('./build');
var app   =  require('./app');

var go = module.exports = function (pagesOpts, buildOpts) {
  app.use(require('log-request'));
  app.set('view engine', 'hbs');

  // serve the index file given to us by the app
  // it needs to include our partials in order to be setup correctly
  app.get('/', function (req, res, next) {

    // recompile template on every refresh in development to reflect any changes to ie
    fs.readFile(pagesOpts.index, 'utf8', function (err, tmpl) {
      if (err) return next(err);
      res.set({ 'Content-Type': 'text/html' });
      var html = Handlebars.compile(tmpl)(pagesOpts.context);
      res.send(200, html);
    });
  });

  // serve the bundle that we require in our script-body-js template
  app.get('/bundle.js', function (req, res, next) {
    build(buildOpts, function (err, bundle) {
      if (err) return next(err);
      res.setHeader('Content-Type', 'application/javascript');
      res.send(200, bundle);
    });
  });

  var server = app.listen(pagesOpts.port);
  server.on('listening', function () {
    console.log('Listening on http://localhost:%d in debug mode', pagesOpts.port);
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
