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
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'core' }
  },
  server: {
    port: process.env.PORT || 3000
  }
});
