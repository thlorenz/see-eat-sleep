'use strict';

var jquery = require('jquery');
var underscore = require('underscore');
var Backbone = require('backbone');
var assert = require('assert');

var core = require('../core');

describe('core init initializes backbone, jquery and underscore', function () {

  before(function () {
    core.init();
  });

  it('jquery', function () {
    assert.equal(jquery().jquery, '1.10.2');
  });

  it('backbone', function () {
    assert.equal(Backbone.VERSION, '1.0.0');
  });

  it('underscore', function () {
    assert.equal(underscore.VERSION, '1.5.1');
  });

  it('attaches jquery to backbone', function () {
    assert.equal(Backbone.$, jquery);
  });

  it('attaches underscore functions to backbone model', function () {
    var model = new Backbone.Model();
    assert.equal(typeof model.pick, 'function');
  });

});
