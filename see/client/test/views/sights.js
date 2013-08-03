'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var see;
var server;

var mockSights = [
  'http://upload.wikimedia.org/wikipedia/commons/a/a0/Potsdam_St._Nikolaikirche_2005.jpg',
  'http://www.europeinsideout.com/wp-content/uploads/2012/03/berlin-brandenburger_tor-300x199.jpg',
];

describe('sights view', function () {
  var sightsView;

  beforeEach(function (done) {
    server = sinon.fakeServer.create();
    server.respondWith(
      'GET', '/data/ses-see/sights',
      [ 200, { 'Content-Type': 'application/json' }, JSON.stringify({ images: mockSights }) ]
    );

    // TODO: these things should have an init function instead of things starting to fly just when they are required
    see = require('../../see');

    sightsView = see.mainView.sightsView;
    sightsView.$el.empty();

    server.respond();

    done();
    /*if (sightsView.ready) done();
    else localBus.on('sights:view:ready', done);*/
  });

  afterEach(function () {
    server.restore();
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
