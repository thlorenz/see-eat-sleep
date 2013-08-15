'use strict';

var assert = require('assert');
var see = require('../../see');
var SightsModel = require('../../models/sights');

var Backbone = require('backbone');

describe('see main', function () {
  var mainView, server;
  before(function () {
    sinon.stub(Backbone, 'sync');
    mainView = see.init();
  });

  after(function () {
    Backbone.sync.restore();
  });

  describe('all views exist', function () {
    it('has a main view', function () {
      assert.ok(mainView);
    });

    it('main view has saw view', function () {
      assert.ok(mainView.sawView);
    });

    it('main view has sights view', function () {
      assert.ok(mainView.sightsView);
    });

  });
});
