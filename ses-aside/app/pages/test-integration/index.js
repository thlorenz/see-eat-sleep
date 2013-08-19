'use strict';

var test = require('tap').test;
var pages = require('../');
var express = require('express');
var http = require('http');
var through = require('through');

test('properly sets up express app when initialized', function (t) {
  var app = express();

  pages.init(app, express);
  var server = app.listen(3111);

  t.on('end', server.close.bind(server));

  server.once('listening', function () {
    http
      .request({ port: 3111, path: '/ses-aside-css/index.css' })
      .once('response', function (res) {
        t.equal(res.statusCode, 200, '200 response');
        t.ok(res.headers['content-length'] > 0, 'with content');
        t.similar(res.headers['content-type'], /^text\/css/, 'text/css');

        // drain response to properly end it
        res.pipe(through());
        t.end();
      })
      .end();
  });
});
