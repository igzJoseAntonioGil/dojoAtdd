'use strict';

const server = require('./server');
const createCheckout = require('./checkout/rest/createCheckout.js');
const retrieveCheckout = require('./checkout/rest/retrieveCheckout.js');
const requestHeartbeat = require('./heartbeat/rest/requestHeartbeat.js');

let serverInstance = server.create();

server.start(serverInstance, 3000).tap(() => {
  //serverInstance.post('/api/checkouts', createCheckout);
  //serverInstance.get('/api/checkouts/:checkoutId', retrieveCheckout);
  serverInstance.get('/api/heartbeat', requestHeartbeat);

  console.log('Up and running');
});
