const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');
app.use(cors);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        method: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('join_room', (data) => {
        socket.join(data);
      //  console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });


    socket.on('send_point', (data) => {
     //   console.log(`User with ID: ${socket.id} joined room: ${data.room} and give points to ${data.pointTo}`);
        io.in(data.room).emit('distribute_point', data);
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id);
    })
});

server.listen(3001, () => {
    console.log('sever running')
})
