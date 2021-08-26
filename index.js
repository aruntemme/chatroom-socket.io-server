const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://chatroom-socket.surge.sh/",
    methods: ["GET", "POST"]
  }
});


io.on('connection', socket => {
  socket.on('message', ({name, message}) => {
    io.emit('message', {name, message})
  })
})

server.listen(4000, () => {
  console.log('listening on 4000')
})