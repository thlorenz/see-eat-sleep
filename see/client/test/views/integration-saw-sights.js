'use strict';

var $ = require('jquery');
var assert = require('assert');
var see = require('../../see');
var localBus = require('../../lib/local-bus');

describe('integration saw view and sights view', function () {
  var sightsView;
  var sawView;

  before(function (done) {
    sightsView = see.mainView.sightsView;
    sawView = see.mainView.sawView;
    sightsView.$el.empty();

    if (sightsView.ready) done();
    else localBus.on('sights:view:initialized', done);
  });

  it('sights view has no images initially', function () {
    assert.equal(sightsView.$el.find('img').length, 0);
  });


  describe('when the user clicks saw', function () {

    before(function () {
      sawView.$el.trigger('click');
    });

    it('adds an image to the sights view', function () {
      assert.equal(sightsView.$el.find('img').length, 1);
    });

    describe('when the user clicks saw again', function () {

      before(function () {
        sawView.$el.trigger('click');
      });

      it('adds another image to the sights view', function () {
        assert.equal(sightsView.$el.find('img').length, 2);
      });

    });
  });

});
