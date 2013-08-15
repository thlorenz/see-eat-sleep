'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var FoodsView = require('../../views/foods');
var FoodsModel = require('../../models/foods');

var mockFoods = [
  'http://www.rentcafe.com/blog/wp-content/uploads/2012/11/soul-food.jpg',
  'http://www.rentcafe.com/blog/wp-content/uploads/2011/11/thanksgiving.jpg'
];

describe('foods view', function () {
  var foodsView;
  var server;
  var clazz = 'ses-eat-foods';

  before(function () {
    $('body').append($('<ul>').addClass(clazz));

    foodsView = new FoodsView({
      el: $('.' + clazz),
      model: {
        fetch: function (opts) {
          opts.success(new FoodsModel({ images: mockFoods }));
        }
      }
    });

  });

  after(function () {
    $('.' + clazz).remove();
  });

  it('has no images initially', function () {
    assert.equal(foodsView.$el.find('img').length, 0);
  });


  describe('when the user ate', function () {

    before(function () {
      localBus.trigger('ate');
    });

    it('adds an image to the foods', function () {
      assert.equal(foodsView.$el.find('img').length, 1);
    });

    describe('when the user ate again', function () {

      before(function () {
        localBus.trigger('ate');
      });

      it('adds another image to the foods', function () {
        assert.equal(foodsView.$el.find('img').length, 2);
      });

    });
  });

});
