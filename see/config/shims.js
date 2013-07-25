'use strict';

var coreShims = require('ses-core/config/shims');
var xtend = require('util')._extend;

var shims = { /* none yet */ };

// all shims need to xtend from the apps/core they depend on
module.exports = xtend(shims, coreShims);
