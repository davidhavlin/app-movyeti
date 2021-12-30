import { io, Socket } from 'socket.io-client'
import { apiUrl } from '../environment'
import * as SecureStore from 'expo-secure-store'
import { UserListeners } from '../app/api/User/UserListeners'

class Ws {
  public socket!: Socket
  private booted = false

  async boot() {
    if (this.booted) return
    const token = await SecureStore.getItemAsync('auth_token')

    this.booted = true
    this.socket = io(apiUrl, { auth: { token } })

    console.log({ apiUrl, token })

    this.socket.on('connect_error', (err) => {
      console.log('nom error', err)
    })

    this.socket.on('connect', () => {
      this.onConnect(this.socket)
    })
  }

  onConnect(socket: Socket) {
    console.log('onConnect', !!socket)
    if (!socket) return
    UserListeners(socket)
    // ErrorListeners(socket)
  }
}

export default new Ws()
