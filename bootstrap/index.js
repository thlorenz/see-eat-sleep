'use strict';

exports.Handlebars       =  require('handlebars');
exports.express          =  require('express');

exports.app               =  require('./lib/app');
exports.devServer         =  require('./lib/dev-server');
exports.registerPartials  =  require('./lib/register-partials');
exports.registerEndpoints =  require('./lib/register-endpoints');
exports.combineShims      =  require('./lib/combine-shims');
exports.launchPhantomJS   =  require('./lib/launch-phantomjs');
