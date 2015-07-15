var zetta = require('zetta');
var Photocell = require('zetta-photocell-mock-driver');
var MemRegistry = require('./mem_registry');
var MemPeerRegistry = require('./mem_peer_registry');
var uuid = require('node-uuid');

zetta({ registry: new MemRegistry(), peerRegistry: new MemPeerRegistry() })
  .name(uuid.v4())
  .link('http://localhost:1337')
  .use(Photocell)
  .use(function(server) {
    server.pubsub.subscribe('_peer/connect', function(event, data) {
      console.log('Peer Connect')
      setTimeout(function(){ 
        console.log('closing connection', data.peer._isClosed)
        data.peer.close()
      }, 1000);
    });
  })
  .listen(0)
