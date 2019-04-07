const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

server.listen(3000, () => {
    console.log('Server has been started');
});

io.on('connection', (socket) => {
   socket.on('message', (message) => {
       socket.broadcast.emit('message', message);
       socket.emit('message', message);
   });
});