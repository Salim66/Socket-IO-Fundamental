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


// route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client.html'));
});


// listen server
app.listen(5050, () => {
    console.log(`server is running on port 5050`.bgCyan.black);
});