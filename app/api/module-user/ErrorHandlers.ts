import { Socket } from 'socket.io-client'
import * as SecureStore from 'expo-secure-store'
import { Store } from '@reduxjs/toolkit'
import { setWishRoute } from '../../GlobalSlice'
import { showLoginAlert } from '../../../screens/Alerts/AlertLogin'

interface AuthError {
  type: 'TokenExpiredError' | 'JsonWebTokenError' | 'NotBeforeError'
}

export const errorHandlers = (socket: Socket, store: Store) => {
  if (!socket) return

  socket.on('error:auth', async (error: AuthError) => {
    console.log('AUTH FAILED', error)
    if (error.type === 'TokenExpiredError') {
      await SecureStore.deleteItemAsync('auth_token')
      showLoginAlert(store)
    }
  })
}
