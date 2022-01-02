export interface TUser {
  email: string
  username: string
  id: number
}
export interface UserState {
  user: null | TUser
}
