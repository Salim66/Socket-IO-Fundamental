const express = require('express');
const colors = require('colors');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { readFileSync, writeFileSync } = require('fs');


// init express
const app = express();

// create express server to raw server
const httpServer = createServer(app);

// socket server init
const io = new Server(httpServer);

io.on('connection', (socket) => {

    socket.join('php');
    io.sockets.in('php').emit('msg1', 'I am from php');

    socket.join('mern');
    io.sockets.in('mern').emit('msg2', 'I am from mern');

    socket.join('laravel');
    io.sockets.in('laravel').emit('msg3', 'I am from laravel');

})

// static folder
app.use(express.static(path.join(__dirname, '')));

// route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client.html'));
});


// listen server
httpServer.listen(5050, () => {
    console.log(`server is running on port 5050`.bgCyan.black);
});