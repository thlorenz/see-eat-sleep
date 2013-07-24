'use strict';
var core = require('ses-core');

var go = module.exports = function () {
  return core() + ' pulled in see';
};

// Test
if (!module.parent) {
  console.log(go());
}
