const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log('Received data from client:', data);

    // Process the received data and send response if necessary
  });
});

