'use strict';

var see = require('ses-see');

exports.init = function () {
  console.log('app starting to load sub apps');
  see.init();
};
