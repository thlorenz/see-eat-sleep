'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var globalBus = require('ses-core').globalBus;
var SleptView = require('../../views/slept');

describe('slept view', function () {

  describe('when I click the slept button', function () {
    var sleptView, localSlept, globalSlept;
    var clazz = 'ses-sleep-slept';

    before(function () {
      localSlept = false;
      localBus.on('slept', function () {
        localSlept = true;
      });

      globalSlept = false;
      globalBus.on('ses-sleep-slept', function () {
        globalSlept = true;
      });

      $('body').append($('<input type="button">').addClass(clazz));

      sleptView = new SleptView({ el: $('.' + clazz) });
      sleptView.$el.trigger('click');
      
    });

    after(function () {
      $('.' + clazz).remove();
    });

    it('tells the local bus that the user slept', function () {
      assert.ok(localSlept);
    });

    it('tells the global bus that the user slept', function () {
      assert.ok(globalSlept);
    });

  });

});
