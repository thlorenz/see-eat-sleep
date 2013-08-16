'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var SleptView = require('../../views/slept');
var BedsView = require('../../views/beds');
var BedsModel = require('../../models/beds');

var mockBeds = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg',
];

describe('integration slept view and beds view', function () {
  var bedsView, sleptView;
  var clazzSlept = 'ses-sleep-slept';
  var clazzBeds = 'ses-sleep-beds';

  before(function () {
    $('body').append($('<input type="button">').addClass(clazzSlept));
    sleptView = new SleptView({ el: $('.' + clazzSlept) });

    $('body').append($('<ul>').addClass(clazzBeds));

    bedsView = new BedsView({
      el: $('.' + clazzBeds),
      model: {
        fetch: function (opts) {
          opts.success(new BedsModel({ images: mockBeds }));
        }
      }
    });
  });

  after(function () {
    $('.' + clazzSlept).remove();
    $('.' + clazzBeds).remove();
  });

  it('beds view has no images initially', function () {
    assert.equal(bedsView.$el.find('img').length, 0);
  });


  describe('when the user clicks slept', function () {

    before(function () {
      sleptView.$el.trigger('click');
    });

    it('adds an image to the beds view', function () {
      assert.equal(bedsView.$el.find('img').length, 1);
    });

    describe('when the user clicks slept again', function () {

      before(function () {
        sleptView.$el.trigger('click');
      });

      it('adds another image to the beds view', function () {
        assert.equal(bedsView.$el.find('img').length, 2);
      });

    });
  });

});
