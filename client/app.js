'use strict';

var see = require('ses-see');
var eat = require('ses-eat');
var sleep = require('ses-sleep');

exports.init = function () {
  console.log('app starting to load sub apps');
  see.init();
  eat.init();
  sleep.init();
};
