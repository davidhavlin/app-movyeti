import { Socket } from 'socket.io-client'

export const UserListeners = (socket: Socket) => {
  if (!socket) return

  socket.on('user:skuska', (data) => {
    console.log('SKUSKA', data)
  })
}
