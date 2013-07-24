'use strict';

var fs = require('fs');

/**
 * Registers all partials that are exposed by this package with handlebars.
 * Note that this happens on server startup which is why sync IO is ok.
 *
 * @name exports
 * @function
 * @param Handlebars {Object} Handlebars dependency
 */
var go = module.exports = function (Handlebars) {

  // these files could be auto discovered in the templates dir, but explicitness is good at times
  [ 'head.hbs', 'header.hbs' ]
    .forEach(function (file) {
      var fullPath = require.resolve('../../client/templates/' + file);
      var name = file.slice(0, -4); // .hbs has four chars
      var id = 'ses-core-' + name;

      var tmpl = fs.readFileSync(fullPath, 'utf8');

      Handlebars.registerPartial(id, tmpl);
    });
};

// Test
if (!module.parent) {
  var Handlebars = require('handlebars');
  go(Handlebars);
  console.log(Handlebars.partials);
}
