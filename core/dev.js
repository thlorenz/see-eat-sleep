'use strict';

var path = require('path');
var dirs = require('./config/directories');
var coreShims = require('./config/shims');

var boot = require('ses-bootstrap');

// init our own routes and partials, etc.
require('./server');

boot.devServer({
  build: {
    entry: require.resolve('./client/core'),
    shims: coreShims
  },
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'core' }
  }
});
