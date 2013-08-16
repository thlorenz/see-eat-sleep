'use strict';

var dirs = require('../../../config/directories');

var go = module.exports = function (app, express) {
  app.use('/ses-sleep-css', express.static(dirs.css));
};
