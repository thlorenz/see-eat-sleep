'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var globalBus = require('ses-core').globalBus;
var SawView = require('../../views/saw');

describe('saw view', function () {

  describe('when I click the saw button', function () {
    var sawView, localSaw, globalSaw;
    var clazz = 'ses-see-saw';

    before(function () {
      localSaw = false;
      localBus.on('saw', function () {
        localSaw = true;
      });

      globalSaw = false;
      globalBus.on('ses-see:saw', function () {
        globalSaw = true;
      });

      $('body').append($('<input type="button">').addClass(clazz));

      sawView = new SawView({ el: $('.' + clazz) });
      sawView.$el.trigger('click');
      
    });

    after(function () {
      $('.' + clazz).remove();
    });

    it('tells the local bus that the user saw', function () {
      assert.ok(localSaw);
    });

    it('tells the global bus that the user saw', function () {
      assert.ok(globalSaw);
    });

  });

});
