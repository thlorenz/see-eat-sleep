'use strict';

var seeShims = require('ses-see/config/shims');
var xtend = require('util')._extend;

var shims = { /* none yet */ };

// include the shims of all sub apps in the main app ones
// xtend more subapps shims here if needed
module.exports = xtend(shims, seeShims);
