'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var see = require('../../see');

describe('sights view', function () {
  var sightsView;

  before(function () {
    sightsView = see.mainView.sightsView;
    sightsView.$el.empty();
  });

  it('has no images initially', function () {
    assert.equal(sightsView.$el.find('img').length, 0);
  });


  describe('when the user saw', function () {

    before(function () {
      localBus.trigger('saw');
    });

    it('adds an image to the sights', function () {
      assert.equal(sightsView.$el.find('img').length, 1);
    });

    describe('when the user saw again', function () {

      before(function () {
        localBus.trigger('saw');
      });

      it('adds another image to the sights', function () {
        assert.equal(sightsView.$el.find('img').length, 2);
      });

    });
  });

});
