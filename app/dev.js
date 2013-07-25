'use strict';

var path = require('path');

var dirs = require('./config/directories');
var boot = require('ses-bootstrap');

var shims = require('./config/shims');

// intialize main app which in turn initializes all sub apps
require('./server');

var app = boot.devServer({
  build: {
    entry: require.resolve('./client/app'),
    shims: shims
  },
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'see eat sleep' }
  }
});
