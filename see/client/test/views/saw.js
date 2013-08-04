'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var globalBus = require('ses-core').globalBus;
var see = require('../../see');

describe('saw view', function () {

  describe('when I click the saw button', function () {
    var sawView, localSaw, globalSaw, server;

    before(function () {
      localSaw = false;
      localBus.on('saw', function () {
        localSaw = true;
      });

      globalSaw = false;
      globalBus.on('ses-see-saw', function () {
        globalSaw = true;
      });

      server = sinon.fakeServer.create();
      server.respondWith(
        'GET', '/data/ses-see/sights',
        [ 200, { 'Content-Type': 'application/json' }, JSON.stringify({ images: [] }) ]
      );

      var mainView = see.init();
      server.respond();

      sawView = mainView.sawView;
      sawView.$el.trigger('click');
    });

    after(function () {
      server.restore();
    });

    it('tells the local bus that the user saw', function () {
      assert.ok(localSaw);
    });

    it('tells the global bus that the user saw', function () {
      assert.ok(globalSaw);
    });

  });

});
