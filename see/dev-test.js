'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

var shims = require('./config/shims');

var port = process.env.PORT || 3000;

// init our own routes and partials, etc.
require('./server');


var readdirp = require('readdirp');

// possibly improve this by allowing to specify entry as readdirp opts object in order to push
// this all into bootstrap
readdirp({ root: path.join(__dirname, 'client', 'test'), fileFilter: '*.js' }, function (err, entries) {
  var files = entries.files.map(function (e) { return e.fullPath; });

  var res = boot.devServer({
    build: {
      entry: files,
      shims: shims
    },
    page:  {
      index: path.join(__dirname, 'client', 'test', 'index.hbs'),
      context: { title: 'see' }
    },
    server: {
      port: port
    }
  });

  res.app.use('/node_modules', boot.express.static(__dirname + '/node_modules'));

  if (~process.argv.indexOf('--phantomjs')) boot.launchPhantomJS(res.server);
});
