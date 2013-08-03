'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');

function getResource(url, cb) {
  $.get(url, function (res) {
    cb(null, res);
  })
  .fail(cb);
}

// both approaches keep giving me:  statusText: "TypeError: Cannot call method 'open' of undefined"
describe('fake server responds', function () {

  var server;
  it('gets those resources', function (done) {
    server = sinon.fakeServer.create();
    server.respondWith(
      'GET', '/some/resource.json',
      [ 200, { 'Content-Type': 'application/json' },
      '[ { "id": 1, "data" : "hello world" } ]' ]
    );

    getResource('/some/resource.json', function (err, res) {
      if (err) console.error(err);
      else console.log(res);
      done();
    });

    server.respond();
  });
});

describe('xhr fake responsee', function () {
  var requests = [];
  var xhr;

  it('gets those resources', function (done) {
    xhr = sinon.useFakeXMLHttpRequest();
    xhr.onCreate = $.proxy(function (xhr) {
      requests.push(xhr);
    });

    getResource('/some/resource.json', function (err, res) {
      if (err) console.error(err);
      else console.log(res);
      console.error('requests', requests);
      done();
    });

    xhr.restore();
  });
});
