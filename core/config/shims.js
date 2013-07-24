'use strict';

module.exports = {
  noncjs: {
    path: require.resolve('../vendor/non-commonjs-thing'),
    exports: 'boo'
  }
};
