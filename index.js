
// import { Server } from "socket.io";

import express from 'express';
import { createServer } from 'node:http';

import { Server } from 'socket.io';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

let message = "";

io.on('connection', (socket) => {
    
    socket.on('msg', (msg) => {
        message = msg
        console.log('message: ' + message.innerHTML);
        io.emit('msg', message); 
      });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});