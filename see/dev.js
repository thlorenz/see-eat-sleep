'use strict';

var path = require('path');
var dirs = require('./config/directories');

var core = require('ses-core');

// init our own routes and partials, etc.
require('./server');

var app = core.devServer({
  build: {
    entry: require.resolve('./client/see')
  },
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'see' }
  }
});
