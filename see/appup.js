'use strict';

var path = require('path');
var restify = require('restify');
var express = require('express');
var optimist = require('optimist');
var browserify = require('browserify');

var cwd = process.cwd();

var argv = optimist
  .usage('nodeup [options] file')
  .demand('pages')
  .describe('pages', 'port to start pages server on')
  .describe('api', 'port to start api server on')
  .demand('config')
  .describe('config', 'point to a config file to override routes, etc. for the pages and api server')
  .argv;

function usageAndBail () {
  optimist.showHelp();
  process.exit();
}

if (argv.help) usageAndBail();

var entry = argv._[0];

if (!entry) {
  // TODO: we could also find the 'browser' field in the cwd/package.json
  console.error('Please provide path to entry file as last argument');
  usageAndBail();
}

var config = require(path.join(cwd, argv.config));

// TODO: be smarter about transforms found in cwd/package.json
var bfy = config.browserify ? config.browserify() : browserify();
var bundleOpts = config.bundleOpts || { insertGlobals: true, debug: true };

bfy.require(entry, { entry: true });

function initPages (bfy, config) {
  var pagesApp = express();

  if (config.initPages) {
    config.initPages(pagesApp, express);
  }

  pagesApp.get('/build.js', function(req, res) {
    res.contentType('application/javascript');
    bfy.bundle(bundleOpts, function(err, src) {
      if (err) {
        console.error(err);
        return res.send(500);
      }
      res.end(src);
    });
  });
  return pagesApp;
}

function startPages (bfy, config, port) {
  var pagesApp = initPages(bfy, config);
  var pagesServer = pagesApp.listen(port);

  pagesServer.once('listening', function() {
    var port = pagesServer.address().port;
    console.log('server listening: http://localhost:' + port);
  });
}

startPages(bfy, config, argv.pages);
