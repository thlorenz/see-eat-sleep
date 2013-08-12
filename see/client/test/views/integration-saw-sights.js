'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var SawView = require('../../views/saw');
var SightsView = require('../../views/sights');
var SightsModel = require('../../models/sights');

var mockSights = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg',
];

describe('integration saw view and sights view', function () {
  var sightsView, sawView;
  var clazzSaw = 'ses-see-saw';
  var clazzSights = 'ses-see-sights';

  before(function () {
    $('body').append($('<input type="button">').addClass(clazzSaw));
    sawView = new SawView({ el: $('.' + clazzSaw) });

    $('body').append($('<ul>').addClass(clazzSights));

    sightsView = new SightsView({
      el: $('.' + clazzSights),
      model: {
        fetch: function (opts) {
          opts.success(new SightsModel({ images: mockSights }));
        }
      }
    });
  });

  after(function () {
    $('.' + clazzSaw).remove();
    $('.' + clazzSights).remove();
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
