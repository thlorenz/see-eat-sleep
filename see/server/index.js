'use strict';
var core = require('ses-core');

var go = module.exports = function () {
  return 'hello ' + core.hello();
};

// Test
if (!module.parent) {
  console.log(go());
}
