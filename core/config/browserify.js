'use strict';

var browserify = require('browserify');

var go = module.exports = function () {
  return browserify()
    .require(require.resolve('underscore'), { expose: 'underscore' })
    .require(require.resolve('backbone'), { expose: 'backbone' })
    .require(require.resolve('./expose-jquery'), { expose: 'jquery' })
    ;
};
