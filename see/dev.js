'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

var shims = require('./config/shims');

// init our own routes and partials, etc.
require('./server');


var app = boot.devServer({
  build: {
    entry: require.resolve('./client/see'),
    shims: shims
  },
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'see' }
  }
});
