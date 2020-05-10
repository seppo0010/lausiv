let io = require('socket.io')(3001);

io.on('connect', (socket: SocketIO.Socket) => {
  console.log('connected')
})