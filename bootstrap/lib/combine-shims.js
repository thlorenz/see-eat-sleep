'use strict';

var xtend = require('xtend');

var go = module.exports = function () {
  var shims = [].slice.call(arguments);

  var wraps = shims
    .map(function (x) { return x.wrap; })
    .filter(function (wrap) { return !! wrap; });

  var exposes = shims
    .map(function (x) { return x.expose; })
    .filter(function (expose) { return !! expose; });

  var combinedWrap = xtend.apply(null, wraps);
  var combinedExpose = xtend.apply(null, exposes);

  return { wrap: combinedWrap, expose: combinedExpose };
};


// Test
if (!module.parent) {
  var shimUno = {
    wrap: {
      jquery: { path: 'some path', exports: '$' }
    },
    expose: {
      booh: './path/to/sucky-module.js'
    }
  };

  var shimDos = {
    wrap: {
      jqueryui: { path: 'some path to ui', exports: null }
    },
    expose: {
      script: './path/to/module-pulled-in-via-script-and-exposed-here.js'
    }
  };

  var combined = go(shimUno, shimDos);
  console.log(combined);
}
