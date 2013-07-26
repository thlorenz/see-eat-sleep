'use strict';

module.exports = {
  // wrap shims will be shimmed with browserify-shim which wraps them to make them commonJS compat
  wrap: {
    noncjs: {
      path: require.resolve('../vendor/non-commonjs-thing'),
      exports: 'booh'
    }
  },

  // expose shims will just be exposed under the given name
  // in this case we will be able to do 'var $ = require('jquery');' from anywhere in the client
  expose: {
    jquery: require.resolve('../vendor/expose-jquery')
  }
};
