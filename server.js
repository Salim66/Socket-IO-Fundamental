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

const personalMeet = io.of('/personal');
const officialMeet = io.of('/official');

personalMeet.on('connection', (socket) => {
    console.log('Personal socket is connected');
});

officialMeet.on('connection', (socket) => {
    console.log('Official socket is connected');
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