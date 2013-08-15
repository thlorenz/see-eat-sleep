'use strict';

var see = require('ses-see');
var eat = require('ses-eat');

exports.init = function () {
  console.log('app starting to load sub apps');
  see.init();
  eat.init();
};
