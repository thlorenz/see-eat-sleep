'use strict';

var core = require('ses-core');
var path = require('path');
var fs = require('fs');

var templatesDir = path.join(__dirname, 'client', 'templates');
var partialsDir = path.join(templatesDir, 'partials');

core.registerPartials(partialsDir, 'ses-see-');

var app = core.devServer({
  build: { entry: require.resolve('./client') }
});

app.get('/', function (req, res, next) {
  fs.readFile(path.join(templatesDir, 'index.hbs'), 'utf8', function (err, tmpl) {
    if (err) return next(err);
    res.set({ 'Content-Type': 'text/html' });
    var html = core.Handlebars.compile(tmpl)( { title: 'see' } );
    res.send(200, html);
  });
});
