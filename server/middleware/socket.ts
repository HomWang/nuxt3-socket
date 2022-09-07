import type { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'socket.io'

let server: any = null

export default (req: IncomingMessage, res: ServerResponse) => {
  if (!server) {
    // @ts-expect-error: Nuxt3
    server = res.socket?.server
    const io = new Server(server);

    io.on('connection', (socket) => {
      console.log('Made socket connection');

      socket.emit('hello', { hello: 'Welcome to Nuxt3' });

      socket.on('msg', (msg) => {
        console.log('Recived: ' + msg)

        setTimeout(() => {
          // socket.emit('msg', `Response to: ${msg}`)
          const data = {
            txt: msg,
            time: new Date()
          }
          // Broadcast to all socket connections
          socket.broadcast.emit('msg', data);
          // Send yourself a copy
          socket.emit('msg', data);
        }, 1000)
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }
}
