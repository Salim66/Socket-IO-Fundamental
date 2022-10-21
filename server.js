const express = require('express');
const colors = require('colors');
const path = require('path');


// init express
const app = express();


// route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client.html'));
});

// listen server
app.listen(5050, () => {
    console.log(`server is running on port 5050`.bgCyan.black);
});