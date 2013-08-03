'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var see = require('../../see');

describe('see main', function () {

  describe('all views exist', function () {

    it('has a main view', function () {
      assert.ok(see.mainView);
    });

    it('main view has saw view', function () {
      assert.ok(see.mainView.sawView);
    });

    it('main view has sights view', function () {
      assert.ok(see.mainView.sightsView);
    });

  });
});
