const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
 
const app = express();
const server = http.Server(app);
const io = socketIO(server);
 
io.on('connection', (socket) => {
  console.log('Пользователь подключился');
   
  socket.on('send message', (message) => {
    io.emit('new message', message);
  });
   
  socket.on('disconnect', () => {
    console.log('Пользователь отключился');
  });
});
 
server.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
