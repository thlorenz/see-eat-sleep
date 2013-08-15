'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var AteView = require('../../views/ate');
var FoodsView = require('../../views/foods');
var FoodsModel = require('../../models/foods');

var mockFoods = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg',
];

describe('integration ate view and foods view', function () {
  var foodsView, ateView;
  var clazzAte = 'ses-eat-ate';
  var clazzFoods = 'ses-eat-foods';

  before(function () {
    $('body').append($('<input type="button">').addClass(clazzAte));
    ateView = new AteView({ el: $('.' + clazzAte) });

    $('body').append($('<ul>').addClass(clazzFoods));

    foodsView = new FoodsView({
      el: $('.' + clazzFoods),
      model: {
        fetch: function (opts) {
          opts.success(new FoodsModel({ images: mockFoods }));
        }
      }
    });
  });

  after(function () {
    $('.' + clazzAte).remove();
    $('.' + clazzFoods).remove();
  });

  it('foods view has no images initially', function () {
    assert.equal(foodsView.$el.find('img').length, 0);
  });


  describe('when the user clicks ate', function () {

    before(function () {
      ateView.$el.trigger('click');
    });

    it('adds an image to the foods view', function () {
      assert.equal(foodsView.$el.find('img').length, 1);
    });

    describe('when the user clicks ate again', function () {

      before(function () {
        ateView.$el.trigger('click');
      });

      it('adds another image to the foods view', function () {
        assert.equal(foodsView.$el.find('img').length, 2);
      });

    });
  });

});
