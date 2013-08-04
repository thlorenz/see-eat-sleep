'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var SightsView = require('../../views/sights');

var mockSights = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg',
];

describe('sights view', function () {
  var sightsView;
  var server;
  var clazz = 'ses-see-sights';

  before(function () {
    $('body').append($('<ul>').addClass(clazz));

    server = sinon.fakeServer.create();
    server.respondWith(
      'GET', '/data/ses-see/sights',
      [ 200, { 'Content-Type': 'application/json' }, JSON.stringify({ images: mockSights }) ]
    );

    sightsView = new SightsView({ el: $('.' + clazz) });

    server.respond();
  });

  after(function () {
    $('.' + clazz).remove();
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
