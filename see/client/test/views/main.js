'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var see = require('../../see');

describe('see main', function () {
  var mainView, server;
  before(function () {
    server = sinon.fakeServer.create();
    server.respondWith(
      'GET', '/data/ses-see/sights',
      [ 200, { 'Content-Type': 'application/json' }, JSON.stringify({ images: [] }) ]
    );

    mainView = see.init();
    server.respond();
  });

  after(function () {
    server.restore();
  });

  describe('all views exist', function () {
    it('has a main view', function () {
      assert.ok(mainView);
    });

    it('main view has saw view', function () {
      assert.ok(mainView.sawView);
    });

    it('main view has sights view', function () {
      assert.ok(mainView.sightsView);
    });

  });
});
