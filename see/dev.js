'use strict';

var path = require('path');
var dirs = require('./config/directories');
var xtend = require('util')._extend;

var boot = require('ses-bootstrap');
var core = require('ses-core');

var coreShims = require('ses-core/config/shims');
var shims = require('./config/shims');

// init our own routes and partials, etc.
require('./server');


var app = boot.devServer({
  build: {
    entry: require.resolve('./client/see'),
    shims: xtend(coreShims, shims)
  },
  page:  {
    index: path.join(dirs.templates, 'index.hbs'),
    context: { title: 'see' }
  }
});
