'use strict';

var dirs = require('../../../config/directories');
var path = require('path');

module.exports = function (app, express) {
  app.get('/favicon.ico', function (req, res) {
    res.sendfile(path.join(dirs.img, 'favicon.jpg'));
  });
};
