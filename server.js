const express = require('express');
const colors = require('colors');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');


// init express
const app = express();

// create express server to raw server
const httpServer = createServer(app);

// socket server init
const io = new Server(httpServer);

// create a connection to client
io.on('connection', (socket) => {
    console.log('Client connected successfully'.bgYellow.black);

    socket.on('msg', (data) => {
        io.sockets.emit('testdata', data);
    })
})


// route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client.html'));
});


// listen server
httpServer.listen(5050, () => {
    console.log(`server is running on port 5050`.bgCyan.black);
});