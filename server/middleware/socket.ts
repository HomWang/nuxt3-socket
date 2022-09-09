import type { IncomingMessage, ServerResponse } from 'http'
import { Server } from 'socket.io'

let server: any = null

export default (req: IncomingMessage, res: ServerResponse) => {
  if (!server) {
    var ip = req.headers['x-forwarded-for'] ||
      req.ip ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress || '';
    if (ip.split(',').length > 0) {
      ip = ip.split(',')[0]
    }
    ip = ip.substr(ip.lastIndexOf(':') + 1, ip.length);

    // @ts-expect-error: Nuxt3
    server = res.socket?.server
    const io = new Server(server);

    io.on('connection', (socket) => {
      console.log('Made socket connection');

      socket.emit('getIP', ip);

      socket.emit('hello', { hello: 'Welcome to Nuxt3' });

      socket.on('msg', (user, text) => {
        console.log('Recived: ' + text)

        // setTimeout(() => {
        // socket.emit('msg', `Response to: ${msg}`)
        const data = {
          user: user,
          text: text,
          time: new Date()
        }
        // Broadcast to all socket connections
        socket.broadcast.emit('msg', data);
        // Send yourself a copy
        socket.emit('msg', data);
        // }, 1000)
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }
}
