let io = require('socket.io')(3001);

io.on('connect', (socket: SocketIO.Socket) => {
  socket.on('room', (room: string) => {
    console.log('joining room', room)
  })
})