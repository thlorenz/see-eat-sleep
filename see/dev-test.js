'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

// init our own routes and partials, etc.
// TODO: have routes dir with index to routes
require('./server');

boot.devServer({
  build: {
    entry: require.resolve('./client/see'),
    shims: require('./config/shims'),
    test:  { root: dirs.clientTest }
  },
  page:  {
    index: path.join(dirs.templates, 'index-test.hbs'),
    context: { title: 'see-test' }
  },
  server: {
    port: process.env.PORT || 3000
  }
});
