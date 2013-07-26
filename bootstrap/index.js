'use strict';

exports.express          =  require('express');
exports.app              =  require('./lib/app');

exports.devServer        =  require('./lib/dev-server');
exports.registerPartials =  require('./lib/register-partials');

exports.Handlebars       =  require('handlebars');

exports.combineShims     =  require('./lib/combine-shims');
