import { Socket } from 'socket.io-client'
import * as SecureStore from 'expo-secure-store'

export const ErrorListeners = (socket: Socket) => {
  if (!socket) return

  socket.on('auth:failed', async (error) => {
    console.log('AUTH FAILED', error)
    if (error === 'TokenExpiredError') {
      await SecureStore.deleteItemAsync('auth_token')
    }
  })
}
