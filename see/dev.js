'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

// init our own routes and partials, etc.
require('./server');

boot.devServer({
  build: {
    entry: require.resolve('./client/see'),
    shims: require('./config/shims'),
  },
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'see' }
  },
  server: {
    port: process.env.PORT || 3000
  }
});
