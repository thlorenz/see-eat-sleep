'use strict';

var seeShims = require('ses-see/config/shims');
var combineShims = require('ses-bootstrap').combineShims;

// for more info on configuring shims see ./core/config/shims
var shims = {
  wrap: undefined,
  expose: undefined
};

// all shims need to be combined with the ones from the the app or core modules they depend on
// therefore whenever we add another sub app with its own shims, we need to add it here
module.exports = combineShims(seeShims, shims);
