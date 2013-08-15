'use strict';

/**
 * Initializes browserify instance and adds and exposes certain client side libraries with it.
 *
 * jquery is exposed in order to be able to do `var $ = require('jquery');`
 * backbone and underscore are exposed here in order to include them only once in the bundle for two reasons:
 *  - smaller bundle
 *  - it is desirable to use the same backbone instance across the entire application
 * 
 * TODO: Exposing backbone and underscore may not be necessary once each module
 * installs via npm, since `npm dedupe` may ensure that we always only have one
 * copy of each in our node_modules.
 * Therefore once we reach that stage we should check if that is the case.
 *
 * @name exports
 * @function
 * @return {Object} browserify instance
 */
var go = module.exports = function (browserify) {
  return browserify()
    .require(require.resolve('underscore'), { expose: 'underscore' })
    .require(require.resolve('backbone'), { expose: 'backbone' })
    .require(require.resolve('./expose-jquery'), { expose: 'jquery' })
    .require(require.resolve('../client/core'), { expose: 'ses-core' })
    ;
};
