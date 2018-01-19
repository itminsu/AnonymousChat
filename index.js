const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 8000;

// Import Controllers
var filtering = require("./controllers/learning.js");


//Chatting
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){

    io.emit('chat message', "Message: " + msg );

  });
});

http.listen(port, () => console.log('Listening on port ' + port));


