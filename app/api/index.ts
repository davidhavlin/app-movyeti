import Ws from '../../services/socket'
// import store from '../store'
import { Store } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import UserApi from './module-user/UserApi'

const ws = new Ws()
ws.boot()

type ApiModules = 'user' | 'movie'

class ApiProvider {
  get(api: ApiModules) {
    // @ts-ignore
    return this[`_${api}`]
  }
  public _user!: UserApi
  // public _user = new UserApi(ws.socket, store)
}

const instance = new ApiProvider()
console.log('kolko krat sa spusta toto?')

export default instance

export async function initWebsockets(store: Store) {
  // const initialize = async () => {
  instance._user = new UserApi(ws.socket, store)
  // }

  // await initialize()
}
