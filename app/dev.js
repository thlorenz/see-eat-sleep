'use strict';

var path = require('path');

var dirs = require('./config/directories');
var core = require('ses-core');

// intialize main app which in turn initializes all sub apps
require('./server');

var app = core.devServer({
  build: {
    entry: require.resolve('./client/app')
  },
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'See-Eat-Sleep' }
  }
});
