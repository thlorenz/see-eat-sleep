'use strict';

var $ = require('jquery');

// both divs are positioned inside the ses-bootstrap-head-test-support partial

function appendMochaDiv () {
  var el = document.createElement('div');
  el.setAttribute('id', 'mocha');
  document.body.appendChild(el);
}

function wrapBodyInTestedAppDiv() {
  var el = document.createElement('div');
  el.setAttribute('id', 'tested-app');

  while (document.body.firstChild) {
    el.appendChild(document.body.firstChild);
  }
  document.body.appendChild(el);
}

$(function () {
  // mocha ui and reporter are initialized at this point (see ses-bootstrap-test-support partial)
  wrapBodyInTestedAppDiv();
  appendMochaDiv();

  /* global mochaPhantomJS, mocha */
  if (window.mochaPhantomJS) mochaPhantomJS.run();
  else { mocha.run(); }
});
