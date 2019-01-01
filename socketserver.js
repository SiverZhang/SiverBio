"use strict";

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// app.use(express.static('public'));

io.of(/^\/room_\d/)
  .on('connect', (socket) => {
      const namespace = socket.nsp;

  })

io.on('connection', (socket) => {
    console.log('user connect');

    socket.on('disconnect', () => {
        console.log('user disconnect');
    })

    socket.on('message', (message) => {
        io.emit('message', {type: 'new-message', test: message});
    })

    socket.on('connect_error', (error) => {
        console.log(error);
      });
})

// app.get('/', (req,res) =>{
//     res.send("Welcome to the game!");
// })

http.listen(5555, () => {
    console.log('socket server started on port 5555');
})