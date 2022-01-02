import { io, Socket } from 'socket.io-client'
import { apiUrl } from '../environment'
import * as SecureStore from 'expo-secure-store'
// import { UserListeners } from '../app/api/User/UserListeners'

class Ws {
  public socket!: Socket
  private booted = false
  public navigation: any

  async boot(namespace = '', auth = true, navigation?: any) {
    if (this.booted) return
    const token = await SecureStore.getItemAsync('auth_token')

    this.booted = true
    this.navigation = navigation
    this.socket = io(apiUrl + namespace, auth ? { auth: { token } } : {})

    // this.socket.on('connect_error', (err) => {
    //   console.log('nom error', err)
    // })

    // this.socket.on('connect', () => {
    //   this.onConnect(this.socket)
    // })
  }

  // onConnect(socket: Socket) {
  //   console.log('onConnect', !!socket)
  //   if (!socket) return
  //   UserListeners(socket)
  //   ErrorListeners(socket)
  // }
}

export default Ws
