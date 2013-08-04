'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var see = require('../../see');

var mockSights = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg',
];

describe('integration saw view and sights view', function () {
  var sightsView;
  var sawView;
  var server;

  before(function () {
    server = sinon.fakeServer.create();
    server.respondWith(
      'GET', '/data/ses-see/sights',
      [ 200, { 'Content-Type': 'application/json' }, JSON.stringify({ images: mockSights }) ]
    );

    var mainView = see.init();
    server.respond();

    sightsView = mainView.sightsView;
    sawView = mainView.sawView;
    sightsView.$el.empty();
  });

  after(function () {
    server.restore();
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
