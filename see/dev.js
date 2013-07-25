'use strict';

var path = require('path');
var fs = require('fs');

var core = require('ses-core');

var server = require('./server');

var app = core.devServer({
  build: { entry: require.resolve('./client/see') }
});

app.get('/', function (req, res, next) {
  fs.readFile(path.join(server.templatesDir, 'index.hbs'), 'utf8', function (err, tmpl) {
    if (err) return next(err);
    res.set({ 'Content-Type': 'text/html' });
    var html = core.Handlebars.compile(tmpl)( { title: 'see' } );
    res.send(200, html);
  });
});
