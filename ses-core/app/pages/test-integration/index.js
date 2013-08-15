'use strict';

var test = require('tap').test;
var pages = require('../');
var express = require('express');
var http = require('http');
var through = require('through');
var concatStream = require('concat-stream');

test('properly sets up express app when initialized', function (t) {
  var server;
  var app = express();

  var apiServer = http.createServer(function (req, res) {
    var body = JSON.stringify({ msg: 'hello from the api', url: req.url });
    res.writeHead(200, { 'Content-Length': body.length, 'Content-Type': 'application/json' });
    res.end(body);
  });

  apiServer.listen(3222, startPagesServer);

  function startPagesServer() {
    var address = apiServer.address();

    pages.init(app, express, { address: address });
    server = app.listen(3111, runTests);
  }

  t.on('end', function () {
    apiServer.close();
    server.close();
  });

  function runTests () {

    t.test('\nmiddleware (css)', function (t) {
      http
        .request({ port: 3111, path: '/ses-core-css/index.css' })
        .once('response', function (res) {
          t.equal(res.statusCode, 200, '200 response');
          t.ok(res.headers['content-length'] > 0, 'with content');
          t.similar(res.headers['content-type'], /^text\/css/, 'text/css');

          res.pipe(through());
          t.end();
        })
        .end();
    });

    t.test('\nroutes data requests to api server', function (t) {

      http
        .request({ port: 3111, path: '/data/foo/bar' })
        .once('response', function (res) {

          t.equal(res.statusCode, 200, '200 response');

          res.pipe(concatStream(onend));

          function onend(buf) {
            var data = JSON.parse(buf.toString());

            t.equal(data.url, '/foo/bar', 'includes url in request to api');
            t.equal(data.msg, 'hello from the api', 'forwards api response');
            t.end();
          }
        })
        .end();
    });

    t.end();
  }
});
