'use strict';

var $ = require('ses-core').jquery;
var assert = require('assert');

function getResource(url, cb) {
  $.get(url, function (res) {
    cb(null, res);
  })
  .fail(cb);
}

describe('fake server responds', function () {

  var server;
  it('gets those resources', function (done) {
    server = sinon.fakeServer.create();
    server.respondWith(
      'GET', '/some/resource.json',
      [ 200, { 'Content-Type': 'application/json' },
      '{ "id": 1, "data" : "hello world" }' ]
    );

    getResource('/some/resource.json', function (err, res) {
      if (err) {
        assert.fail(err);
      } else {
        assert(res.id, 'hello world', 'correct id');
        assert(res.data, 1, 'correct data');
      }
      done();
    });

    server.respond();
  });
});
