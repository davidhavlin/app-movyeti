import { TUser } from './user-types'

export interface RegisterData {
  email: string
  username: string
  password: string
}
export interface LoginData {
  email: string
  password: string
}
export interface AuthResponse {
  error?: any // TODO
  data: TUser
}
