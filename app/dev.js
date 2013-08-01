'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

// intialize main app which in turn initializes all sub apps
require('./servers');

var app = boot.devServer({
  build: {
    entry: require.resolve('./client/app'),
    shims: require('./config/shims')
  },
  servers: {
    pages: {
      index: path.join(dirs.templates, 'index.hbs'),
      context: { title: 'see-eat-sleep' },
      port: process.env.PAGES_PORT || 3000
    },
    api: {
      port: process.env.API_PORT || 4000
    }
  }
});
