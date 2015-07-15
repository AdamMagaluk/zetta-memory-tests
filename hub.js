var zetta = require('zetta');
var Photocell = require('zetta-photocell-mock-driver');
var MemRegistry = require('./mem_registry');
var MemPeerRegistry = require('./mem_peer_registry');
var uuid = require('node-uuid');

zetta({ registry: new MemRegistry(), peerRegistry: new MemPeerRegistry() })
  .name(uuid.v4())
  .link('http://localhost:1337')
  .use(Photocell)
  .listen(0)
