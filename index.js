const app = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:3000",
  }
});

io.on('connection', socket => {
  socket.on('message', ({name, message}) => {
    io.emit('message', {name, message})
  })
})

http.listen(4000, () => {
  console.log('listening on 8000')
})