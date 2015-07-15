var cluster = require('zetta-cluster');
var zetta = require('zetta');
var Photocell = require('zetta-photocell-mock-driver');

var c = cluster({ zetta: zetta });
for(var i=0; i<1; i++) {
  var devices = [];
  for(var j=0; j<2; j++) {
    devices.push(Photocell);
  }
  c.server('server-' + i, devices, [process.argv[2]]);
}

  c.on('log', console.log)
  .on('ready', function() {
    // called when all server are connected to all of their peers
    console.log('cluster peers all connected')
  })
  .run(function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    // called once all peers run zetta.listen()
  });
