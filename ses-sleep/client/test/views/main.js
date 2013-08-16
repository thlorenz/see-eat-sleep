'use strict';

var assert = require('assert');
var sleep = require('../../sleep');
var BedsModel = require('../../models/beds');

var Backbone = require('backbone');

describe('sleep main', function () {
  var mainView, server;
  before(function () {
    sinon.stub(Backbone, 'sync');
    mainView = sleep.init();
  });

  after(function () {
    Backbone.sync.restore();
  });

  describe('all views exist', function () {
    it('has a main view', function () {
      assert.ok(mainView);
    });

    it('main view has beds view', function () {
      assert.ok(mainView.bedsView);
    });

  });
});
