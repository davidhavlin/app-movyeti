import { Socket } from 'socket.io-client'
import { AuthResponse, LoginData, RegisterData } from '../../../types/auth-types'
import { TUser } from '../../../types/user-types'
import { errorHandlers } from './ErrorHandlers'

class UserApi {
  public ws!: Socket
  public store: any

  constructor(ws: Socket, store: any) {
    this.ws = ws
    this.store = store

    this.init()
  }

  public authUser(): Promise<TUser | any> {
    return new Promise((resolve, reject) => {
      this.ws.emit('user:auth', ({ error, data }: AuthResponse) => {
        if (error) reject(error)
        else resolve(data)
      })
    })
  }

  public registerUser(payload: RegisterData) {
    return new Promise((resolve, reject) => {
      this.ws.emit('user:register', payload, ({ error, data }: any) => {
        if (error) reject(error)
        else resolve(data)
      })
    })
  }

  public loginUser(payload: LoginData): Promise<{ token: string; user: any }> {
    return new Promise((resolve, reject) => {
      this.ws.emit('user:login', payload, ({ error, data }: any) => {
        if (error) reject(error)
        else resolve(data)
      })
    })
  }

  private _onSkuska = (data: any) => {
    console.log('SKUSKA', data)
  }

  public async init() {
    if (!this.ws) return
    // if (this.booted) return
    // this.booted = true
    // console.log('init class', this.store.getState())

    // const token = await SecureStore.getItemAsync('auth_token')
    // console.log('token po reloade', { token }, socket)

    // this.store = store
    // this.ws = io(apiUrl + '/user', { auth: { token } })
    this.ws.on('connect', () => {
      this.ws.on('user:skuska', this._onSkuska)
    })
    this.ws.on('connect_error', (err) => {
      console.log('nom error', err)
    })

    errorHandlers(this.ws, this.store)
  }
}

export default UserApi
