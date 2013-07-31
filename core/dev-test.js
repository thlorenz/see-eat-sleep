'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

// init our own routes and partials, etc.
require('./server');

boot.devServer({
  build: {
    entry: require.resolve('./client/core'),
    shims: require('./config/shims'),
    test:  { root: dirs.clientTest }
  },
  page:  {
    index: path.join(dirs.templates, 'index-test.hbs'),
    context: { title: 'core-test' }
  },
  server: {
    port: process.env.PORT || 3000
  }
});
