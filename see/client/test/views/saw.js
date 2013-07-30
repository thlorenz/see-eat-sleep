'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var globalBus = require('ses-core').globalBus;
var see = require('../../see');

describe('saw view', function () {

  describe('when I click the saw button', function () {
    var sawView, localSaw, globalSaw;

    before(function () {
      localSaw = false;
      localBus.on('saw', function () {
        localSaw = true;
      });

      globalSaw = false;
      globalBus.on('ses-see-saw', function () {
        globalSaw = true;
      });

      sawView = see.mainView.sawView;
      sawView.$el.trigger('click');
    });

    it('tells the local bus that the user saw', function () {
      assert.ok(localSaw);
    });

    it('tells the global bus that the user saw', function () {
      assert.ok(globalSaw);
    });

  });

});
