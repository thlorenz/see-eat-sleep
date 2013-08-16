'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var globalBus = require('ses-core').globalBus;
var BedsView = require('../../views/beds');
var BedsModel = require('../../models/beds');

var mockBeds = [
  'http://www.rentcafe.com/blog/wp-content/uploads/2012/11/soul-bed.jpg',
  'http://www.rentcafe.com/blog/wp-content/uploads/2011/11/thanksgiving.jpg'
];

describe('beds view', function () {
  var bedsView;
  var server;
  var clazz = 'ses-sleep-beds';

  before(function () {
    $('body').append($('<ul>').addClass(clazz));

    bedsView = new BedsView({
      el: $('.' + clazz),
      model: {
        fetch: function (opts) {
          opts.success(new BedsModel({ images: mockBeds }));
        }
      }
    });

  });

  after(function () {
    $('.' + clazz).remove();
  });

  it('has no images initially', function () {
    assert.equal(bedsView.$el.find('img').length, 0);
  });


  describe('when the ate', function () {

    before(function () {
      globalBus.trigger('ses-eat:ate');
    });

    it('adds an image to the beds', function () {
      assert.equal(bedsView.$el.find('img').length, 1);
    });

    // TODO: changes bed image
    /*describe('when the user slept again', function () {

      before(function () {
        localBus.trigger('slept');
      });

      it('adds another image to the beds', function () {
        assert.equal(bedsView.$el.find('img').length, 2);
      });

    });*/
  });

});
