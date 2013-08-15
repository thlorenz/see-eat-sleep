'use strict';

var test = require('tap').test;
var api = require('../');
var restify = require('restify');
var http = require('http');
var concatStream = require('concat-stream');

test('properly sets up sights route', function (t) {
  var app = restify.createServer();
  api.init(app, restify);

  var server = app.listen(3111);

  t.on('end', server.close.bind(server));

  server.once('listening', function () {
    http
      .request({ port: 3111, path: '/ses-see/sights' })
      .once('response', function (res) {
        t.equal(res.statusCode, 200, '200 response');
        t.ok(res.headers['content-length'] > 0, 'with content');
        t.similar(res.headers['content-type'], /^application\/json/, 'application/json');

        res.pipe(concatStream(onend));

        function onend (data) {
          var sights = JSON.parse(data);
          t.ok(Array.isArray(sights.images), 'response has array of sights images');

          t.end();
        }
      })
      .end();
  });
});
