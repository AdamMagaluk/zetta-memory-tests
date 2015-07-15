var zetta = require('zetta');
var app = require('./app');
var heapdump = require('heapdump');

zetta()
  .use(app)
//  .silent()
  .listen(1337);
