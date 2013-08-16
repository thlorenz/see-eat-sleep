'use strict';

var $ = require('jquery');
var assert = require('assert');
var localBus = require('../../lib/local-bus');
var globalBus = require('ses-core').globalBus;
var AteView = require('../../views/ate');

describe('ate view', function () {

  describe('when I click the ate button', function () {
    var ateView, localAte, globalAte;
    var clazz = 'ses-eat-ate';

    before(function () {
      localAte = false;
      localBus.on('ate', function () {
        localAte = true;
      });

      globalAte = false;
      globalBus.on('ses-eat:ate', function () {
        globalAte = true;
      });

      $('body').append($('<input type="button">').addClass(clazz));

      ateView = new AteView({ el: $('.' + clazz) });
      ateView.$el.trigger('click');
      
    });

    after(function () {
      $('.' + clazz).remove();
    });

    it('tells the local bus that the user ate', function () {
      assert.ok(localAte);
    });

    it('tells the global bus that the user ate', function () {
      assert.ok(globalAte);
    });

  });

});
