'use strict';

var fs = require('fs');
var Handlebars = require('handlebars');

module.exports = function (viewPath, context, cb) {
  fs.readFile(viewPath, 'utf8', function (err, tmpl) {
    if (err) return cb(err);
    var html = Handlebars.compile(tmpl)(context);
    cb(null, html);
  });
};
