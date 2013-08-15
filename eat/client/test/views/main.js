'use strict';

var assert = require('assert');
var eat = require('../../eat');
var FoodsModel = require('../../models/foods');

var Backbone = require('backbone');

describe('eat main', function () {
  var mainView, server;
  before(function () {
    sinon.stub(Backbone, 'sync');
    mainView = eat.init();
  });

  after(function () {
    Backbone.sync.restore();
  });

  describe('all views exist', function () {
    it('has a main view', function () {
      assert.ok(mainView);
    });

    it('main view has ate view', function () {
      assert.ok(mainView.ateView);
    });

    it('main view has foods view', function () {
      assert.ok(mainView.foodsView);
    });

  });
});
