'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

// intialize main app which in turn initializes all sub apps
require('./servers');

var app = boot.devServer({
  build: {
    entry: require.resolve('./client/app'),
    shims: require('./config/shims'),
    test:  { root: dirs.clientTest }
  },
  page:  {
    index: path.join(dirs.templates, 'index-test.hbs'),
    context: { title: 'see-eat-sleep-test' }
  },
  server: {
    port: process.env.PORT || 3000
  }
});
