'use strict';

var logRequest = require('log-request');

var restify = require('../../').restify;
var app = require('./app');

// TODO:
// 1. limit to specific origin, headers and methods
// 2. feature apps should not add middleware/plugins
//  - better solution may be to only allow passing paths to dirs to serve static data from
//  - we can then control order of plugins here
//  - also the sub feature shouldn't decide when to add routes to an app
//  - instead register endpoints should just store that registration request somewhere so routes can be added in a more controlled manner
app.use(restify.CORS());

var go = module.exports = function (apiOpts) {

  app.get('/', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send({ msg: 'Welcome to the see-eat-sleep - API server' });
  });

  var server = app.listen(apiOpts.port);

  server
    .on('listening', function () {
      console.log('API server listening on http://localhost:%d in debug mode', apiOpts.port);
    })
    .on('request', logRequest);

  return { app: app, server: server };
};

