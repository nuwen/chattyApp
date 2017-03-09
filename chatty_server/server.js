// server.js
const uuid = require('node-uuid');
const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
 let numberConnections = 0;
 let usersColor = {};

 function colorGenerator() {
   return '#'+Math.floor(Math.random()*16777215).toString(16);
 }

wss.on('connection', (ws) => {
  console.log('Client connected');

  numberConnections = numberConnections + 1;

  wss.clients.forEach(function each(client) {
    let outgoingCount = {type: 'incomingCount', count: numberConnections};
    client.send(JSON.stringify(outgoingCount));
    let userColor = {type: 'userColor', userID: uuid.v4(), color: colorGenerator()};
    client.send(JSON.stringify(userColor));
  })


  ws.on('message', function incoming(data){
    let parsedData = JSON.parse(data);
    let outgoingMessage;
    console.log(parsedData);

    switch(parsedData.type){

      case 'postMessage':
        outgoingMessage={
          id: uuid.v4(),
          type: 'incomingMessage',
          content: parsedData.content,
          username: parsedData.username
        }
        break;

      case 'postNotification':
        outgoingMessage={
          id: uuid.v4(),
          type: 'incomingNotification',
          content: parsedData.content,
          username: parsedData.username
        }
        break;
    }

    console.log(outgoingMessage);
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(outgoingMessage));
    })
  });





  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    numberConnections = numberConnections - 1;
    wss.clients.forEach(function each(client) {
      let outgoingCount = {type: 'incomingCount', count: numberConnections};
      client.send(JSON.stringify(outgoingCount));
    })
  })
});
