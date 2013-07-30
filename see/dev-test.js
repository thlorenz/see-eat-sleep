'use strict';

var path = require('path');
var dirs = require('./config/directories');

var boot = require('ses-bootstrap');

var shims = require('./config/shims');

// init our own routes and partials, etc.
require('./server');

var app = boot.devServer({
  build: {
    entry: require.resolve('./client/test'),
    shims: shims
  },
  page:  {
    index: path.join(__dirname, 'client', 'test', 'index.hbs'),
    context: { title: 'see' }
  }
});

app.use('/node_modules', boot.express.static(__dirname + '/node_modules'));
