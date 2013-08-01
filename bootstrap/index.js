'use strict';

exports.Handlebars =  require('handlebars');
exports.express    =  require('express');
exports.restify    =  require('restify');

exports.devServer       =  require('./lib/dev-server');
exports.combineShims    =  require('./lib/combine-shims');
exports.launchPhantomJS =  require('./lib/launch-phantomjs');

exports.pages = {
  app               :  require('./lib/pages/app'),
  registerPartials  :  require('./lib/pages/register-partials'),
  registerEndpoints :  require('./lib/pages/register-endpoints')
};

exports.api = {
  app               :  require('./lib/api/app'),
  registerEndpoints :  require('./lib/api/register-endpoints')
};
