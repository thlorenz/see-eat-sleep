'use strict';

var mocha_phantom = require.resolve('mocha-phantomjs');
var phantom = require('phantomjs').path;
var cp = require('child_process');

var go = module.exports = function (server) {
 server.on('listening', function() {
    var port = server.address().port;

    var cmd = phantom;
    var args = [mocha_phantom, 'http://localhost:' + port];

    var child = cp.spawn(cmd, args);

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on('exit', function(code) {
        server.close();
        process.exit(code);
    });
  });
};
