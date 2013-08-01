'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

// init both the pages and the api server which will register parts of this sub app like partials and routes
require('./servers');

boot.devServer({
  build: {
    entry: require.resolve('./client/core'),
    shims: require('./config/shims'),
    test:  { root: dirs.clientTest }
  },
  server: {
    pages: {
      port: process.env.PAGES_PORT || 3000,
      index: path.join(dirs.templates, 'index-test.hbs'),
      context: { title: 'core-test' }
    },
    api: {
      port: process.env.API_PORT || 4000
    }
  }
});
