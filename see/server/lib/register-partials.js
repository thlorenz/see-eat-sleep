'use strict';

var fs = require('fs');
var core = require('ses-core');
var Handlebars = core.Handlebars;

/**
 * Registers all partials that are exposed by this package with handlebars.
 * Note that this happens on server startup which is why sync IO is ok.
 *
 * @name exports
 * @function
 */
var go = module.exports = function () {

  // these files could be auto discovered in the templates dir, but explicitness is good at times
  [ 'main.hbs' ]
    .forEach(function (file) {
      var fullPath = require.resolve('../../client/templates/' + file);
      var name = file.slice(0, -4); // .hbs has four chars
      var id = 'ses-see-' + name;

      var tmpl = fs.readFileSync(fullPath, 'utf8');

      Handlebars.registerPartial(id, tmpl);
    });
};

// Test
if (!module.parent) {
  go();
  console.log(Handlebars.partials);
}
