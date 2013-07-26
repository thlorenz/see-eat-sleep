'use strict';

var coreShims = require('ses-core/config/shims');
var combineShims = require('ses-bootstrap').combineShims;

// for more info on configuring shims see ./core/config/shims
var shims = {
  wrap: undefined,
  expose: undefined
};

// all shims need to be combined with the ones from the the app or core modules they depend on
module.exports = combineShims(coreShims, shims);
