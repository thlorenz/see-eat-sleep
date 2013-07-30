'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var SawView = require('../../views/saw');

describe('a test', function () {
  var sawButton = $('#ses-see-main .ses-see-saw');
  var sawView = new SawView(sawButton);

  it('!!1 is true', function () {
    assert.equal(!!1, true);
  });
});
