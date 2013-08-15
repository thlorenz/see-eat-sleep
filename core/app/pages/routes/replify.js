'use strict';

var replName = 'see-eat-sleep';
var sockPath = '/tmp/repl/' + replName + '.sock';

var go = module.exports = function (app, express) {
  app.get('/replify/on', function (req, res) {
    // require on demand since this is only used in development and we want to make both modules a dev-dependency
    var replify = require('replify');
    var replpad = require('replpad');

    res.send(
      '<p>Turning on replify at' + sockPath + '</p>' +
      '<p>connect to it via "rc '+ sockPath + '"</p>' +
      '<p>First: npm install -g repl-client</p>' +
      '<p>App exposed as app</p>'
    );
    replify({ name: replName, start: replpad }, app);
  });
};
