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
  },
  servers: {
    pages: {
      index: path.join(dirs.templates, 'index.hbs'),
      context: { title: 'core' },
      port: process.env.PAGES_PORT || 3000
    },
    api: {
      port: process.env.API_PORT || 4000
    }
  }
});
