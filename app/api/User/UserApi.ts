import { LoginData, RegisterData } from '../../../features/user/UserSlice'
import Ws from '../../../services/socket'

// import { store } from '../store'

class UserApi {
  public authUser() {
    return new Promise((resolve, reject) => {
      Ws.socket.emit('user:auth', ({ error, data }: any) => {
        if (error) reject(error)
        else resolve(data)
      })
    })
  }

  public registerUser(payload: RegisterData) {
    return new Promise((resolve, reject) => {
      Ws.socket.emit('user:register', payload, ({ error, data }: any) => {
        if (error) reject(error)
        else resolve(data)
      })
    })
  }

  public loginUser(payload: LoginData): Promise<{ token: string; user: any }> {
    return new Promise((resolve, reject) => {
      Ws.socket.emit('user:login', payload, ({ error, data }: any) => {
        if (error) reject(error)
        else resolve(data)
      })
    })
  }

  // public async init(socket: Socket) {
  //   if (this.booted) return
  //   this.booted = true
  //   // console.log('init class', this.store.getState())

  //   const token = await SecureStore.getItemAsync('auth_token')
  //   console.log('token po reloade', { token }, socket)

  //   // this.store = store
  //   // this.ws = io(apiUrl + '/user', { auth: { token } })
  //   this.ws = socket

  // }
}

export default new UserApi()
